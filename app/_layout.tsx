import { useThemeStore } from '@/libs/zustand/store/theme-store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { UnistylesRegistry } from 'react-native-unistyles';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const { theme } = useThemeStore();
  UnistylesRegistry.addConfig({
    initialTheme: theme
  });

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

  );
}
