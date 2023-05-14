import { View, Text, FlatList, Pressable, ActivityIndicatorBase,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Category } from '../../models/Category';
import { ActivityIndicator, Button } from 'react-native-paper';
import { saveUserCategories } from '../../utilities/storage/usersSavedCategoriesHelper';
import { FirstLoginContext } from '../../context/FirstLoginContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BaseNetwork } from '../../network/api';

const CategoryListScreen = ({ navigation }: any) => {

    const [categories, setcategories] = useState<Category[]>([]);
    const [categoriesData,setCategoriesData] = useState<Category[]>([])
    const [loading,setLoading] = useState(true)
    const { firstLogin, setFirstLogin } = useContext(FirstLoginContext);
     
    useEffect(() => {
      let baseNetwork = new BaseNetwork();
      baseNetwork.getAll('categories')
      .then(data=>{
        setcategories(data)
        setCategoriesData(data)
        setLoading(false)
        console.log(data);
        
      }).catch(err=>{
        console.log("Error",err);
        
      })
    
    }, [])
    

    //category varsa çıkar yoksa ekle
    const categoryOperation = (item: Category) => {
        let categoryControl = categories.find(q => q.id == item.id);

        //eğer category varsa state üzerindne çıkar
        if (categoryControl) {
            let filteredCategories = categories.filter(q => q.id != item.id);
            setcategories(filteredCategories);
        }
        else {
            setcategories([...categories, item])
        }
    }


    const renderItem = ({ item }: any) => {
        let style = {};
        
        let categoryControl = categories.find(q => q.id == item.id);

        if (!categoryControl)
            style = {alignItems:"center",justifyContent:"center",borderRadius:10 ,borderStyle: 'solid',borderColor: '#fff', borderWidth: 1,height:120,width:140 }

        return(
            <>
            <Pressable onPress={() => categoryOperation(item)}>
              <View style={{ height:120,width:140,borderStyle: 'solid',borderColor: '#bcbcbc',borderRadius:10, borderWidth: 0.5,margin:10,alignItems:"center",position:"relative",justifyContent:"center",left:15}}>
              <View style={style}>
                     <Text style={styles.image}>{item.img}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>

            </Pressable>
          </>
        )

    }
    const next = () => {
        if (categories.length > 0) {
            saveUserCategories(categories)
                .then(res => {
                    setFirstLogin(false)
                })
        }
        else {
            setFirstLogin(false)
        }

    }
    return (
                <View style={styles.container}>
                    <ActivityIndicator animating={loading} color='red' />
                    {
                        loading?(
                            <></>
                        ):(
                            <View>
                                <View>
                                    <Text style={styles.title}>
                                    Choose your interest
                                    </Text>
                                    <Text style={styles.desc}>Select at least 2 options that we can suggest you on the home page.</Text>
                                </View>
                                <FlatList
                                    data={categoriesData}
                                    renderItem={renderItem}
                                    numColumns={2}
                                />
                                 <View style={styles.btnbox}>
                              
                        </View>
                        <TouchableOpacity style={styles.nextbtn} onPress={next}>
                              <Text style={styles.nexttxt}>Next</Text>
                               </TouchableOpacity>
                            </View>
                        )
                       
                    }
                
                </View>
    )
}

export default CategoryListScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1c1c1c',
        paddingHorizontal:24
    },
    title:{
        color:"#fff",
        fontWeight:"600",
        fontSize:20,
        marginBottom:10
    },
    desc:{
        fontSize:14,
        fontWeight:"400",
        color:"#B9B9B9",
        lineHeight:16,
        marginBottom:10
    },
    nexttxt:{
        color:"#fff",
        textAlign:"center",
        fontSize:15
    },
    image:{
        fontSize:30,
        marginBottom:8,
        textAlign:"center",
    },
    nextbtn:{
        paddingVertical:15,
        paddingHorizontal:15,
        marginVertical:10,
        borderRadius:10,
        backgroundColor:"#018CF1",
    },
    name:{
        color:"#fff",
        fontWeight:"500",
        fontSize:15,
        lineHeight:17,
        textAlign:"center"
    },
    btnbox:{
        flex:1
    },
    box:{
      gap:20
    },
})