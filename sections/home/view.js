import React, { Component } from 'react'
import { SafeAreaView, FlatList, Text} from 'react-native'

import styles from './styles'
import { CocktailCell } from '../../widgets'


class Home extends Component {
  constructor (props) {
    super(props)
    props.getCocktailsList()
  }

  _onCocktailTapped = cocktail => {
    const title = cocktail.title
    this.props.updateCocktailSelected(cocktail)
  }

   _keyExtractor = (item, index) => `${item.idDrink}`

   _renderItem = ({ item, index }) => (
    <CocktailCell cocktail={item} onPress={cocktail => this._onCocktailTapped(cocktail)} />
  )

  _renderNoResultsText = isFetching => {
    if (isFetching) {
      return null;
    }

    return (  <Text style={styles.noResults}>{"No results available"}</Text> )
  }

  render () {
    const {cocktailsList, isFetching } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        style={ styles.list }
        data={ cocktailsList }
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={2}
        ListEmptyComponent={_ => this._renderNoResultsText(isFetching)}
        />
      </SafeAreaView>
    )
  }
}

export default Home
