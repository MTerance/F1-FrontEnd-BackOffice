import { Component, OnInit } from '@angular/core';
import { AzureContainerService } from 'src/app/services/azure-container.service';
//import assetsJson from './../../models/fakeDataAssets.json';
import { asset, fileHandle, typeAsset } from 'src/app/models/asset';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})


export class AddAssetsComponent implements OnInit {

   assets : asset[];
   typeAssets : typeAsset[];
   files : fileHandle[];
   assetToSend: asset;

   apiTypeAsset : string = "TypeMaterial";
   apiAsset : string = "asset";

  constructor(private apiAssetTypeService : ApiService<typeAsset>,
     private apiAssetService : ApiService<asset>,
    private azureContainerService : AzureContainerService) { 
    this.assets = [];
    this.typeAssets = [];
    this.files = [];
    this.assetToSend = {
      description : "",
      id : 0,
      name: "",
      nameFile: "",
      pathFile: "",
      };
      this.getAssetType();
      this.getAssets();
  }

  ngOnInit(): void {
    /*
    console.log(assetsJson);
    */
    this.assets = [];
  }

  onFilesDropped(files : fileHandle[]) : void {
   this.files = files;
   files.forEach(file => {
    console.log(file.file.name);
    this.assetToSend.nameFile = file.file.name;    
   });
    console.log(this.files.length);
  }

  getAssets() : void {
    console.log("get assets : {0}", this.apiAsset);
    this.apiAssetService.getAll(this.apiAsset).subscribe(data => {
      this.assets = data;
    });
  }

  getAssetType() : void {
      this.apiAssetTypeService.getAll(this.apiTypeAsset).subscribe(data => {
        this.typeAssets = data;
      });
  }


  checkAsset() : boolean {
    console.log(this.assetToSend);
    if (this.assetToSend.name == "" ||
       this.assetToSend.description == "" ||
        this.assetToSend.nameFile == "" || 
         this.assetToSend.typeId == 0) {
      return false;
    }
    return true;
  }



  async saveAsset(assetObj : asset) : Promise<void> {
    // post the asset to the API
    assetObj.pathFile = this.typeAssets.find(x => x.id == assetObj.typeId)?.name || "default";
    this.assetToSend.pathFile = assetObj.pathFile;
    this.apiAssetService.create(this.apiAsset, this.assetToSend).subscribe(data => {
      console.log(data);
    // save into the folder assets

     this.azureContainerService.UpdateFile(this.files[0].file, assetObj.pathFile, assetObj.nameFile);
    });

    // get the id and the namefile of the asset



  }

}
