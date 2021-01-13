import React, {useState, useEffect} from 'react'
import aqiService from './services/aqi'
import locatorService from './services/locator'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'


export default function App() {
  const [info, setInfo] = useState({})
  const [location, setLocation] = useState({})
  const [user, setUser] = useState(null)
  const userKey = 'loggedAqiUser'

  function clearUser() {
    setUser(null)
    window.localStorage.clear()
  }

  const locatorKey = 'location'

  function retrieveUser() {
    console.log("Getting user from storage...")
    const loggedInUserStr = window.localStorage.getItem(userKey)
    if(loggedInUserStr) {
      console.log(loggedInUserStr)
      const loggedInUserJSON = JSON.parse(loggedInUserStr)
      console.log(loggedInUserJSON.locations)
      setUser(loggedInUserJSON)
      aqiService.setToken(loggedInUserJSON.token)
    }
  }
  useEffect(retrieveUser, [])

  function retrieveLocation() {
    // Get location from localstorage, if it's not there, use geolocation.
    const storedLocation = window.localStorage.getItem(locatorKey)
    if (storedLocation) {
      console.log("Retrieving information from storage...")
      // stored as a string, we need the object.
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
    window.localStorage.setItem(locatorKey, JSON.stringify(newLocation))
    aqiService
      .getAQI(newLocation)
      .then(data => setInfo(data))
      .catch(error => console.error("File not found:", error))
  }
  useEffect(retrieveLocation, [])

  function setUserAndUpdate(user) {
    setUser(user)
    aqiService.setToken(user.token)
  }

  function addToDashboard(newLocation) {
    aqiService
      .create(newLocation)
      .then(response => {
        const newLocations = user.locations.concat(newLocation)
        const newUser = {
          ...user,
          locations: newLocations
        }
        window.localStorage.setItem(userKey, JSON.stringify(newUser))
        console.log(newUser)
        setUser(newUser)
        console.log(user)
      })
      .catch(error => console.log("Could not add to dashboard"))
  }

  return(
    <Router>
      <Header 
        user={user}
        clearUser={clearUser}
        setUser={setUserAndUpdate}
       />
      <Switch>
        <Route path="/dashboard">
          <Dashboard
            user={user}
            setLocation={setLocationAndGetInfo}
          />
        </Route>
        <Route path="/">
          <MainPage 
              info={info} 
              setLocation={setLocationAndGetInfo}
              user={user}
              addLocation={addToDashboard}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}