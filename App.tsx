import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Button
          title="Click me"
          onPress={() =>
            Alert.alert('Congratulations for 69 years of good luck  !')
          }
        />
      </View>
    </SafeAreaView>
  );
}
export default App;
