import React from "react";
import AccountList from "./components/account/AccountList";
import {View, Image, StatusBar} from "react-native";

const style = {
    container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#A6DCF7'
    },
    logo : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const logo = require('../../resources/logo.png');

export const AccountsScreen = () => (
    <View style={style.container}>
        <StatusBar hidden={true} />
        <View style={style.logo}>
            <Image
                source={logo}/>
        </View>
        <AccountList/>
    </View>
);