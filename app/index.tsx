import { TouchableOpacity, View, Pressable, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';

import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Planet from '~/components/Planet';

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
      <Planet />
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
