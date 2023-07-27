import { Component, OnInit } from '@angular/core';
import assetsJson from './../../models/fakeDataAssets.json';
import { asset, fileHandle } from 'src/app/models/asset';
@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})


export class AddAssetsComponent implements OnInit {

   assets : asset[];
   files : fileHandle[];
   assetToSend: asset;

  constructor() { 
    this.assets = [];
    this.files = [];
    this.assetToSend = {
      description : "",
      id : 0,
      name: "",
      nameFile: "",
      pathFile: "",      
      };
  }

  ngOnInit(): void {
    this.assets = assetsJson;
  }

  onFilesDropped(files : fileHandle[]) : void {
   this.files = files;
    console.log(this.files.length);
  }

  SendAsset() : void {
    
  }


}
