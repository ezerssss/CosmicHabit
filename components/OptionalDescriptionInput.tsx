import { Textarea } from '~/components/ui/textarea';
import React, { useState } from 'react';
import { View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function OptionalDescriptionInput({ value, setValue }: Props) {
  return (
    <View className="gap-2">
      <ThemedText>Describe what you did!</ThemedText>
      <Textarea
        placeholder="(Optional)"
        value={value}
        onChangeText={setValue}
        aria-labelledby="Optional description"
        style={{ fontFamily: 'Pixelify', fontSize: 14 }}
      />
    </View>
  );
}
