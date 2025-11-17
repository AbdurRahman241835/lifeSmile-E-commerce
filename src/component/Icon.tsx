import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({style, name, size, color, onPress} : any) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={name} size={size} color={color}/>
    </TouchableOpacity>
  )
}

export default Icon

const styles = StyleSheet.create({})