import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';

import { PortalHost } from '@rn-primitives/portal';
import { Audio } from 'expo-av';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Pixelify: require('../assets/fonts/PixelifySans-Regular.ttf'),
  });

  async function playBGMusic() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: require('~/assets/audio/outer_space.mp3') },
      { shouldPlay: true },
    );
  }

  useEffect(() => {
    if (loaded) {
      playBGMusic();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <PortalHost />
    </>
  );
}
