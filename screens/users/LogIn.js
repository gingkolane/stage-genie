import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import UserMain from './UserMain';

export default function LogIn() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
      // this needs to be replaced by a call to the backend to check if the user exists
  // const onSubmit = data => {
  //   // Simulate a login request
  //   setTimeout(() => {
  //     if (data.email === 'test@test.com' && data.password === 'password') {
  //       Alert.alert('Success', 'Logged in successfully');
        navigation.navigate('UserMain'); // Navigate to home screen
  //     } else {
  //       Alert.alert('Error', 'Invalid email or password');
  //     }
  //   }, 1000);
  // };
    // Reset form fields
    reset();
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            mode="outlined"
            style={{ marginBottom: 10 }}
          />
        )}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address'
          }
        }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            secureTextEntry={true}
            mode="outlined"
            style={{ marginBottom: 10 }}
          />
        )}
        name="password"
        rules={{ required: 'Password is required' }}
        defaultValue=""
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Text 
        variant="labelMedium" 
        style={styles.forgotPassword} 
        onPress={onForgotPassword}
      >
        Forgot Password
      </Text>

      <Button
        icon="camera" 
        mode="contained" 
        onPress={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  error: {
    color: 'red',
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 15,
    color: 'blue',
  }
});