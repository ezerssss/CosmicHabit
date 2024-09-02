import { TouchableOpacity, View } from 'react-native';
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
import React, { useState } from 'react';
import TitleInput from './TitleInput';
import OptionalDescriptionInput from './OptionalDescriptionInput';

export default function Planet() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

        <TitleInput value={title} setValue={setTitle} />
        <OptionalDescriptionInput
          value={description}
          setValue={setDescription}
        />

        <DialogFooter>
          <DialogClose asChild>
            <TouchableOpacity className="border border-gray-400 bg-black w-[50px] rounded-lg p-2">
              <ThemedText className="text-white">Save</ThemedText>
            </TouchableOpacity>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
