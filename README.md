# First React

A minimal Expo-powered React Native starter app for iOS and Android.

## Requirements

- Node.js 22.13 or newer
- For device testing: Expo Go on an Android or iOS device, or an installed simulator/emulator

## Run locally

```sh
npm install
npm start
```

With the Expo developer tools open, press `i` for iOS or `a` for Android. You can also run a target directly:

```sh
npm run ios
npm run android
```

The starting screen lives in `App.tsx`.

## Check types

```sh
npm run typecheck
```

## Build an Android APK

Use Expo Application Services (EAS) to create a signed APK that can be installed directly on an Android device:

```sh
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

When the cloud build completes, EAS prints a download link. Open that link on the Android device and install the downloaded `.apk` file. This `preview` profile creates an APK for direct installation; it is not the Android App Bundle (AAB) used for Google Play releases.
