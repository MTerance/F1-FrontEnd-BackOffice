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

export class AssetModel implements asset {
    id: number;
    name: string;
    nameFile: string;
    description: string;
    pathFile: string;
    file?: fileHandle | undefined;
    constructor(asset: asset) {
        this.id = asset.id;
        this.name = asset.name;
        this.nameFile = asset.nameFile;
        this.description = asset.description;
        this.pathFile = asset.pathFile;
        this.file = asset.file;
    }    
}

export interface fileHandle {
    file: File;
    url: SafeUrl;
}