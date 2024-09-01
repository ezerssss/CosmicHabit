import { TouchableOpacity, View, Pressable, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import ThemedText from '~/components/ThemedText';

import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function HomeScreen() {
  const position = useSharedValue(-50);

  useEffect(() => {
    position.value = withRepeat(
      withTiming(Dimensions.get('window').width + 50, {
        duration: 1000,
      }),
      -1,
      false,
    );
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Dialog>
        <DialogTrigger asChild>
          <TouchableOpacity>
            <Image
              source={require('~/assets/images/moon.gif')}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </DialogTrigger>
        <DialogContent className="w-[500px] max-w-[90%]">
          <DialogHeader>
            <DialogTitle>
              <ThemedText>Record ✨</ThemedText>
            </DialogTitle>
            <DialogDescription>
              <ThemedText>
                Log your hobbies and give birth to a new star!
              </ThemedText>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Pressable>
                <ThemedText>OK</ThemedText>
              </Pressable>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Animated.View
        style={{
          position: 'absolute',
          top: position,
          right: position,
        }}
      >
        <Image
          source={require('~/assets/images/shooting.png')}
          style={{ width: 50, height: 50 }}
        />
      </Animated.View>
      <Image
        source={require('~/assets/images/stars1.gif')}
        style={{
          width: 36,
          height: 33,
          position: 'absolute',
          top: 100,
          left: 104,
        }}
      />
      <Image
        source={require('~/assets/images/stars2.gif')}
        style={{
          width: 26,
          height: 23,
          position: 'absolute',
          top: 510,
          left: 304,
        }}
      />
      <Image
        source={require('~/assets/images/stars3.gif')}
        style={{
          width: 16,
          height: 13,
          position: 'absolute',
          top: 752,
          left: 201,
        }}
      />
    </View>
  );
}
