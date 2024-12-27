import { Injectable } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential, InteractiveBrowserCredential } from '@azure/identity';
import * as msal from '@azure/msal-browser';
import { environment } from 'src/environments/environment';
import { CredentialsService } from './credentials.service';


const accountName = environment.AZURE_STORAGE_ACCOUNT_NAME as string;
// const connectionString = environment.CONNECTION_STRING as string;
/*
const msalConfig = {
  auth: {
    clientId: environment.AZURE_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${environment.AZURE_TENANT_ID as string}`
  }
};
*/

/*
const credentials= new InteractiveBrowserCredential({
  tenantId: environment.AZURE_TENANT_ID as string,
  clientId: environment.AZURE_CLIENT_ID as string
});
*/

@Injectable({
  providedIn: 'root'
})

export class AzureContainerService {

  private blobServiceClient: BlobServiceClient | null;
  private connectionString : string;


  constructor(private credentialsSrv : CredentialsService) {
    this.connectionString = environment.CONNECTION_STRING as string;

    const msalConfig = {
      auth: {
        clientId: environment.AZURE_CLIENT_ID as string,
        authority: `https://login.microsoftonline.com/${environment.AZURE_TENANT_ID as string}`
      }
    };

    const msalInstance = new msal.PublicClientApplication(msalConfig);

    msalInstance.initialize();
    this.blobServiceClient = BlobServiceClient.fromConnectionString(this.connectionString);
   }

  async CreateFile(file: File, containerName: string, blobName: string) {
    console.log(`filename : ${file.name} container : ${containerName} blob : ${blobName}`);
    this.blobServiceClient =  BlobServiceClient.fromConnectionString(this.connectionString);
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadData(file);
  }

  async UpdateFile(file: File, containerName: string, blobName: string) {
    console.log(`filename : ${file.name} container : ${containerName} blob : ${blobName}`);
    this.blobServiceClient =  BlobServiceClient.fromConnectionString(this.connectionString);
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    console.log(containerClient.accountName);
    console.log(containerClient.containerName);
    try
    {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    var r = await blockBlobClient.uploadData(file);
    console.log(r._response.status);
    }
    catch (e)
    {
      console.log(e);
    }
  }

  async GetFile(containerName: string, blobName: string) {
    this.blobServiceClient =  BlobServiceClient.fromConnectionString(this.connectionString);
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const downloadBlockBlobResponse = await blockBlobClient.download(0);
    const downloaded = await downloadBlockBlobResponse.blobBody;
    return downloaded;
  }
}
