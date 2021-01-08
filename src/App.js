import React, {useState, useEffect} from 'react'
import aqiService from './services/aqi'
import locatorService from './services/locator'

export default function App() {
  const [info, setInfo] = useState({})
  const [location, setLocation] = useState({})
  const key = 'location'

  function getOrCreateUser() {
    // Get location from localstorage, if it's not there, use geolocation.
    const storedLocation = window.localStorage.getItem(key)
    if (storedLocation) {
      console.log("Retrieving information from storage...")
      // stored as a string, we need object.
      setLocationAndGetInfo(JSON.parse(storedLocation))
    }
    else {
      // geolocate the user and get their location, then do the same thing.
      console.log("Retrieving information from API...")
      locatorService
        .getLocation()
        .then(newLocation => setLocationAndGetInfo(newLocation))
    }
  }
  
  function setLocationAndGetInfo(newLocation) {
    console.log(newLocation)
    setLocation(newLocation)
    window.localStorage.setItem(key, JSON.stringify(newLocation))
    aqiService
      .getAQI(newLocation)
      .then(data => setInfo(data))
      .catch(error => console.error("File not found:", error))
  }
  useEffect(getOrCreateUser, [])

  return(
    <>
      <h2>Data for {location.city}, {location.country}</h2>
      <p>{JSON.stringify(info)}</p>
    </>
  )
}