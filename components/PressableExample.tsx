import React from 'react';
import {
  View,
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ViewStyle,
  TextStyle,
} from 'react-native';

export function PressableButton(): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => console.log('Pressed!')}
      onLongPress={() => console.log('Long pressed!')}
    >
      {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.textPressed]}>
          {pressed ? 'Pressing...' : 'Press Me (Pressable)'}
        </Text>
      )}
    </Pressable>
  );
}

export function TouchableOpacityButton(): React.JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => console.log('TouchableOpacity pressed')}
      activeOpacity={0.7}
      style={styles.touchableButton}
    >
      <Text style={styles.touchableText}>Tap Me (TouchableOpacity)</Text>
    </TouchableOpacity>
  );
}

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
}

export function CustomButton({
  title,
  onPress,
  variant = 'primary',
}: CustomButtonProps): React.JSX.Element {
  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
  };

  const textVariantStyles: Record<ButtonVariant, TextStyle> = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
    outline: styles.outlineText,
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.customButton,
        variantStyles[variant],
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.customText, textVariantStyles[variant]]}>
        {title}
      </Text>
    </Pressable>
  );
}

export default function PressableExample(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Pressable (Recommended)</Text>
      <PressableButton />

      <Text style={styles.sectionTitle}>TouchableOpacity (Legacy)</Text>
      <TouchableOpacityButton />

      <Text style={styles.sectionTitle}>Custom Button Variants</Text>
      <CustomButton
        title="Primary Button"
        onPress={() => Alert.alert('Pressed', 'Primary clicked')}
        variant="primary"
      />
      <CustomButton
        title="Secondary Button"
        onPress={() => Alert.alert('Pressed', 'Secondary clicked')}
        variant="secondary"
      />
      <CustomButton
        title="Outline Button"
        onPress={() => Alert.alert('Pressed', 'Outline clicked')}
        variant="outline"
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Recommendation</Text>
        <Text style={styles.infoText}>
          Use Pressable for new projects. It's more flexible, gives you control
          over pressed state styling, and is the direction React Native is heading.
        </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPressed: {
    opacity: 0.8,
  },
  touchableButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  touchableText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#E5E5E5',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  pressed: {
    opacity: 0.8,
  },
  customText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#333',
  },
  outlineText: {
    color: '#007AFF',
  },
  infoBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#d4edda',
    borderRadius: 8,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#155724',
  },
  infoText: {
    color: '#155724',
    lineHeight: 20,
  },
});
