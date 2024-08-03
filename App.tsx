import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//for validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({

})
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
