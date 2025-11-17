import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import HomeScreen from './src/screens/BottomTabs/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BORDER_RADIUS, COLORS, SPACING} from './src/theme/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/BottomTabs/AccountScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartListScreen from './src/screens/BottomTabs/CartListScreen';

type RootStackParamList = {
  EnterOtpScreen: {phone: string};
  SignInScreen: undefined;
  BottomStack: undefined;
  VerifyEmailScreen: {
    screenName: string;
  };
  InstallmentDetailsScreen: {
    installmentId: string;
    installmentNo: number;
    metalType: string;
  };
  PrivacyPolicyScreen: undefined;
  SchemeDetailsScreen: {
    data: {
      id: string;
      maturityDateStr: string;
      status: string;
      duration: string;
      monthlyPayments: [];
      metalType: string;
      headerName: string;
      amount: number;
      paymentMode: string;
      paymentValue: number;
    };
  };
};

type BottomTabParamList = {
  HomeScreen: undefined;
  CartListScreen: undefined;
  AccountScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();
const client = new QueryClient();

function App(): React.JSX.Element {

  return (
    <QueryClientProvider client={client}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <MainNavigator />
    </QueryClientProvider>
  );
}

const MainNavigator = () => {
  

  function AuthenticatedStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomStack" component={BottomStack} />
      </Stack.Navigator>
    );
  }

  function BottomStack() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.goldGradientPrimary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: 8,
            borderRadius: BORDER_RADIUS.lg,
            marginHorizontal: SPACING.xl,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: BORDER_RADIUS.sm,
            elevation: 5,
            height: 60,
          },
          tabBarItemStyle: {
            paddingTop: 5,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Entypo
                size={32}
                name="home"
                color={focused ? COLORS.goldGradientPrimary : 'gray'}
              />
            ),
            tabBarLabel: 'Home',
          }}
        />

        <Tab.Screen
          name="CartListScreen"
          component={CartListScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="cart-outline"
                size={29}
                color={focused ? COLORS.goldGradientPrimary : 'gray'}
              />
            ),
            tabBarLabel: 'cart',
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="settings"
                size={29}
                color={focused ? COLORS.goldGradientPrimary : 'gray'}
              />
            ),
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    );
  }



  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
};

export default App;
