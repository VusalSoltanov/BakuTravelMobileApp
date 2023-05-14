import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import onboardingData from '../../datas/onboardingData'
import Paginate from '../../components/onboarding/Paginate'
import OnboardingItem from '../../components/onboarding/OnboardingItem'

import { Dimensions } from 'react-native'




const SCREEN_WIDTH = Dimensions.get('window').width

const OnboardingScreen2 = ({navigation,item}: any) => {
  return (
    <View style={styles.container}>
   <View style={styles.item}>
            <Image source={require("../../assets/onboarding/discover.png")} style={{ width: SCREEN_WIDTH - 32, alignSelf: "center", height: 343 }}  />
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 32 }}>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "500", textAlign: "center", }}>Discover Local Culture</Text>
                <Text style={{ color: "white",fontSize:14,lineHeight:22,width:324, textAlign: "center",marginTop:15 }}> Our app provides information on local events, festivals, and cultural experiences that you won't want to miss</Text>
            </View>
        </View >
      <View style={{marginBottom:30,marginHorizontal:24}}>
      <Button style={styles.btn}><Text style={styles.next} onPress={()=>(navigation.navigate("CategoryList"))}>Get Started</Text></Button>
      </View>
  </View>
  )
}
export default OnboardingScreen2

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    marginTop: 41,
    flex:1
},
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  },
  btn:{
    backgroundColor:"#018CF1",
    paddingHorizontal:45,
    paddingVertical:5,
    borderRadius:10,

  },
  next:{
    color:"#F6F6F6",
    fontSize:16,
    fontWeight:"500",
  }
 
})