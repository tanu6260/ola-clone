import {
    SafeAreaView,
    ScrollView, View,

} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import axios from "axios";

import SearchBox from "../../componets/searchBox";
import { COLORS, } from "../../constans";
import Geolocation from "@react-native-community/geolocation";
import styles from "./styles";

const Home = ({ navigation }) => {
    const [userLocation, setUserLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [address, setAddress] = useState("");

    const getAddress = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );

            if (response.data) {
                const address = response.data.display_name;
                setAddress(address);
            }
        } catch (error) {
            console.error("Error  address:", error);
        }
    };

    useEffect(() => {

        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'whenInUse',
            locationProvider: 'auto'
        });

        Geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                setUserLocation({
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                });


                await getAddress(latitude, longitude);
            },
            (error) => {
                console.error("Location error:", error);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000
            }
        );


        const watchId = Geolocation.watchPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                });
                await getAddress(latitude, longitude);
            },
            (error) => {
                console.error(" error:", error);
            },
            {
                enableHighAccuracy: true,
                distanceFilter: 50,
                interval: 5000,
                fastestInterval: 2000
            }
        );


        return () => {
            Geolocation.clearWatch(watchId);
        };
    }, []);



    const onPresssearch = () => {
        navigation.navigate("DestinationScreen", {
            currentLocation: {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                address: address
            }
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.innerContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.mapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={userLocation}
                    >
                        <Marker
                            draggable
                            pinColor={COLORS.red}
                            coordinate={{
                                latitude: userLocation.latitude,
                                longitude: userLocation.longitude,
                            }}
                            onDragEnd={(e) => {
                                const { latitude, longitude } = e.nativeEvent.coordinate;
                                getAddress(latitude, longitude);
                            }}
                        />
                    </MapView>
                </View>

                <SearchBox
                    placeholder="Current Location"
                    menuIcon={true}
                    value={address}
                    disabled={true}
                />

                <View style={[styles.searchContainer, { marginBottom: 20 }]}>
                    <View style={styles.searchInnerContainer}>
                        <SearchBox
                            searchContainer={{
                                top: 10,
                            }}
                            placeholder="Where are you going ?"
                            editable={false}
                            onPresssearch={onPresssearch}
                            tap={true}
                            disabled={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};





export default Home;
