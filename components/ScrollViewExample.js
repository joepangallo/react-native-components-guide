import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function VerticalScrollExample() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms of Service</Text>
      <Text style={styles.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 1</Text>
        <Text style={styles.body}>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 2</Text>
        <Text style={styles.body}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 3</Text>
        <Text style={styles.body}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </Text>
      </View>
    </ScrollView>
  );
}

export function HorizontalScrollExample() {
  const images = [
    'https://picsum.photos/200/150?random=1',
    'https://picsum.photos/200/150?random=2',
    'https://picsum.photos/200/150?random=3',
    'https://picsum.photos/200/150?random=4',
    'https://picsum.photos/200/150?random=5',
  ];

  return (
    <View>
      <Text style={styles.sectionTitle}>Horizontal Carousel</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.carouselImage}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default function ScrollViewExample() {
  return (
    <ScrollView style={styles.container}>
      <HorizontalScrollExample />
      <Text style={styles.title}>Vertical Scroll Content</Text>
      <Text style={styles.body}>
        ScrollView renders ALL children immediately, even those off-screen.
        For lists with many items (50+), use FlatList instead.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>When to Use ScrollView</Text>
        <Text style={styles.body}>
          - Content is limited and known (settings page, forms){'\n'}
          - Mixed content types (images, text, buttons together){'\n'}
          - Total items fewer than 20-30
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>When to Use FlatList</Text>
        <Text style={styles.body}>
          - Long list of similar items (100+ potential items){'\n'}
          - Items come from an array/data source{'\n'}
          - Need performance optimization (lazy loading){'\n'}
          - Need pull-to-refresh or infinite scroll
        </Text>
      </View>
    </ScrollView>
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
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carousel: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  carouselImage: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
});
