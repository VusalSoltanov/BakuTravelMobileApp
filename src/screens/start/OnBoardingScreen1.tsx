import { FlatList, StyleSheet, Text,Button, View,TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import onBoardingData from '../../datas/onboardingData'
import OnBoardingItem from '../../components/onboarding/OnboardingItem'
import Paginate from '../../components/onboarding/Paginate'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OnboardingScreen1 = ({ navigation }:any) => {
  const nextHandler = () => {
    if (onBoardingData.length - 1 !== currentIndex) {
      slidersRef.current.scrollToIndex({ index: currentIndex + 1 })
      setCurrentIndex(currentIndex + 1)
    }
    else {
      navigation.navigate("CategoryList")
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const slidersRef = useRef<any>(null)
  console.log(slidersRef.current);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={onBoardingData}
        ref={slidersRef}
        renderItem={OnBoardingItem}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled

      />
    {
      currentIndex <= 2 ?(
        <View style={{flexDirection:"row", justifyContent:"space-between",margin:24,alignItems:"center"}}>
        <Paginate datas={onBoardingData} currentIndex={currentIndex} />
        <TouchableOpacity style={styles.btn} onPress={nextHandler}><Text style={styles.next}>Next</Text></TouchableOpacity>
      </View>
      ) : (
        <View style={{marginBottom:30,marginHorizontal:24}}>
        
        <TouchableOpacity style={styles.start} onPress={nextHandler}>
        <Text style={{textAlign:'center',color:"#fff",fontSize:16,fontWeight:"600"}}>Get Started</Text>
        </TouchableOpacity>
        </View>
      )
    }
      
    </View>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  btn:{
    backgroundColor:"#018CF1",
    paddingHorizontal:55,
    paddingVertical:15,
    borderRadius:10
  },
  next:{
    color:"#F6F6F6",
    fontSize:16,
    fontWeight:"500"
  },
  start:{
    backgroundColor:"#018CF1",
    paddingHorizontal:55,
    paddingVertical:15,
    borderRadius:10
  },
  started:{
    color:"#F6F6F6",
    fontSize:16,
    position:"relative",
    zIndex:3,
    textAlign:"center",
    fontWeight:"500"
  }
})