import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.orText}>Faça sua escolha</Text>
     
      <Link href={'/nerf'}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Nerf</Text>
      </TouchableOpacity>
      </Link>
      
      <Text style={styles.orText}>ou</Text>

      <Link href={'/nada'}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
      </Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    marginVertical: 10,
    fontSize: 18,
  },
});
