---
title: "Mobile Builds"
type: "flow"
status: "active"
source_paths:
  - "package.json"
  - "app.json"
  - "eas.json"
  - "README.md"
updated_at: "2026-08-18"
---

# Mobile Builds

The project uses Expo SDK 57 and exposes local scripts: `npm start`, `npm run android`, and `npm run ios`. `app.json` assigns Android package `net.teamnest.firstreact`, iOS bundle ID `net.teamnest.firstreact`, and an EAS project ID.

`eas.json` has one `preview` profile that sets Android `buildType` to `apk`, producing an installable Android test artifact. It does not yet define a production profile. Play Store delivery requires an AAB; App Store delivery requires an iOS archive (`.ipa`) and active Apple signing credentials.

See [[app-shell]] for the JavaScript UI bundled into each app.
