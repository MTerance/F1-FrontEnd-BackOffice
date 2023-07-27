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

  constructor() { 
    this.assets = [];
    this.files = [];
  }

  ngOnInit(): void {
    this.assets = assetsJson;
  }

  onFilesDropped(files : fileHandle[]) : void {
   console.log("TEST");
   this.files = files;
    console.log(this.files.length);
  }

}
