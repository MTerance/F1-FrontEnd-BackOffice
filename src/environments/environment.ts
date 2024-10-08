// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AZURE_STORAGE_ACCOUNT_NAME: 'f1backoffice',
  API_ADRESS: 'https://localhost:7279/api',
  BLOB_STORAGE: 'https://f1backoffice.blob.core.windows.net',
  AZURE_STORAGE_ACCOUNT_KEY: 'Default',
  API_KEY:'API_KEY'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
