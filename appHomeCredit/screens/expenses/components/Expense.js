import React, {Component} from "react";
import {Text, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {actions, colors, percentages, expenses} from "./data/ExpensesData";


const style = {
    rowData: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    rowMargin : {
        marginLeft: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
};

export default class Expense extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={style.rowData}>
                    {console.log(colors[this.props.index])}
                    <Entypo name={this.props.item.icon} size={25} color={colors[this.props.index]}/>
                    <Text style={{marginLeft: 20}}>{this.props.item.name}</Text>
                    <Text style={{marginLeft: 20}}>{this.props.item.percentage}</Text>
                </View>
            </View>
        )
    }
}

// {
//     icon: "",
//         name: "",
//     percentage: ""
// },