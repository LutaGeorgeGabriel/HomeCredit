import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {createBottomTabNavigator} from "react-navigation";
import {MapsScreen} from "./screens/maps/MapsScreen";
import {ExpensesScreen} from "./screens/expenses/ExpensesScreen";
import {OthersScreen} from "./screens/other/OthersScreen";
import {AccountsScreen} from "./screens/account/AccountsScreen";

export default createBottomTabNavigator(
    {
        Accounts: AccountsScreen,
        Branches: MapsScreen,
        Expenses: ExpensesScreen,
        Others: OthersScreen
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Accounts') {
                    iconName = "wallet";
                } else if (routeName === 'Branches') {
                    iconName = "compass";
                } else if (routeName === "Expenses") {
                    iconName = "pie-chart";
                } else if (routeName === "Others") {
                    iconName = "grid"
                }
                return <Entypo name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
        },
    }
);