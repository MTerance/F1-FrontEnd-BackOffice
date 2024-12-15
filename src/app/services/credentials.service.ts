import { Injectable } from '@angular/core';
import { DefaultAzureCredential, InteractiveBrowserCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { environment } from 'src/environments/environment';


const keyvaultUrl = environment.KEYVAULT_URL as string;

@Injectable({
  providedIn: 'root'
})

export class CredentialsService {

  private client : SecretClient;

  constructor() { 
    this.client = new SecretClient(keyvaultUrl,new InteractiveBrowserCredential(
      {
        tenantId: environment.AZURE_TENANT_ID as string,
        clientId: environment.AZURE_CLIENT_ID as string
      }
    ));
  }

  getSecret(secretName : string) : Promise<string> {
    return this.client.getSecret(secretName).then((secret) => {
      if (secret.value === undefined) {
        throw new Error(`Secret ${secretName} not found`);
      }
      return secret.value;
    });
  }
}
