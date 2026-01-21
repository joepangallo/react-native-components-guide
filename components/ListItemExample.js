import { View, Pressable, Image, Text, FlatList, StyleSheet } from 'react-native';

function ListItem({ item, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        pressed && styles.pressed,
      ]}
      onPress={() => onPress(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>
      <Text style={styles.chevron}>{'>'}</Text>
    </Pressable>
  );
}

const USERS = [
  {
    id: '1',
    name: 'John Doe',
    description: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    description: 'Product Designer',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    description: 'Project Manager',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: '4',
    name: 'Alice Williams',
    description: 'UX Researcher',
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    description: 'DevOps Engineer',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
];

export default function ListItemExample() {
  const handlePress = (item) => {
    alert(`Tapped: ${item.name}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>List Item Pattern</Text>
        <Text style={styles.headerSubtitle}>
          A common pattern for list items with avatar, text, and press handler.
        </Text>
      </View>
      <FlatList
        data={USERS}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={handlePress} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
  },
  pressed: {
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: '#ccc',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 74,
  },
});
