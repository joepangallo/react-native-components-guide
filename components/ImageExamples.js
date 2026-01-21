import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

export default function ImageExamples() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Network Image (cover)</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.sectionTitle}>Network Image (contain)</Text>
      <Image
        source={{ uri: 'https://picsum.photos/300/150' }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.sectionTitle}>ImageBackground with Overlay</Text>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/400/200' }}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.overlayText}>Welcome!</Text>
      </ImageBackground>

      <Text style={styles.note}>
        Note: Network images MUST have explicit width and height.
      </Text>
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
  image: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  background: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  overlayText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  note: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    fontSize: 14,
    color: '#856404',
  },
});
