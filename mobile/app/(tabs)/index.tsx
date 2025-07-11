import { View, Text } from 'react-native'
import React from 'react'
import { useUserSync } from '@/hooks/useUserSync';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  useUserSync();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;