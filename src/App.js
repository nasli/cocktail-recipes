import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Stack, Router, Scene, Tabs } from 'react-native-router-flux'
import { Home, CocktailDetail, CocktailAdd } from './sections/'
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
            <Tabs
              key='tabbar'
              activeBackgroundColor='#DDD'
              inactiveBackgroundColor='#FFF'
              initial
              {...navBarStyles}
              hideNavBar
            >
              <Stack
                key='tab_1'
                title='Cocktails'
                tabBarLabel='Cocktails'
              >
                <Scene
                  key='home'
                  component={Home}
                  title='Cocktails' />
              </Stack>

              <Stack
                key='tab_2'
                title='Add'
                tabBarLabel='Add'
              >
                <Scene
                  key='cocktailAdd'
                  component={CocktailAdd}
                  title='New Cocktail'
                />
              </Stack>
            </Tabs>
            <Scene
              key={'Home'}
              hideNavBar
              component={Home}
              {...navBarStyles}
            />

            <Scene
              key={'CocktailDetail'}
              component={CocktailDetail}
              {...navBarStyles}
            />

            <Scene
              key={'CocktailAdd'}
              component={CocktailAdd}
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
