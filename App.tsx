/**
 * First React starter screen.
 *
 * A lightweight two-tab app shell provides Home and Setting screens using
 * Expo's supported safe-area context rather than deprecated core APIs.
 */
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Tab = 'home' | 'setting';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" />
        <View style={styles.content}>
          {activeTab === 'home' ? (
            <>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>READY</Text>
              </View>
              <Text style={styles.title}>My First React app</Text>
              <Text style={styles.description}>
                Start building from App.tsx. Changes you save will appear here right away.
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.eyebrow}>PREFERENCES</Text>
              <Text style={styles.title}>Setting</Text>
              <Text style={styles.description}>Your app settings will live here.</Text>
            </>
          )}
        </View>
        <View style={styles.tabBar}>
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === 'home' }}
            onPress={() => setActiveTab('home')}
            style={[styles.tab, activeTab === 'home' && styles.tabActive]}
          >
            <Text style={[styles.tabIcon, activeTab === 'home' && styles.tabTextActive]}>⌂</Text>
            <Text style={[styles.tabText, activeTab === 'home' && styles.tabTextActive]}>Home</Text>
          </Pressable>
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === 'setting' }}
            onPress={() => setActiveTab('setting')}
            style={[styles.tab, activeTab === 'setting' && styles.tabActive]}
          >
            <Text style={[styles.tabIcon, activeTab === 'setting' && styles.tabTextActive]}>⚙</Text>
            <Text style={[styles.tabText, activeTab === 'setting' && styles.tabTextActive]}>Setting</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101828',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 20,
  },
  eyebrow: {
    color: '#98A2B3',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#12B76A',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#062B1A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 38,
    fontWeight: '700',
    letterSpacing: -0.8,
    lineHeight: 46,
  },
  description: {
    color: '#D0D5DD',
    fontSize: 17,
    lineHeight: 26,
    maxWidth: 460,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#344054',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#101828',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    gap: 3,
    borderRadius: 12,
    paddingVertical: 8,
  },
  tabActive: {
    backgroundColor: '#163B2A',
  },
  tabIcon: {
    color: '#98A2B3',
    fontSize: 19,
    lineHeight: 21,
  },
  tabText: {
    color: '#98A2B3',
    fontSize: 12,
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#34D399',
  },
});
