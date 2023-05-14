import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios';
import Timee from '../../assets/image/Timee';

const DetailScreen = ({ route }:any) => {
  const [Places, setPlaces] = useState<any>();

//   const { id } = route.params;

  useEffect(() => {
    axios.get(`https://644fe705ba9f39c6ab6f6bc2.mockapi.io/products/2`)
      .then(response => {
        setPlaces(response.data)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Details</Text>
      <View style={styles.detailContainer}>
        <View>


        </View>
       
        <Text style={styles.Placetext}>Name: {Places?.name}</Text>
        <View style={{position:'absolute' }}><Timee/></View>
        <Text style={styles.Placetext}>monday   {Places?.open}-{Places?.close}  </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  Placetext: {
    fontSize: 18,
    marginBottom: 10,
  },
})

export default DetailScreen;