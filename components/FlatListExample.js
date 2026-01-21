import { useState } from 'react';
import { FlatList, View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
  { id: '4', title: 'Fourth Item' },
  { id: '5', title: 'Fifth Item' },
  { id: '6', title: 'Sixth Item' },
  { id: '7', title: 'Seventh Item' },
  { id: '8', title: 'Eighth Item' },
];

export function BasicList() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export function RefreshableList() {
  const [data, setData] = useState(DATA);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setData([
      { id: '0', title: 'New Item (Refreshed!)' },
      ...DATA,
    ]);
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

export function GridList() {
  const products = [
    { id: '1', name: 'Product 1', image: 'https://picsum.photos/120/120?random=1' },
    { id: '2', name: 'Product 2', image: 'https://picsum.photos/120/120?random=2' },
    { id: '3', name: 'Product 3', image: 'https://picsum.photos/120/120?random=3' },
    { id: '4', name: 'Product 4', image: 'https://picsum.photos/120/120?random=4' },
    { id: '5', name: 'Product 5', image: 'https://picsum.photos/120/120?random=5' },
    { id: '6', name: 'Product 6', image: 'https://picsum.photos/120/120?random=6' },
  ];

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <Image source={{ uri: item.image }} style={styles.gridImage} />
          <Text style={styles.gridText}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
}

export function InfiniteList() {
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: String(i + 1),
      title: `Item ${i + 1}`,
    }))
  );
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 5 }, (_, i) => ({
      id: String(data.length + i + 1),
      title: `Item ${data.length + i + 1}`,
    }));
    setData((prev) => [...prev, ...newItems]);
    setLoading(false);
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator style={styles.loader} /> : null}
    />
  );
}

export default function FlatListExample() {
  return <RefreshableList />;
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    maxWidth: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  gridText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  loader: {
    padding: 20,
  },
});
