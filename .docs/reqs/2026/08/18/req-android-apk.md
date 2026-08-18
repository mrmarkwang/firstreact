# Android APK build

## Problem

The Expo app cannot yet produce a directly installable Android APK for device testing or internal sharing.

## Requirement

Configure the project with an EAS build profile that creates a signed Android APK, and document the command required to create that artifact.

## Acceptance Criteria

- [x] The repository has an `eas.json` build profile named `preview` that explicitly produces an Android APK.
- [ ] The documented build command creates the `preview` Android artifact through EAS Build. Blocked: this machine is not logged into Expo.
- [x] Existing TypeScript validation remains successful.

## Constraints

- Preserve the existing Android application ID: `net.teamnest.firstreact`.
- Use EAS Build configuration; do not modify generated Android Gradle files merely to choose the output format.
- Cloud build credentials and Expo account access remain user-account controlled.

## Non-Goals

- Publishing the app to Google Play.
- Changing the app UI, dependencies, package ID, or version.
- Building an Android App Bundle (AAB) for store release.
