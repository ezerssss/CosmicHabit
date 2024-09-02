import { Image } from 'expo-image';
import React from 'react';
import { TouchableOpacity } from 'react-native';
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
import ThemedText from './ThemedText';

interface PropsInterface {
  starType: number;
  //   title: string;
  //   description: string;
  size: number;
  x: number;
  y: number;
}

const star1 = require('~/assets/images/stars1.gif');
const star2 = require('~/assets/images/stars2.gif');
const star3 = require('~/assets/images/stars3.gif');
const star4 = require('~/assets/images/stars4.gif');
const star5 = require('~/assets/images/stars5.gif');

export default function Star(props: PropsInterface) {
  const { starType, size, x, y } = props;

  let starGIF = star1;
  switch (starType) {
    case 1:
      starGIF = star1;
      break;
    case 2:
      starGIF = star2;
      break;
    case 3:
      starGIF = star3;
      break;
    case 4:
      starGIF = star4;
      break;
    case 5:
      starGIF = star5;
      break;
    default:
      starGIF = star1;
  }

  return (
    <Dialog style={{ position: 'absolute', top: y, left: x }}>
      <DialogTrigger asChild>
        <TouchableOpacity>
          <Image
            source={starGIF}
            style={{
              width: size + 3,
              height: size,
            }}
          />
        </TouchableOpacity>
      </DialogTrigger>
      <DialogContent className="w-[500px] max-w-[90%] z-50">
        <DialogHeader>
          <DialogTitle>
            <ThemedText>👩‍💻 Code</ThemedText>
          </DialogTitle>
          <DialogDescription>
            <ThemedText>
              Practice competitive programming for 30 mins
            </ThemedText>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <ThemedText>Ok</ThemedText>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
