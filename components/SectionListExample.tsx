import React from 'react';
import { SectionList, View, Text, StyleSheet, SectionListRenderItem } from 'react-native';

interface Section {
  title: string;
  data: string[];
}

const DATA: Section[] = [
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

export default function SectionListExample(): React.JSX.Element {
  const renderItem: SectionListRenderItem<string, Section> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: Section }): React.JSX.Element => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
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
