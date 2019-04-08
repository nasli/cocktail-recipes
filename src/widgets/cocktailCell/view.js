import React, { Component } from 'react'
import { TouchableOpacity, Image , Text, View } from 'react-native'
import styles from './styles'

class CocktailCell extends Component {

  static defaultProps = {
    cocktail: {},
    onPress: () => {}
  }

  _onCellTapped = () => {
    const { cocktail } = this.props
    this.props.onPress(cocktail);
  }

  render () {
    const { cocktail } = this.props
    const source = cocktail && cocktail.strDrinkThumb ? { uri: cocktail.strDrinkThumb } : null
    return (
      <TouchableOpacity onPress={ () => this._onCellTapped()} style={styles.cell}>
        <Image style={styles.image}
            source={source}/>
        <View style={styles.overlay}>
          <Text style={styles.text}>{cocktail.strDrink}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CocktailCell
