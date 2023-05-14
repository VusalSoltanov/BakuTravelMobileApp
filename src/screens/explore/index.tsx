import { StyleSheet, Text, View,SectionList } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ExploreMain = () => {
  const [products,setProducts] = useState<any[]>([])
  const [categories,setCategories] = useState<any>([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {
      const response = await axios.get("https://644fe705ba9f39c6ab6f6bc2.mockapi.io/products")
      setProducts(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  const renderItem = ({item}:any)=>(
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  )

  return (
  //   <SectionList
  //   sections={products}
  //   renderItem={renderItem}
  //   renderSectionHeader={({ section: { category } }) => (
  //     <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
  //       <Text>{category}</Text>
  //     </View>
  //   )}
  //   keyExtractor={(item, index) => index.toString()}
  // />
  <View><Text>Text</Text></View>
  )
}

export default ExploreMain

const styles = StyleSheet.create({})