import React from 'react'
import Chart from './components/Chart'
import {Text, View, FlatList} from 'react-native';
import Expense from './components/Expense'
import Entypo from "react-native-vector-icons/Entypo";

import {actions, colors, percentages, expenses} from "./components/data/ExpensesData";

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A6DCF7'
    },
    text: {
        fontSize: 18,
        fontWeight: "400"
    },
    rowData: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
};

const renderItem = ({item, index}) => {
    return <Expense item={item} index={index}/>
};

export const ExpensesScreen = () => (
    <View style={style.container}>
        <View style={style.rowData}>
            <Entypo name="gauge" size={50} color="#E21932" />
            <Text styl={style.text}>Dashboard</Text>
        </View>
        <Chart/>
        <FlatList
            data={expenses}
            renderItem={renderItem}/>
    </View>
);