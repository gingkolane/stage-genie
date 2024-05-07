import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Here you can call the API to send a password reset email
    reset();
  };

  return (
    <View style={styles.container}>
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

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Send Password Reset Email
      </Button>
    </View>
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
});