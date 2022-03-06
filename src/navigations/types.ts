/**
 * Navigator Type Definition
 */

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  StackNavigator: undefined;
  TabNavigator: undefined;
};

export type TabNavigatorParamList = {
  Editer: undefined;
  Farmer: undefined;
  Home: undefined;
  Store: undefined;
  Login: undefined;
};

export type TabScreenPropsType = BottomTabNavigationProp<RootStackParamList, "TabNavigator">;
