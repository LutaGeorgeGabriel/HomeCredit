import React, {Component} from "react";
import {Text, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";


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


export default class Account extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View style={style.rowData}>
                    <Entypo
                        style={style.rowMargin}
                        name={this.props.data.icon}
                        size={25}/>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 80}}> IBAN: {this.props.data.iban}</Text>
                </View>
                <View style={style.rowData}>
                    <View style={style.rowMargin}>
                        <Text style={style.text}>Currency</Text>
                        <FontAwesome name={this.props.data.currency} size={17}/>
                    </View>
                    <View style={style.rowMargin}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 200}}>Balance</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 200, color: "#E21932"}}>{this.props.data.balance}</Text>
                    </View>
                </View>
            </View>
        )
    }
}