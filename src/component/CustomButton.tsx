import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';

interface CustomButtonProps {
  style?: object;
  TextStyle?: object;
  onPress?: () => void;
  content?: string;
  loadingIndicator?: boolean;
  iconColor?: string
}

const CustomButton = ({style, TextStyle, onPress, content, loadingIndicator,iconColor } : CustomButtonProps) => {
  return ( 
    <TouchableOpacity disabled={loadingIndicator} style={style} onPress={onPress}>
      {loadingIndicator ?<ActivityIndicator size={'small'} color={iconColor} /> : <Text style={TextStyle}>{content}</Text>
      }
      
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
