import React, {Component} from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";
import Account from "./Account";
import data from "../data/AccountData"
import {Stocks} from '../stocks/Stocks'

export default class AccountList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={data}
                    renderItem={({item}) => {
                        if(item.icon === 'stocks') {
                            return <Stocks />
                        }
                        else {
                            return <Account data={item}/>
                        }
                    }}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

// <Text style={styles.item}>{item}</Text>