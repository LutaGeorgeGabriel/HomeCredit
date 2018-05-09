import React from "react";
import {StyleSheet, View} from "react-native";
import MapView from "react-native-maps";

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export const MapsScreen = () => (
    <View style={style.container}>
        <MapView
            style={style.map}
            initialRegion={{
                latitude: 44.4137914,
                longitude: 26.07030,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} />
    </View>
);

