import React, { Component } from 'react'
import { SafeAreaView, FlatList, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

import styles from './styles'
import * as colors from '../../commons/colors'
import { CocktailCell, Button } from '../../widgets'

class Favorites extends Component {
  _keyExtractor = (item, index) => `${item.strDrink}`

  _onCocktailTapped = cocktail => {
    // this.props.updateCocktailSelected(cocktail)
    // Actions.CocktailDetail()
  }

  _renderItem = ({ item, index }) => (
    <CocktailCell cocktail={item} 
      onPress={cocktail => this._onCocktailTapped(cocktail)} />
  )

  _onSubmit = () => {
    Actions.jump('tab_3')
  }
  _renderNoResultsText = () => {
    if (this.props.favoriteTotal != 0) {
      return null;
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.noResults}>
            {"No favorites available yet. \n\n Add new ones!"}
        </Text>
        <Button
        label={"Add"}
        onPress={this._onSubmit}
        buttonStyle={{ margin: 20 }}
        isFetching={this.props.isFetching}
        />
      </SafeAreaView>
    )
  }

  render () {
    console.log('PROPS_', this.props)

    const { favoriteList } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        style={ styles.list }
        data={ favoriteList }
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={2}
        ListEmptyComponent={_ => this._renderNoResultsText()}
        />
      </SafeAreaView>

    )
  }
}

export default Favorites
