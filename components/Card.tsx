import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Card({ children, style }: CardProps): React.JSX.Element {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

export function CardExample(): React.JSX.Element {
  return (
    <Card>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.body}>This is inside a View container.</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});
