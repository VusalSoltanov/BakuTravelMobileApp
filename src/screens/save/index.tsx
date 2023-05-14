import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { SaveContext } from '../../context/SaveContext'
import { Button } from 'react-native-paper';

const SaveMain = () => {

  let { saves, setSaves } = useContext(SaveContext);


  const removeFav = (id: number) => {

    let filteredSaves= saves.filter(q => q.id != id);
    setSaves([...filteredSaves])
  }
  const renderItem = ({ item }: any) => {
    return <>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Button onPress={() => removeFav(item.id)}>Remove</Button>
    </>
  }

  return (<>
  <Text style={{fontSize:30}}>Length: {saves.length}</Text>
    <Button onPress={() => setSaves([])}>Empty</Button>
    <FlatList
      data={saves}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />

  </>
  )
}

export default SaveMain