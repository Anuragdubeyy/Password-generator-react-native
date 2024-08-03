import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
//for validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});
export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [namubers, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = (characters: string, passwordLength: number) => {};

  return (
    <View>
      <Text style={styles.headingText}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
  },
});
