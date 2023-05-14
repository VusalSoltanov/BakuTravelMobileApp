import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import SvgStar from '../../assets/image/Star';
import { Place } from '../../models/Place';
import SvgSearch from '../../assets/image/Search';
import SvgLocation from '../../assets/image/Location';
import SvgTimee from '../../assets/image/Timee';
import SvgComponent from '../../assets/image/Pin';
const PlaceList = ({navigation}:any) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  useEffect(() => {
    axios.get('https://644fe705ba9f39c6ab6f6bc2.mockapi.io/products')
      .then(response => setPlaces(response.data))
      .catch(error => console.log(error));
  }, []);
  const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchText.toLowerCase()));
  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity style={styles.placeContainer} onPress={() => navigation.navigate('DetailScreen', { id: item.id })} >
      
      <View style={styles.main}>
      <Image source={{ uri: item.imageUrl }} style={styles.placeImage} resizeMode="cover" />
        <Text style={styles.placeName}>{item.name}</Text>
      <View style={styles.placeInfoContainer}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <SvgComponent />
          <Text style={styles.placeRating}>4km</Text>
          <SvgTimee />
          <Text style={styles.PlaceTime}>{item.open} - {item.close}</Text>
          <SvgStar />
          <Text style={styles.placeRating}>{item.rate}</Text>
        </View>

      </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by items"
          onChangeText={text => setSearchText(text)}
          placeholderTextColor={"white"}
          value={searchText}
        />
        <View style={{ position: 'absolute', bottom: 18, left: 15 }}>
          <SvgSearch />
        </View>
      </View>

      <FlatList
        data={filteredPlaces}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={filteredPlaces.length === 0 ? styles.emptyContainer : null}
        ListEmptyComponent={() => filteredPlaces.length === 0 ? <Text style={styles.emptyText}>No places found</Text> : null}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 10,
  },
main:{
borderWidth:1,
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  borderColor:"#262626",
borderBottomRightRadius:12,
borderBottomLeftRadius:12
},
  searchInput: { 
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 40,
    marginBottom: 10,
    color: 'white',
    backgroundColor: "#262626"
  },
  placeContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  placeImage: {
    width: '100%',
    height: 240,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  placeInfoContainer: {
    backgroundColor: '#1C1C1C',
    padding: 5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },

  PlaceTime: {
    color: 'white'
  },
  placeRating: {
    fontSize: 16,
    color: 'white'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
export default PlaceList;
