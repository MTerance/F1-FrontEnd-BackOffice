import { Injectable } from '@angular/core';
import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential } from '@azure/identity';

@Injectable({
  providedIn: 'root'
})

const accountName = process.env['AZURE_STORAGE_ACCOUNT_NAME'] as string;

export class AzureContainerService {

  private blobServiceClient: BlobServiceClient;

  constructor() {
    this.blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );
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
