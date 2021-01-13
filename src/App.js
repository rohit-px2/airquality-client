import React, {useState, useEffect} from 'react'
import aqiService from './services/aqi'
import locatorService from './services/locator'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'

/**
  The main app. Contains most of the state and events for the application.
*/
export default function App() {
  const [info, setInfo] = useState({})
  const [location, setLocation] = useState({})
  const [user, setUser] = useState(null)
  const userKey = 'loggedAqiUser'

  /**
    Removes traces of the user from the browser.
  */
  function clearUser() {
    setUser(null)
    window.localStorage.clear()
  }

  const locatorKey = 'location'

  /**
    Retrieves stored information about the user from localstorage (if user was stored).
  */
  function retrieveUser() {
    const loggedInUserStr = window.localStorage.getItem(userKey)
    if(loggedInUserStr) {
      const loggedInUserJSON = JSON.parse(loggedInUserStr)
      setUser(loggedInUserJSON)
      aqiService.setToken(loggedInUserJSON.token)
    }
  }
  useEffect(retrieveUser, [])

  /**
    Retrieves location from localstorage, and geolocates using IP if their location is not stored.
  */
  function retrieveLocation() {
    // Get location from localstorage, if it's not there, use geolocation.
    const storedLocation = window.localStorage.getItem(locatorKey)
    if (storedLocation) {
      // stored as a string, we need the object.
      setLocationAndGetInfo(JSON.parse(storedLocation))
    }
    else {
      // geolocate the user and get their location, then do the same thing.
      locatorService
        .getLocation()
        .then(newLocation => setLocationAndGetInfo(newLocation))
    }
  }
  
  /**
    Sets the location to newLocation and retrieves the info corresponding to newLocation before
    updating the state of App with the new information.
    @param newLocation
    The new location.
  */
  function setLocationAndGetInfo(newLocation) {
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

  /**
    Adds newLocation to the user's list of locations to be displayed on the dashboard.
    @param newLocation
    The new location to be added.
  */
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
        setUser(newUser)
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