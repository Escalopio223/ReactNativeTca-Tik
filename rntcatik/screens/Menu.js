import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Home from "./Home";
import Search from "./Search";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "#201424";
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor="#000"
      activeColor="transparent"
      inactiveColor="transparent"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={focused ? "#fa1e76" : "#ECEFF4"}
              size={35}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={focused ? "#fa1e76" : "#ECEFF4"}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#201424",
    borderTopWidth: 1,
    borderTopColor: "#4C566A",
    paddingTop: 15,
  },
});

export default Menu;
