import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Stack, Router, Scene } from 'react-native-router-flux'
import { Home, CocktailDetail } from './sections/'
import { configureAxios } from './webservices'
import * as colors from './commons/colors'
import { store } from './config/redux'
import { Provider } from 'react-redux'

export default class App extends Component {
  constructor (props) {
    super(props)
    configureAxios()
    StatusBar.setBarStyle('light-content', true)
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={'root'}>
            <Scene
              key={'Home'}
              hideNavBar
              component={Home}
              {...navBarStyles} initial
            />

            <Scene
              key={'CocktailDetail'}
              component={CocktailDetail}
              {...navBarStyles}
            />

          </Stack>
        </Router>
      </Provider>
    )
  }
}

const navBarStyles = {
  navigationBarStyle: { backgroundColor: colors.navBar },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
}
