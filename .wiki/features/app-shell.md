---
title: "App Shell"
type: "feature"
status: "active"
source_paths:
  - "App.tsx"
updated_at: "2026-08-18"
---

# App Shell

`App.tsx` is the complete current UI. It holds an in-memory `activeTab` state value and conditionally renders either the Home content or the placeholder Settings content. Two accessible `Pressable` elements form the bottom tab bar.

The root uses `SafeAreaProvider` and `SafeAreaView` from `react-native-safe-area-context`; the screen uses a dark theme defined in the same file. There is no navigation library, backend, authentication, persisted data, or API integration yet.

See [[mobile-builds]] for how this JavaScript bundle is run in native iOS and Android containers.
