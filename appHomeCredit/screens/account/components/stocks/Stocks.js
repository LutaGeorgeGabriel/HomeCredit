import React from "react";
import {View} from "react-native";
import {Grid, LineChart} from "react-native-svg-charts";

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
const contentInset = { top: 10, bottom: 10 };

export const Stocks = (props) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
        <LineChart
            style={{flex: 1, marginLeft: 5, width: 100, height: 100}}
            data={ data }
            svg={{stroke: 'rgb(134, 65, 244)'}}
            contentInset={ contentInset }>
            <Grid/>
        </LineChart>
    </View>
);