import { Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';

import Animated, {
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function ShootingStar() {
  const position = useSharedValue(-50);

  useEffect(() => {
    position.value = withRepeat(
      withDelay(
        60 * 1000, // 1 Minute Delay per shooting star
        withTiming(Dimensions.get('window').width + 50, {
          duration: 1000,
        }),
      ),
      -1,
      false,
    );
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        zIndex: -50,
        top: position,
        right: position,
      }}
    >
      <Image
        source={require('~/assets/images/shooting.png')}
        style={{ width: 50, height: 50 }}
      />
    </Animated.View>
  );
}
