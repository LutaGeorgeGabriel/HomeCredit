import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default class OtherAction extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <View style={[styles.itemContainer, {backgroundColor: this.props.item.code}]}>
                <Entypo name={this.props.item.icon} size={25} color={"white"}/>
                <Text style={styles.itemName}>{this.props.item.service}</Text>
            </View>

        )
    }
}