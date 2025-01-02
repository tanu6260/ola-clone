import 'react-native-get-random-values';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS, SIZES } from '../../constans';
import styles from './styles';

const defaultLocations = [
    { description: 'MP Nagar, Bhopal', place_id: 'mp_nagar' },
    { description: 'New Market, Bhopal', place_id: 'new_market' },
    { description: 'Arera Colony, Bhopal', place_id: 'arera_colony' },
    { description: 'Bittan Market, Bhopal', place_id: 'bittan_market' },
    { description: 'Kolar Road, Bhopal', place_id: 'kolar_road' },
    { description: '10 Number Market, Bhopal', place_id: '10_number' },
    { description: 'Shahpura, Bhopal', place_id: 'shahpura' },
    { description: 'Bairagarh, Bhopal', place_id: 'bairagarh' },
    { description: 'Habibganj, Bhopal', place_id: 'habibganj' },
    { description: 'TT Nagar, Bhopal', place_id: 'tt_nagar' },
    { description: '11 Number Market, Bhopal', place_id: '11_number' },
    { description: '12 Number Market, Bhopal', place_id: '12_number' },
];

const DestinationScreen = ({ route }) => {
    const { currentLocation } = route.params || {
        currentLocation: {
            latitude: 23.2599,
            longitude: 77.4126,
            address: 'Current Location'
        }
    };
    const [destination, setDestination] = useState(null);
    const [showMap, setShowMap] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {!showMap ? (
                <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
                    <View style={styles.routePoints}>
                        <View style={styles.routeLine}>
                            <View style={styles.greenDot} />
                            <View style={styles.verticalLine} />
                            <View style={styles.redDot} />
                        </View>

                        <View>

                            <Text numberOfLines={1} style={styles.currentLocationText}>
                                {currentLocation?.address || 'Current Location'}
                            </Text>


                            <GooglePlacesAutocomplete
                                placeholder="Where to?"
                                onPress={(data, details = null) => {
                                    setDestination({
                                        latitude: details?.geometry?.location?.lat || 23.2599,
                                        longitude: details?.geometry?.location?.lng || 77.4126,
                                        address: data.description
                                    });
                                    setShowMap(true);
                                }}
                                query={{
                                    key: '',
                                    language: 'en',
                                    components: 'country:in',
                                    location: '23.2599,77.4126',
                                    radius: '50000',
                                    strictbounds: true,
                                }}
                                fetchDetails={true}
                                styles={locationInput}
                                enablePoweredByContainer={false}
                                textInputProps={{
                                    placeholderTextColor: '#666',
                                }}
                                predefinedPlaces={defaultLocations}
                                renderRow={(data) => (
                                    <View style={locationInput.customRow}>
                                        <Icon name="location-on" size={20} color={COLORS.black} style={locationInput.rowIcon} />
                                        <Text style={locationInput.description}>{data?.description}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
       
            ) : (
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            ...currentLocation,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: currentLocation.latitude,
                                longitude: currentLocation.longitude
                            }}
                            pinColor={COLORS.blue}
                            title="Pickup"
                        />
                        {destination && (
                            <Marker
                                coordinate={{
                                    latitude: destination.latitude,
                                    longitude: destination.longitude
                                }}
                                pinColor={COLORS.red}
                                title="Dropoff"
                            />
                        )}

                        {destination && (
                            <Polyline
                                coordinates={[
                                    { latitude: currentLocation.latitude, longitude: currentLocation.longitude },
                                    { latitude: destination.latitude, longitude: destination.longitude },
                                ]}

                                strokeColors={['#7F0000',]}
                                strokeWidth={6}
                            />
                        )}
                    </MapView>

                    <TouchableOpacity
                        style={styles.locateButton}
                        onPress={() => setShowMap(false)}
                    >
                        <Icon name="location-on" size={24} color="black" />
                        <Text style={styles.locateButtonText}>Back to Search</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};


const locationInput = {

    textInput: {
        color: COLORS.black,
        fontSize: SIZES.width * 0.035,
        backgroundColor: COLORS.gray10,
        borderRadius: 8,
        paddingHorizontal: 12,

        fontFamily: FONTS.medium,
        elevation: 3,
        paddingHorizontal: SIZES.width * 0.02,

        width: SIZES.width * 0.85,
    },
    listView: {
        backgroundColor: COLORS.white,

        marginTop: SIZES.height * 0.01,
        elevation: 5,

        width: SIZES.width * 0.85,

    },
    customRow: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    rowIcon: {
        marginRight: SIZES.width * 0.03,
        marginBottom: -3
    },
    description: {
        fontSize: SIZES.width * 0.035,
        color: COLORS.black,
        fontFamily: FONTS.medium,
    },


};



export default DestinationScreen;