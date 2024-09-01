import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity>
        <Image
          source={require('@/assets/images/moon.gif')}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/stars.gif')}
        style={{
          width: 36,
          height: 33,
          position: 'absolute',
          top: 100,
          left: 104,
        }}
      />
      <Image
        source={require('@/assets/images/stars.gif')}
        style={{
          width: 26,
          height: 23,
          position: 'absolute',
          top: 510,
          left: 304,
        }}
      />
      <Image
        source={require('@/assets/images/stars.gif')}
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
