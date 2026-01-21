import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export default function TextExamples(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Simple text */}
      <Text style={styles.label}>Simple text:</Text>
      <Text>Hello, World!</Text>

      {/* Styled text */}
      <Text style={styles.label}>Styled text:</Text>
      <Text style={styles.title}>Large Bold Title</Text>

      {/* Multiple lines */}
      <Text style={styles.label}>Paragraph:</Text>
      <Text style={styles.paragraph}>
        This is a longer paragraph of text that will wrap
        automatically when it reaches the edge of its container.
      </Text>

      {/* Nested text for inline styling */}
      <Text style={styles.label}>Nested text (inline styling):</Text>
      <Text style={styles.paragraph}>
        This is regular text with{' '}
        <Text style={styles.bold}>bold text</Text> and{' '}
        <Text style={styles.italic}>italic text</Text> and{' '}
        <Text style={styles.link} onPress={() => Alert.alert('Clicked!')}>
          a clickable link
        </Text>.
      </Text>

      {/* Text truncation */}
      <Text style={styles.label}>Truncated text (2 lines):</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">
        This is a very long text that will be truncated after
        two lines. Any content beyond that will show an ellipsis
        at the end to indicate there is more content that cannot
        be displayed in the available space.
      </Text>

      {/* Badge example */}
      <Text style={styles.label}>Badge with View wrapper:</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>NEW</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 20,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  badge: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
