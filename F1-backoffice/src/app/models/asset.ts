import { SafeUrl } from "@angular/platform-browser";


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