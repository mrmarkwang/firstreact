# Plan: Android APK build

## Goal

Enable this Expo project to create a signed, directly installable Android APK with one documented EAS Build command while preserving its existing Android identity.

## Current Context

- `app.json` defines Expo SDK 57 application metadata and Android package `net.teamnest.firstreact`.
- `package.json` provides `npm run typecheck`; the project includes the Android native directory and `expo-dev-client`.
- No `eas.json` is currently present.
- The repository README explains local Expo runs but not distributable Android artifacts.

## Decisions

- Add a `preview` EAS profile using `android.buildType: "apk"`, the explicit Expo-supported way to request an installable APK.
- Keep EAS’s default credential management rather than adding signing material to the repository.
- Document EAS cloud build; do not add local Gradle release-build instructions or production AAB setup because neither is needed for direct APK installation.

## Phased Tasks

### Phase 1 - Scope lock

- [x] Confirm `app.json` retains Android package `net.teamnest.firstreact` and no existing `eas.json` requires migration.
- [x] Record that Google Play distribution and AAB generation are out of scope.

### Phase 2 - Build configuration

- [x] Add `eas.json` with a `preview` profile whose Android `buildType` is `apk`.
- [x] Preserve the app metadata and generated Android project without Gradle changes.

### Phase 3 - Developer documentation

- [x] Update `README.md` with the prerequisites and exact `eas build --platform android --profile preview` command.
- [x] State that the completed EAS build provides an APK download link suitable for an Android device.

### Phase 4 - Validation

- [x] Run `npm run typecheck` and record its result: passed on 2026-08-18.
- [x] Run `npx eas-cli build:configure --help` or equivalent non-mutating EAS CLI validation where available: EAS CLI 22.0.0 is available.
- [x] Verify the final `eas.json` parses as JSON and contains the explicit preview APK output setting.

### Phase 5 - Status

- [x] Mark tasks complete only after configuration, documentation, and verification evidence exist.
- [x] Record whether an APK was actually submitted: no; `eas whoami` reported that this machine is not logged in.

## Validation

- `npm run typecheck` exits successfully.
- `node -e "JSON.parse(require('fs').readFileSync('eas.json', 'utf8'))"` exits successfully after configuration.
- The final README includes the preview APK command and describes where the artifact is obtained.

## Rollback / Risk

- Removing `eas.json` restores the prior configuration-only state.
- A cloud build requires an authenticated Expo account and may prompt to create or use signing credentials; those external actions are not performed silently.
