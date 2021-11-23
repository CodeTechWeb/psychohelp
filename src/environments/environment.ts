// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  socketUrl: 'https://psychohelp.herokuapp.com',
  apiUrl: 'https://psychohelp-open.mybluemix.net/api/v1',
  peer: { host: 'localhost', port: 3001 },
  stripeKey: 'pk_test_51JfUU7KDg13I2yDrmdZQHAA0IxPNCrHnIMVkouUzcRCcDFuyrYZHCu2eGHEQPamcbaMLzetnG7f8NJGQnV3QM22t00MRo3jndz'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
