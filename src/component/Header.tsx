import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONT, FONT_SIZES, FONT_WEIGHTS, SPACING} from '../theme/theme';
import {getFontSize} from '../utils/getFontSize';

type headerPropsType = {
  icon: boolean;
  onPress: () => void;
  title: string;
};

const Header = ({icon, onPress, title}: headerPropsType) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: SPACING.md,
        alignItems: 'center',
        paddingHorizontal: SPACING.md,
      }}>
      {icon && (
        <TouchableOpacity onPress={onPress} style={{width: '5%'}}>
          <Image source={require('../assets/images/back_button.png')} />
        </TouchableOpacity>
      )}

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: getFontSize(FONT_SIZES.xl),
            color: COLORS.text,
            fontFamily : FONT.medium,
            marginLeft: SPACING.sm,
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: '5%'}} />
    </View>
  );
};

export default Header;
