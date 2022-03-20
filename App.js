import React, {useEffect, useState} from 'react'
import { Alert } from 'react-native'
import Loading from "./Loading";
import * as Location from 'expo-location'
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = '97fcfe0121177d940848f785eff59e62'

export default function App() {

  const [state, setState] = useState(true)
  const [temp, setTemp] = useState()

  const getWeather = async (lat, lon) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    setTemp(Math.round(data.main.temp))
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const { coords: {longitude, latitude} } = await Location.getCurrentPositionAsync()
      getWeather(latitude,longitude)
      setState(false)
    } catch {
      Alert.alert('Не могу определить местоположение!','Очень грустно :(')
    }
  }

  useEffect(() => {
    getLocation()
  },[])

  return (
    <>
      {state ? (<Loading />) : (<Weather temp={temp}/>)}

    </>
  );
}