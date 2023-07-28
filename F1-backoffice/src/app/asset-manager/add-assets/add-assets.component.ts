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

  constructor(private apiService : ApiService<typeAsset>) { 
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
    /*
    this.typeAssets.push(
        {
          description : 'test de description pour asset 3D',
          id : 0,
          name : '3D'
        },
        {
          description : 'test de description pour image',
          id : 1,
          name : 'Img'
        });
        */
      this.apiService.getAll(this.apiTypeAsset).subscribe(data => {
        this.typeAssets = data;
      });
  }

  SendAsset() : void {

  }

}
