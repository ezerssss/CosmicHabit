import React, { useState } from 'react';
import ThemedText from './ThemedText';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '~/components/ui/collapsible';
import { Input } from '~/components/ui/input';
import { TouchableOpacity, View } from 'react-native';
import { cn } from '~/lib/utils';
import { Separator } from './ui/separator';

export default function HeadingInput() {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleSuggestionsClick(suggestion: string) {
    setValue(suggestion);
    setIsOpen(false);
  }

  function onChangeText(text: string) {
    // Set to open if user is typing
    setIsOpen(!!text);
    setValue(text);
  }

  return (
    <Collapsible defaultOpen={false} open={isOpen}>
      <CollapsibleTrigger>
        <Input
          autoFocus
          placeholder="What did you do today?"
          value={value}
          onChangeText={onChangeText}
          onPress={() => setIsOpen(!isOpen)}
          aria-labelledby="Hobby/Habit Title"
          aria-errormessage="inputError"
          style={{ fontFamily: 'Pixelify' }}
          className={cn(
            isOpen ? 'rounded-b-none border-b-2 border-b-400' : 'rounded-b-lg',
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <View className="border border-y-0 border-gray-200 rounded-b-lg">
          <TouchableOpacity
            onPress={() => handleSuggestionsClick('👩‍💻 Code')}
            className="p-2 border-b-[1px] border-gray-200 rounded-b-lg"
          >
            <ThemedText>👩‍💻 Code</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSuggestionsClick('🏋️‍♀️ Exercise')}
            className="p-2 border-b-[1px] border-gray-200 rounded-b-lg"
          >
            <ThemedText>🏋️‍♀️ Exercise</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSuggestionsClick('🙏 Pray')}
            className="p-2 border-b-[1px] border-gray-200 rounded-b-lg"
          >
            <ThemedText>🙏 Pray</ThemedText>
          </TouchableOpacity>
        </View>
      </CollapsibleContent>
    </Collapsible>
  );
}
