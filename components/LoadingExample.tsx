import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';

export function BasicSpinners(): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Basic Spinners</Text>
      <View style={styles.spinnerRow}>
        <View style={styles.spinnerItem}>
          <ActivityIndicator />
          <Text style={styles.spinnerLabel}>Default</Text>
        </View>
        <View style={styles.spinnerItem}>
          <ActivityIndicator size="large" />
          <Text style={styles.spinnerLabel}>Large</Text>
        </View>
        <View style={styles.spinnerItem}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.spinnerLabel}>Colored</Text>
        </View>
      </View>
    </View>
  );
}

interface LoadedData {
  message: string;
}

export function LoadingScreen(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<LoadedData | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setData({ message: 'Data loaded successfully!' });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.centered}>
      <Text style={styles.successText}>{data?.message}</Text>
    </View>
  );
}

export default function LoadingExample(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>ActivityIndicator</Text>
      <Text style={styles.description}>
        Displays a platform-native loading spinner to indicate that content
        is loading or an operation is in progress.
      </Text>

      <BasicSpinners />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loading State Pattern</Text>
        <View style={styles.loadingDemo}>
          <LoadingScreen />
        </View>
        <Text style={styles.note}>
          The content above demonstrates a common loading pattern.
          It shows a spinner for 2 seconds, then displays the loaded data.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>StatusBar</Text>
        <Text style={styles.description}>
          Controls the device's status bar appearance. You can change its style
          (light/dark) and visibility.
        </Text>
        <View style={styles.codeBox}>
          <Text style={styles.code}>
            {'<StatusBar barStyle="dark-content" />'}{'\n'}
            {'<StatusBar barStyle="light-content" />'}{'\n'}
            {'<StatusBar hidden={true} />'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  spinnerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spinnerItem: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    minWidth: 80,
  },
  spinnerLabel: {
    marginTop: 10,
    fontSize: 12,
    color: '#666',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  successText: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: '600',
  },
  loadingDemo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    minHeight: 150,
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  codeBox: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
  },
});
