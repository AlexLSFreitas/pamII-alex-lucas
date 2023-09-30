import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.orText}>Agora você tem Nerf, parabéns</Text>
      <Image  source={require("../assets/nerf_mto_pika.png")} />

      <Link href={'/'}>
      <Text style={styles.a}>voltar</Text>
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
