import { TouchableOpacity, Pressable } from 'react-native';
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
import React from 'react';
import HeadingInput from './HeadingInput';

export default function Planet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TouchableOpacity>
          <Image
            source={require('~/assets/images/moon.gif')}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </DialogTrigger>
      <DialogContent className="w-[500px] max-w-[90%] z-50">
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
        <HeadingInput />
        <DialogFooter>
          <DialogClose asChild>
            <Pressable>
              <ThemedText>OK</ThemedText>
            </Pressable>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
