import React from "react";
import Chart from "./components/Chart";
import {FlatList, Text, View} from "react-native";
import Expense from "./components/Expense";
import Entypo from "react-native-vector-icons/Entypo";
import {expenses} from "./components/data/ExpensesData";

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A6DCF7'
    },
    text: {
        color: "#E21932",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 30
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

const keyExtractor = (item, index) => item.id;

export const ExpensesScreen = () => (
    <View style={style.container}>
        <View style={style.rowData}>
            <Entypo name="gauge" size={50} color="#E21932" />
            <Text style={style.text}>Dashboard</Text>
        </View>
        <Chart/>
        <FlatList
            style={{marginTop: 30}}
            data={expenses}
            renderItem={renderItem}
            keyExtractor={keyExtractor}/>
    </View>
);