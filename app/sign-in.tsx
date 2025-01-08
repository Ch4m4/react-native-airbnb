import React from 'react';

import { Redirect } from 'expo-router';
import { ScrollView, Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { useGlobalContext } from '@/lib/GlobalProvider';
import { login } from '@/lib/appwrite';

const SignIn = () => {
  const { loading, refetch, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };
  return (
    <SafeAreaView className="min-h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="h-4/6 w-full" resizeMode="contain" />

        <View className="p-10">
          <Text className="mb-2 text-center font-rubik text-base uppercase text-black-200">Welcome to Airbnb</Text>

          <Text className="text-center font-rubik-bold text-2xl">
            Let's Get You Closer to {'\n'}
            <Text className="color-primary-300">Your Ideal Home</Text>
          </Text>

          <TouchableOpacity
            className="mt-5 flex flex-row items-center justify-center rounded-full bg-white py-4 shadow-md shadow-zinc-300"
            onPress={handleLogin}
          >
            <Image source={icons.google} className="h-5 w-5" resizeMode="contain" />
            <Text className="ml-2 text-center font-rubik-medium text-black-300">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
