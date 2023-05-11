import {
  View,
  Text,
  Pressable,
  PressableProps,
  StyleProp,
  PressableStateCallbackType,
  GestureResponderEvent,
} from 'react-native';
import React, {ReactNode} from 'react';
import FIcons from './FIcons';
import {ViewStyle} from 'react-native';
interface Props {
  children?: ReactNode;
  name: string;
  style?: Object;
  iconColor?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
}
const RoundedIButton = ({
  onPress,
  style,
  name,
  iconColor = 'white',
  size = 14,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 26,
        height: 26,
        ...style,
      }}>
      <FIcons name={name} size={size} color={iconColor} />
    </Pressable>
  );
};

export default RoundedIButton;
