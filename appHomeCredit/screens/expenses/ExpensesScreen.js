import React from 'react'
import Chart from './components/Chart'
import {Text, View, FlatList} from 'react-native';
import Expense from './components/Expense'
import {actions, colors, percentages, expenses} from "./components/data/ExpensesData";

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0, left: 0,
        right: 0, bottom: 0
    },
    text: {
        fontSize: 18,
        fontWeight: "400"
    }
};

const renderItem = ({item, index}) => {
    return <Expense item={item} index={index}/>
};

export const ExpensesScreen = () => (
    <View style={style.container}>
        <Chart/>
        <FlatList
            data={expenses}
            renderItem={renderItem}/>
    </View>
);