import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import { SuperGridSectionList } from 'react-native-super-grid';
import {sections, data} from './components/data/OthersData'
import OtherAction from "./components/OtherAction";


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
    container : {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#A6DCF7',
    },
    header: {
        flex: 0,
        height: 200,
        backgroundColor: '#A6DCF7',
        flexDirection: "row",
        justifyContent: "center"
    }
});


const logo = require('../../resources/slogan.png');
const mascot = require('../../resources/ren.png');
const code = require('../../resources/qr.png');


export const OthersScreen = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={mascot}/>
            <Image source={code}/>
        </View>
        <SuperGridSectionList
            itemDimension={130}
            sections={sections}
            style={styles.gridView}
            renderItem={({ item }) => (
                <OtherAction item={item}/>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={{ color: 'green' }}>{section.title}</Text>
            )}
        />
    </View>
);