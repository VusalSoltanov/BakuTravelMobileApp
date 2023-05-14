import { NavigationContainer } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { FirstLoginProvider } from './src/context/FirstLoginContext'
import OpenScreen from './src/screens/openScreen/OpenScreen'
import SplashScreen from './src/screens/openScreen/SplashScreen'

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Müddəti (ms cinsində) öz tələblərinizə uyğun şəkildə tənzimləyin
  
    return () => clearTimeout(timer);
  }, []);
  return (
    (
      showSplash ? <SplashScreen/> :
      
      <>
      <NavigationContainer>
        <FirstLoginProvider>
          <OpenScreen />
        </FirstLoginProvider> 
      </NavigationContainer>
    </>
  )
   
  )
}

export default App

