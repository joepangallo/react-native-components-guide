import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

// Import component examples
import { CardExample } from './components/Card';
import FlexboxExample from './components/FlexboxExample';
import TextExamples from './components/TextExamples';
import TextInputExamples from './components/TextInputExamples';
import ImageExamples from './components/ImageExamples';
import ScrollViewExample from './components/ScrollViewExample';
import FlatListExample, { GridList, InfiniteList } from './components/FlatListExample';
import SectionListExample from './components/SectionListExample';
import PressableExample from './components/PressableExample';
import ButtonExample from './components/ButtonExample';
import ModalExample from './components/ModalExample';
import SafeAreaExample from './components/SafeAreaExample';
import LoadingExample from './components/LoadingExample';
import ListItemExample from './components/ListItemExample';

const Stack = createNativeStackNavigator();

const SCREENS = [
  {
    name: 'View & Card',
    component: CardScreen,
    description: 'Basic View container and Card component',
  },
  {
    name: 'Flexbox Layout',
    component: FlexboxExample,
    description: 'Flexbox layout examples',
  },
  {
    name: 'Text',
    component: TextExamples,
    description: 'Text styling and nested text',
  },
  {
    name: 'TextInput',
    component: TextInputScreen,
    description: 'Input fields and forms',
  },
  {
    name: 'Image',
    component: ImageScreen,
    description: 'Images and ImageBackground',
  },
  {
    name: 'ScrollView',
    component: ScrollViewExample,
    description: 'Scrollable content',
  },
  {
    name: 'FlatList',
    component: FlatListExample,
    description: 'Performant lists with pull-to-refresh',
  },
  {
    name: 'FlatList Grid',
    component: GridList,
    description: 'Grid layout with FlatList',
  },
  {
    name: 'Infinite List',
    component: InfiniteList,
    description: 'Load more on scroll',
  },
  {
    name: 'SectionList',
    component: SectionListExample,
    description: 'Grouped lists with headers',
  },
  {
    name: 'Pressable',
    component: PressableExample,
    description: 'Touch interactions',
  },
  {
    name: 'Button',
    component: ButtonExample,
    description: 'Basic platform buttons',
  },
  {
    name: 'Modal',
    component: ModalExample,
    description: 'Dialogs and overlays',
  },
  {
    name: 'SafeAreaView',
    component: SafeAreaExample,
    description: 'Safe area handling',
  },
  {
    name: 'ActivityIndicator',
    component: LoadingExample,
    description: 'Loading spinners',
  },
  {
    name: 'List Item Pattern',
    component: ListItemExample,
    description: 'Common list item UI',
  },
];

function CardScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>View & Card Component</Text>
      <Text style={styles.screenDescription}>
        View is the most fundamental component in React Native. It's a container
        that supports layout with Flexbox, styling, touch handling, and accessibility.
      </Text>
      <CardExample />
      <CardExample />
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Key Points</Text>
        <Text style={styles.infoText}>
          • View is equivalent to div in web development{'\n'}
          • Cannot contain raw text - wrap in Text component{'\n'}
          • Uses Flexbox for layout by default{'\n'}
          • Use for grouping, layout control, and styling
        </Text>
      </View>
    </ScrollView>
  );
}

function TextInputScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <TextInputExamples />
    </ScrollView>
  );
}

function ImageScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <ImageExamples />
    </ScrollView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native Components</Text>
        <Text style={styles.subtitle}>
          A comprehensive guide to React Native components with Expo
        </Text>
      </View>

      <View style={styles.componentList}>
        {SCREENS.map((screen) => (
          <Pressable
            key={screen.name}
            style={({ pressed }) => [
              styles.componentItem,
              pressed && styles.componentItemPressed,
            ]}
            onPress={() => navigation.navigate(screen.name)}
          >
            <View style={styles.componentContent}>
              <Text style={styles.componentName}>{screen.name}</Text>
              <Text style={styles.componentDescription}>
                {screen.description}
              </Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Based on "Understanding React Native Components" guide
        </Text>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'RN Components Guide' }}
          />
          {SCREENS.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 10,
  },
  screenDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 20,
    paddingBottom: 20,
    lineHeight: 20,
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  componentList: {
    padding: 10,
  },
  componentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  componentItemPressed: {
    backgroundColor: '#f0f0f0',
  },
  componentContent: {
    flex: 1,
  },
  componentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  componentDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  chevron: {
    fontSize: 20,
    color: '#ccc',
  },
  infoBox: {
    margin: 20,
    padding: 15,
    backgroundColor: '#d1ecf1',
    borderRadius: 8,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0c5460',
  },
  infoText: {
    color: '#0c5460',
    lineHeight: 22,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});
