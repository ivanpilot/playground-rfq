// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAdq_cc5dlgr2VGiBLQ3ght5wHvHigNCZE",
    authDomain: "playground-rfq.firebaseapp.com",
    databaseURL: "https://playground-rfq.firebaseio.com",
    projectId: "playground-rfq",
    storageBucket: "playground-rfq.appspot.com",
    messagingSenderId: "514298147662"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
