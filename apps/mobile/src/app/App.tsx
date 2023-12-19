import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GoogleLogo from './components/google-logo/GoogleLogo';

export const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Google sign-in button pressed')}
      >
        <GoogleLogo />
        <Text style={styles.text}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5DC',
    borderRadius: 30,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
export default App;
