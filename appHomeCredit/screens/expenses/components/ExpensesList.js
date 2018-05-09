import React, {Component} from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";
import Account from "../../account/components/account/Account";
import data from "../../account/components/data/AccountData"
import { Text, View, FlatList } from 'react-native';

export default class ExpensesList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={data}
                    renderItem={({item}) =>
                        <Account data={item}/>
                    }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}