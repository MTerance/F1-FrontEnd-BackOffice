import { Injectable } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential, InteractiveBrowserCredential } from '@azure/identity';


const accountName = process.env['AZURE_STORAGE_ACCOUNT_NAME'] as string;

const credentials= new InteractiveBrowserCredential({
  tenantId: 'common',
  clientId: '04b07795-8ddb-461a-bbee-02f9e1bf7b46'
});

@Injectable({
  providedIn: 'root'
})

export class AzureContainerService {

  private blobServiceClient: BlobServiceClient;

  constructor() {
    this.blobServiceClient =  new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      credentials);
   }

  async CreateFile(file: File, containerName: string, blobName: string) {
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadData(file);
  }

  async UpdateFile(file: File, containerName: string, blobName: string) {
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadData(file);
  }

  async GetFile(containerName: string, blobName: string) {
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const downloadBlockBlobResponse = await blockBlobClient.download(0);
    const downloaded = await downloadBlockBlobResponse.blobBody;
    return downloaded;
  }
}
