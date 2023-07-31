import { SafeUrl } from "@angular/platform-browser";
import { FormControl } from "@angular/forms";

export interface assetForm {

    name : FormControl<string | null>;
    description : FormControl<string | null>;
    file : FormControl<fileHandle | null>;
  }


export interface typeAsset {
    id : number;
    description : string;
    name :string;    
}


export interface asset {
    id : number;
    name : string;
    nameFile : string;
    description : string;
    pathFile : string;
    file ?: fileHandle;
}

export interface fileHandle {
    file: File;
    url: SafeUrl;
}