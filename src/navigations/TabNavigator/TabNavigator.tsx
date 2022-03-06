import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Editer from "@screens/Editer";
import Farmer from "@screens/Farmer";
import Home from "@screens/Home";
import Store from "@screens/Store";
import Login from "@screens/Login";
import theme from "@styles/theme";
import {
  SCREEN_NAME_EDITER,
  SCREEN_NAME_FARMER,
  SCREEN_NAME_HOME,
  SCREEN_NAME_STORE,
  SCREEN_NAME_LOGIN,
} from "@constants/screens";
import {
  TABNAV_EDITER_ICON,
  TABNAV_FARMER_ICON,
  TABNAV_HOME_ICON,
  TABNAV_STORE_ICON,
  TABNAV_LOGIN_ICON,
} from "@constants/path/icon";
import { TabBarIconStyle } from "./style";

const Tab = createBottomTabNavigator();

/**
 * 탭 바 옵션을 지정하는 함수
 * @param imgSrc: Image 컴포넌트의 source property에 들어갈 require 함수
 * @param tabBarLabel: 탭 이름
 * @param title: 헤더 이름(홈 탭은 로고)
 * @constructor
 */
export const TabBarOptions = (imgSrc: any, tabBarLabel: string, title: any) => ({
  tabBarIcon: () => <Image source={imgSrc} style={TabBarIconStyle} />,
  tabBarLabel,
  title,
});

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarInactiveTintColor: theme.color.green_01,
      headerTitleAlign: "center",
    }}>
    <Tab.Screen
      name="Editer"
      component={Editer}
      options={TabBarOptions(TABNAV_EDITER_ICON, SCREEN_NAME_EDITER, SCREEN_NAME_EDITER)}
    />
    <Tab.Screen
      name="Farmer"
      component={Farmer}
      options={TabBarOptions(TABNAV_FARMER_ICON, SCREEN_NAME_FARMER, SCREEN_NAME_FARMER)}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={TabBarOptions(
        TABNAV_HOME_ICON,
        SCREEN_NAME_HOME,
        <Image
          source={require("assets/images/pickyFarm_logo.png")}
          style={{
            width: 30,
            height: 30,
          }}
        />,
      )}
    />
    <Tab.Screen
      name="Store"
      component={Store}
      options={TabBarOptions(TABNAV_STORE_ICON, SCREEN_NAME_STORE, SCREEN_NAME_STORE)}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={TabBarOptions(TABNAV_LOGIN_ICON, SCREEN_NAME_LOGIN, SCREEN_NAME_LOGIN)}
    />
  </Tab.Navigator>
);

export default TabNavigator;
