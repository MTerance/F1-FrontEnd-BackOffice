import { SafeUrl } from "@angular/platform-browser";


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