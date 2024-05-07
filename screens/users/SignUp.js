import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';

export default function SignUp() {

  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Here you can call the API to register the user
    reset();
    navigation.navigate('AddPerson');
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
            placeholder="Enter your email"
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
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label="Mobile Number"
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          mode="outlined"
          style={{ marginBottom: 10 }}
          keyboardType="phone-pad"
          placeholder="Enter your mobile number"
        />
      )}
      name="mobile"
      rules={{
        required: 'Mobile number is required',
        pattern: {
          value: /^[0-9]{10}$/,
          message: 'Invalid mobile number, must be 10 digits'
        }
      }}
    />
    {errors.mobile && <Text style={styles.error}>{errors.mobile.message}</Text>}


      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            mode="outlined"
            style={{ marginBottom: 10 }}
            secureTextEntry
            placeholder="Enter your password"
          />
        )}
        name="password"
        rules={{ required: 'Password is required' }}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Sign Up
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
});