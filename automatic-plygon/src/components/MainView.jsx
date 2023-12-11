import React, { useState } from 'react';
import MapView, { Polygon } from 'react-native-maps';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const MainView = () => {
  const [coordinates, setCoordinates] = useState([
    { latitude: 4.9314792, longitude: -75.9550819 },
    { latitude: 4.9316361, longitude: -75.9560356 },
    { latitude: 4.9307389631983565, longitude: -75.95620036125185 },
    { latitude: 4.930332776052634, longitude: -75.95598042011262 },
    { latitude: 4.929723494868302, longitude: -75.95575511455536 },
    { latitude: 4.929520401015984, longitude: -75.95554590225221 },
    { latitude: 4.929434887796447, longitude: -75.95514357089998 },
    { latitude: 4.929894521222062, longitude: -75.95499336719514 },
    { latitude: 4.9314792, longitude: -75.9550819 }
  ]);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setCoordinates([...coordinates, coordinate]);
  };

  return (
    <View style={styles.container}>
      <Text>estamos aca</Text>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
      >
        <Polygon
          coordinates={coordinates}
          fillColor="rgba(0, 200, 0, 0.5)"
          strokeWidth={2}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
});


export default MainView 
