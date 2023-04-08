/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import MenuProfileFloatingActionButtons from '../../components/MenuProfileFloatingActionButtons';
import {Input} from '@rneui/base';
import GoogleMaps from '../../components/GoogleMaps';
import Geolocation from '@react-native-community/geolocation';

type position = {
  coords: {
    accuracy: number;
    altitude: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  extras: {
    networkLocationType: string;
  };
  mocked: boolean;
  timestamp: number;
};

const DestinationSelectPage = () => {
  const [destination, setDestination] = useState<string>('');
  const [start, setStart] = useState<string>('');

  const handleTextEntry = () => {
    Geolocation.getCurrentPosition(
      position => {
        setStart(`${position.coords.latitude}, ${position.coords.longitude}`);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    // TODO: Go to route confirm page when start position is fetched and set
  };

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'flex-end',
      }}>
      <GoogleMaps />
      <MenuProfileFloatingActionButtons />
      <Input
        placeholder="Where are you going?"
        onChangeText={setDestination}
        onSubmitEditing={handleTextEntry}
        inputContainerStyle={{
          borderBottomWidth: 0,
        }}
        leftIcon={{name: 'search', type: 'feather', color: 'dodgerblue'}}
        inputStyle={{
          marginLeft: 10,
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderRadius: 15,
          marginBottom: 60,
          marginLeft: 20,
          width: '90%',
          height: 50,
          elevation: 5,
        }}
        leftIconContainerStyle={{
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default DestinationSelectPage;