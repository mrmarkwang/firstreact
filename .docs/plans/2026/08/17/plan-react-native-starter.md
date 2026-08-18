# React Native starter app plan

## Goal

Create a minimal cross-platform React Native starter app that installs, launches, and presents Home and Setting screens via a bottom tab bar, with clear local setup instructions.

## Current Context

The workspace does not yet contain application source files, a package manifest, lockfile, or repository metadata. The project must therefore be scaffolded from scratch. Expo is the chosen managed React Native workflow because it provides a supported iOS and Android development path without requiring native project setup for the initial app.

## Decisions

- Use Expo with TypeScript for the starter project; it is the smallest supported cross-platform setup for this empty workspace.
- Use two local tab states and local styles for Home and Setting; a routing library is unnecessary for this two-screen starter surface.
- Include only the configuration generated or required by the Expo starter plus concise README instructions.
- Do not add a routing dependency, backend integrations, secrets, environment files, feature flags, or custom native modules.
- E2E coverage is not needed at this stage: the scope is a single static starter screen, and launch/build verification provides proportionate evidence.

## Phased Tasks

### Phase 1 - Scaffold the project

- [x] Create the Expo React Native project manifest, TypeScript configuration, Expo application configuration, and source entry point in the workspace root.
- [x] Add the required dependency lockfile so installs use a reproducible dependency graph.
- [x] Confirm the starter configuration targets both iOS and Android without credentials or custom native setup (`EXPO_NO_TELEMETRY=1 npx expo config --type public` reported both platforms).

### Phase 2 - Implement the initial screen

- [x] Implement Home and Setting content in the app entry point, with Home visibly confirming the React Native project is running.
- [x] Add responsive local styles that keep the screen readable on common mobile viewports.
- [x] Add an accessible bottom bar that switches between Home and Setting without introducing a routing dependency, API calls, or environment variables.

### Phase 3 - Document and validate

- [x] Add README instructions covering dependency installation and how to start the Expo development server for iOS and Android.
- [x] Run the project's typecheck or Expo validation command and record its result (`npm run typecheck` passed).
- [x] Inspect the resulting project files to confirm the requirement's runnable-project and starter-screen acceptance points are represented.

## Validation

Run `npm install` followed by `npx expo start` and verify that Expo recognizes the project and provides its development targets. Run `npx tsc --noEmit` (or the generated equivalent) and expect a successful typecheck. Confirm the initial screen displays its app title and launch confirmation in a simulator, emulator, or Expo Go.

## Rollback / Risk

The only material risk is a mismatch between installed Node tooling and the generated Expo SDK. The chosen managed workflow minimizes native-toolchain risk. If scaffolding is unsuitable, the added starter files can be removed as a single self-contained project; no data migrations or external services are involved.
