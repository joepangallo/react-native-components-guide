import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export function SafeAreaViewExample() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.content}>
        <Text style={styles.title}>SafeAreaView Example</Text>
        <Text style={styles.body}>
          This content automatically avoids the device's "unsafe" areas like
          notches, home indicators, and status bars.
        </Text>
      </View>
    </SafeAreaView>
  );
}

export function InsetHookExample() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Text style={styles.title}>useSafeAreaInsets Hook</Text>
      <Text style={styles.body}>
        This uses the hook for manual control over safe area padding.
      </Text>
      <View style={styles.insetInfo}>
        <Text style={styles.insetText}>Top: {insets.top}px</Text>
        <Text style={styles.insetText}>Bottom: {insets.bottom}px</Text>
        <Text style={styles.insetText}>Left: {insets.left}px</Text>
        <Text style={styles.insetText}>Right: {insets.right}px</Text>
      </View>
    </View>
  );
}

export default function SafeAreaExample() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safe Area Handling</Text>
      <Text style={styles.description}>
        SafeAreaView automatically adds padding to avoid the device's "unsafe"
        areas - notches, home indicators, and status bars.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Device Insets</Text>
        <View style={styles.insetGrid}>
          <View style={styles.insetItem}>
            <Text style={styles.insetLabel}>Top</Text>
            <Text style={styles.insetValue}>{insets.top}px</Text>
          </View>
          <View style={styles.insetItem}>
            <Text style={styles.insetLabel}>Bottom</Text>
            <Text style={styles.insetValue}>{insets.bottom}px</Text>
          </View>
          <View style={styles.insetItem}>
            <Text style={styles.insetLabel}>Left</Text>
            <Text style={styles.insetValue}>{insets.left}px</Text>
          </View>
          <View style={styles.insetItem}>
            <Text style={styles.insetLabel}>Right</Text>
            <Text style={styles.insetValue}>{insets.right}px</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Best Practice</Text>
        <Text style={styles.infoText}>
          Use react-native-safe-area-context instead of the deprecated
          SafeAreaView from react-native. Wrap your app root with SafeAreaProvider.
        </Text>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.warningTitle}>When to Use</Text>
        <Text style={styles.warningText}>
          • Root app component (wrap with SafeAreaProvider){'\n'}
          • Each screen in navigation stack{'\n'}
          • Full-screen modals{'\n'}
          • NOT needed inside tab bars or headers managed by navigation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  insetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  insetItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  insetLabel: {
    fontSize: 14,
    color: '#666',
  },
  insetValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  insetInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  insetText: {
    fontSize: 14,
    marginBottom: 5,
  },
  infoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d4edda',
    borderRadius: 8,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#155724',
  },
  infoText: {
    color: '#155724',
    lineHeight: 20,
  },
  warningBox: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#fff3cd',
    borderRadius: 8,
  },
  warningTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#856404',
  },
  warningText: {
    color: '#856404',
    lineHeight: 22,
  },
});
