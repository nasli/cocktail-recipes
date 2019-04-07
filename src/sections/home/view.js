import React, { Component } from 'react'
import { SafeAreaView, FlatList, Text, RefreshControl} from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'
import * as colors from '../../commons/colors'
import { CocktailCell } from '../../widgets'


class Home extends Component {
  constructor (props) {
    super(props)
    props.getCocktailsList()
  }

  _keyExtractor = (item, index) => `${item.idDrink}`

  _onCocktailTapped = cocktail => {
    this.props.updateCocktailSelected(cocktail)
    Actions.CocktailDetail()
  }

  _renderItem = ({ item, index }) => (
    <CocktailCell cocktail={item} 
      onPress={cocktail => this._onCocktailTapped(cocktail)} />
  )

  _renderNoResultsText = isFetching => {
    if (isFetching) {
      return null;
    }
    return (  
      <Text style={styles.noResults}>
        {"No results available"}
      </Text>
    )
  }

  _onEndReached = ({ distanceFromEnd }) => {
    const { cocktailsList, cocktailsTotal, isFetching } = this.props;

    if (
      distanceFromEnd > 100 &&
      !isFetching &&
      cocktailsList.length &&
      cocktailsList.length < cocktailsTotal
    ) {
      this.props.updateCocktailsListOffset();
    }
  };

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
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.8}
        refreshControl={
          <RefreshControl
            onRefresh={this.props.getCocktailsList}
            refreshing={isFetching}
            tintColor={colors.white} // iOS
            colors={[colors.white]} // Android
          />
        }
        />
      </SafeAreaView>

    )
  }
}

export default Home
