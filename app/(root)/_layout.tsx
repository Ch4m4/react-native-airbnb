import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGlobalContext } from '@/lib/GlobalProvider';

const AppLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="flex h-full items-center justify-center bg-white">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
};

export default AppLayout;
