import { Component, OnInit } from '@angular/core';
import assetsJson from './../../models/fakeDataAssets.json';
import { asset, fileHandle, typeAsset,assetForm } from 'src/app/models/asset';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})

export class AddAssetsComponent implements OnInit {

   assets : asset[];
   typeAssets : typeAsset[];
   files : fileHandle[];
   assetForm : FormGroup<assetForm>;
   apiTypeAsset : string = "TypeMaterial";
   apiAsset : string = "asset";

  constructor(private apiService : ApiService<typeAsset>, private assetApiService : ApiService<asset>) { 
    this.assets = [];
    this.typeAssets = [];
    this.files = [];
    this.assetForm = new FormGroup<assetForm>({
      name : new FormControl<string>('', {validators: [Validators.required]}),
      description : new FormControl<string>('', {validators: [Validators.required]}),
      file : new FormControl<fileHandle | null>(null, {validators: [Validators.required]}),
    });
      this.getAssetType();
  }

  ngOnInit(): void {
    this.assets = assetsJson;
  }

  onFilesDropped(files : fileHandle[]) : void {
   this.files = files;
   console.log('result :' +  this.files[0].url);
   this.assetForm.patchValue({
      file : this.files[0]
   });

  }

  getAssetType() : void {
      this.apiService.getAll(this.apiTypeAsset).subscribe(data => {
        this.typeAssets = data;
        this.assetApiService.getAll(this.apiAsset).subscribe(data=> {
          this.assets = data;
        });
      });
  }

  sendAsset() : void {
    console.log(this.assetForm.value);
  }

}
