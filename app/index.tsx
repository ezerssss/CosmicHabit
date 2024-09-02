import { View } from 'react-native';
import React from 'react';
import Planet from '~/components/Planet';
import ShootingStar from '~/components/ShootingStar';
import Star from '~/components/Star';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <ShootingStar />
      <Planet />
      <Star starType={1} size={33} x={104} y={100} />
      <Star starType={2} size={23} x={304} y={510} />
      <Star starType={3} size={13} x={201} y={752} />
    </View>
  );
}
