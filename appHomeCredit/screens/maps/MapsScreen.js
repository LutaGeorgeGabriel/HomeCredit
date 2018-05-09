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
            }}>

            <MapView.Marker
                coordinate={{latitude: 44.4138053,
                    longitude: 26.1170274}}
                title={"Simplity BI Solutions EN"}
                description={"Corporate Office"}/>
            <MapView.Marker
                coordinate={{latitude: 44.4108346,
                    longitude: 26.1176862 }}
                title={"ATM"}
                description={"ATM close to our office"}/>

        </MapView>
    </View>
);

