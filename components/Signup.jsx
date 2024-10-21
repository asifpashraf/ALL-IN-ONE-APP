import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Signup() {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between SignIn and Register
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Registration
  const handleRegister = () => {
    if (username && email && password) {
      Alert.alert('Success', 'Registration successful!');
      setIsSignIn(true); // Switch to Sign-In screen after registration
    } else {
      Alert.alert('Error', 'Please fill all the fields!');
    }
  };

  // Handle Sign-In
  const handleSignIn = () => {
    if (email && password) {
      Alert.alert('Success', 'Sign-In successful!');
    } else {
      Alert.alert('Error', 'Please fill all the fields!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {isSignIn ? 'Sign In' : 'Register'}
      </Text>

      {!isSignIn && (
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      )}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button
        title={isSignIn ? 'Sign In' : 'Register'}
        onPress={isSignIn ? handleSignIn : handleRegister}
      />

      <Text style={styles.toggleText} onPress={() => setIsSignIn(!isSignIn)}>
        {isSignIn ? "Don't have an account? Register" : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#0066cc',
  },
});
