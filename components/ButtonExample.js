import { View, Button, Text, Alert, StyleSheet } from 'react-native';

export default function ButtonExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Component</Text>
      <Text style={styles.description}>
        Button is a basic, platform-styled button. It renders a native button
        on each platform (iOS and Android have different looks).
      </Text>

      <Text style={styles.sectionTitle}>Basic Button</Text>
      <Button
        title="Press Me"
        onPress={() => Alert.alert('Button pressed!')}
      />

      <Text style={styles.sectionTitle}>Colored Button</Text>
      <Button
        title="Custom Color"
        color="#841584"
        onPress={() => console.log('Pressed')}
      />

      <Text style={styles.sectionTitle}>Disabled Button</Text>
      <Button
        title="Disabled"
        disabled={true}
        onPress={() => {}}
      />

      <View style={styles.warningBox}>
        <Text style={styles.warningTitle}>Button Limitations</Text>
        <Text style={styles.warningText}>
          • No custom styling (can't change font, padding, border radius){'\n'}
          • Text only (can't include icons or images){'\n'}
          • Platform-specific appearance{'\n'}
          • Limited props (only title, onPress, color, disabled)
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>When to Use</Text>
        <Text style={styles.infoText}>
          Use Button for quick prototyping or when you want native-looking buttons.
          Use Pressable for custom styling and production apps.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  warningBox: {
    marginTop: 30,
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
  infoBox: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#d1ecf1',
    borderRadius: 8,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0c5460',
  },
  infoText: {
    color: '#0c5460',
    lineHeight: 20,
  },
});
