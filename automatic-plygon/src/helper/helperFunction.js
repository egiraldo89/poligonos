import { showMessage } from "react-native-flash-message"
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location'

export const _getCurrentLocation = async () => {
    try {
        const location = await Location.getCurrentPositionAsync({});
        console.log('location', location);

        const cords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            heading: location?.coords?.heading,
        };
    return cords
    } catch (error) {
        console.log('error', error);
    }
}

export const getCurrentLocation = () => {
    console.warn('getCurrentLocation');
    new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            position => {
                console.warn('position', position);
                const cords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    heading: position?.coords?.heading,
                };

                resolve(cords);
            },
            error => {
                console.log('error......................', error.message)
                reject(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        )
    })
}

export const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
        try {
            const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
            if (permissionStatus === 'granted') {
                return resolve("granted");
            }
            reject('Permission not granted');
        } catch (error) {
            return reject(error);
        }
    }
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve("granted");
        }
        return reject('Location Permission denied');
    }).catch((error) => {
        console.log('Ask Location permission error: ', error);
        return reject(error);
    });
});

export const _locationPermission = async () => {
    const { status } = await Location.requestPermissionsAsync()
    return status;
}

const showError = (message) => {
    showMessage({
        message,
        type: 'danger',
        icon: 'danger'
    })
}

const showSuccess = (message) => {
    showMessage({
        message,
        type: 'success',
        icon: 'success'
    })
}

export {
    showError,
    showSuccess
}