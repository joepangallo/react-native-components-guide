import { SectionList, View, Text, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Cherry', 'Dragon Fruit'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Broccoli', 'Spinach', 'Kale'],
  },
  {
    title: 'Proteins',
    data: ['Chicken', 'Fish', 'Tofu', 'Eggs'],
  },
  {
    title: 'Grains',
    data: ['Rice', 'Quinoa', 'Oats', 'Bread'],
  },
];

export default function SectionListExample() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={true}
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>Food Categories</Text>
          <Text style={styles.listHeaderSubtext}>
            SectionList is like FlatList but for grouped data with section headers.
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  listHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  listHeaderSubtext: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 16,
  },
});
