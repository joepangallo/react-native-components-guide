import { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

export function BasicInput() {
  const [text, setText] = useState('');

  return (
    <View style={styles.section}>
      <Text style={styles.label}>Basic Input:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type here..."
        placeholderTextColor="#999"
      />
      <Text>You typed: {text}</Text>
    </View>
  );
}

export function DifferentInputTypes() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Email Input:</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="email@example.com"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Password Input:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter password"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="(555) 123-4567"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Multiline (textarea):</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        multiline={true}
        numberOfLines={4}
        placeholder="Enter your message..."
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Numeric Input:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor="#999"
      />
    </View>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login:', { email, password });
    alert(`Login attempt with: ${email}`);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Login Form Pattern</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        placeholderTextColor="#999"
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

export default function TextInputExamples() {
  return (
    <View style={styles.container}>
      <BasicInput />
      <DifferentInputTypes />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 15,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});
