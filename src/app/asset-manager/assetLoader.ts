export class AssetObject {

}



export class AssetLoader {

    assets : AssetObject[];

    constructor() {
        this.assets = [];
     }

     get3DAssets() : AssetObject[] {
         return this.assets;
     }

     import3DAsset(asset : AssetObject) : void {
         this.assets.push(asset);
     }


}