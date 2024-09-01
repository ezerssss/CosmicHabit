import { Text, TextProps } from 'react-native';
import React from 'react';

export default function ThemedText({ style, ...rest }: Readonly<TextProps>) {
  return <Text style={[style, { fontFamily: 'Pixelify' }]} {...rest} />;
}
