import { Component, OnInit } from '@angular/core';
import assetsJson from './../../models/fakeDataAssets.json';
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
   apiAsset : string = "/asset";

  constructor(private apiAssetTypeService : ApiService<typeAsset>, private apiAssetService : ApiService<asset>) { 
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
  }

  ngOnInit(): void {
    this.assets = assetsJson;
  }

  onFilesDropped(files : fileHandle[]) : void {
   this.files = files;
    console.log(this.files.length);
  }

  getAssetType() : void {
      this.apiAssetTypeService.getAll(this.apiTypeAsset).subscribe(data => {
        this.typeAssets = data;
      });
  }

  saveAsset(assetObj : asset) : void {

    console.log(this.assetToSend);
    // post the asset to the API
    this.apiAssetService.create(this.apiAsset, this.assetToSend).subscribe(data => {
      console.log(data);
    });
    // get the id and the namefile of the asset

    // save into the folder assets

  }

}
