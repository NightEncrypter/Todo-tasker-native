import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: Object;
};
const FIcons = ({name, size = 25, color, style}: Props) => {
  return <Icon style={style} color={color} size={size} name={name}></Icon>;
};

export default FIcons;
