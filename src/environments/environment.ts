// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDe1R4hbh3CwYhw3LXpjIb-tcrWuGNNkAA",
    authDomain: "heroes-4f2ee.firebaseapp.com",
    databaseURL: "https://heroes-4f2ee.firebaseio.com",
    projectId: "heroes-4f2ee",
    storageBucket: "heroes-4f2ee.appspot.com",
    messagingSenderId: "1038126386733"
  }
};
