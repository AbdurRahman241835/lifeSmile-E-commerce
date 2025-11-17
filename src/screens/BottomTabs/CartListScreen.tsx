import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getFontSize} from '../../utils/getFontSize';
import {
  BORDER_RADIUS,
  COLORS,
  FONT,
  FONT_SIZES,
  SPACING,
} from '../../theme/theme';
import {CartListScreen_CONSTANT} from '../../constants/constant';
import {SafeAreaView} from 'react-native-safe-area-context';

const CartListScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SPACING.md,
      }}>
      <>
        <View style={{marginTop: SPACING.md}}>
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
              marginTop: SPACING.xl,
            }}>
            {CartListScreen_CONSTANT.title1}
          </Text>
        </View>
      </>
    </SafeAreaView>
  );
};

export default CartListScreen;

const styles = StyleSheet.create({
  schemeListContainer: {
    borderRadius: BORDER_RADIUS.lg,
    paddingVertical: SPACING.lg,
    marginTop: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: BORDER_RADIUS.round,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
  },
  errorText: {
    color: COLORS.white,
    padding: SPACING.md,
    fontSize: getFontSize(FONT_SIZES.md),
    fontFamily: FONT.regular,
  },
});
