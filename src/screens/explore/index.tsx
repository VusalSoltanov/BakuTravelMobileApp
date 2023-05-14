import {
  StyleSheet,
  Text,
  View,
  SectionList,
  PermissionsAndroid,
  Image,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {WeatherData} from '../../models/WeatherData';
import Geolocation from 'react-native-geolocation-service';
import SvgComponent from '../../assets/image/Pin';
import {Platform} from 'react-native';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const GOOGLE_API_KEY = 'AIzaSyDrMUvCIcxggZV906vAOaTSvmnucKT1Nm8';

const ExploreMain = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any>([]);
  const [location, setLocation] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [cityName, setCityName] = useState<string | null>(null);
  const [countryName, setCountryName] = useState<string | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      getWeatherData();
    }
  }, [location]);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => {
            console.log(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}, // Add options for better location accuracy
        );
      } else {
        // Location permission denied
        setLocation(null);
      }
    });
  };

  const requestLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === 'granted') {
      return true;
    } else {
      return false;
    }
  };

  const openLocationSettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    }
  };

  const getWeatherData = async () => {
    if (location) {
      const {latitude, longitude} = location.coords;
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`,
        );

        const addressComponents = response.data.results[0].address_components;
        let city = null;
        let country = null;
        for (const component of addressComponents) {
          for (const type of component.types) {
            if (type === 'administrative_area_level_2') {
              city = component.long_name;
            } else if (type === 'country') {
              country = component.long_name;
            }
          }
        }
        setCityName(city);
        setCountryName(country);
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const convertKelvinToCelsius = (kelvin: number) => {
    return kelvin - 273.15;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://644fe705ba9f39c6ab6f6bc2.mockapi.io/products',
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}: any) => (
    <View style={{padding: 10}}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1C1C1C',
      }}>
      {location ? (
        <>
          {countryName ? (
            <View style={styles.locationContainer}>
              <View style={{flexDirection: 'row', backgroundColor: '#262626',height:36,borderRadius:12}}>
                <View style={{marginTop:5}}>
                <SvgComponent />
                </View>
                <Text style={styles.locationText}>
                  {cityName},  {countryName}
                </Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#262626',height:36,borderRadius:12,paddingHorizontal:5}}  >
                {weatherData && weatherData.main && (
                  <View style={styles.weatherContainer}>
                    {weatherData.weather[0].icon && (
                      <Image
                        style={styles.weatherIcon}
                        source={{
                          uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
                        }}
                      />
                    )}
                    <Text style={styles.temperatureText}>
                      {convertKelvinToCelsius(weatherData.main.temp).toFixed()}
                      °C
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ) : (
            <Text>Loading location...</Text>
          )}
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 16,
              fontSize: 24,
              fontWeight: '500',
            }}>
            Geolocation is disabled
          </Text>
          <Text style={{textAlign: 'center', width: 275, fontSize: 16}}>
            To improve the application, enable geolocation in the settings.
          </Text>
          <TouchableOpacity
            onPress={openLocationSettings}
            style={{
              backgroundColor: '#018CF1',
              width: 300,
              marginTop: 36,
              paddingVertical: 12,
              borderRadius: 8,
            }}>
            <Text style={{alignSelf: 'center', fontSize: 16, color: '#fff'}}>
              Open Settings
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
    marginLeft: 10,
    alignSelf:"center",
    paddingRight:70
  },
  pinIcon: {
    width: 20,
    height: 20,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 16,
    marginRight: 5,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginTop:5
  },
});

export default ExploreMain;
