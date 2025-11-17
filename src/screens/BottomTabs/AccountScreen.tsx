import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  BORDER_RADIUS,
  COLORS,
  FONT,
  FONT_SIZES,
  SPACING,
} from '../../theme/theme';
import {StackNavigationProp} from '@react-navigation/stack';

import {ACCOUNTSCREEN_CONSTANT,} from '../../constants/constant';

import {getFontSize} from '../../utils/getFontSize';
import {SafeAreaView} from 'react-native-safe-area-context';

type AccountScreenProps = {
  navigation: StackNavigationProp<any>;
};

const AccountScreen = ({navigation}: AccountScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={{marginTop: SPACING.md, paddingHorizontal: SPACING.md}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text
          style={{
            fontSize: getFontSize(FONT_SIZES.xxl),
            color: COLORS.text,
            fontFamily: FONT.bold,
            marginLeft: SPACING.sm,
            marginTop: SPACING.md,
          }}>
          {ACCOUNTSCREEN_CONSTANT.title1}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  buttonsContainer: {
    backgroundColor: COLORS.card,
    width: '60%',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginHorizontal: SPACING.md,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: BORDER_RADIUS.md,
    elevation: 5,
  },
  modalContainer: {
    height: '40%',
    width: '90%',
    position: 'absolute',
    bottom: 0,
    margin: SPACING.md,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.sm,
    backgroundColor: '#F2F2F7',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 50,
  },
});
