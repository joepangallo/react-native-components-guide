import { View, Text, StyleSheet } from 'react-native';

export default function FlexboxExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Horizontal Row (space-between)</Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>

      <Text style={styles.sectionTitle}>Centered Content</Text>
      <View style={styles.centered}>
        <Text>I am centered!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 50,
    height: 50,
  },
  centered: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});
