import React, { Component } from 'react'
import { TouchableOpacity, Image , Text} from 'react-native'
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
        <Text style={styles.text}>{cocktail.strDrink}</Text>
        <Image style={styles.image}
          source={source}/>
      </TouchableOpacity>
    )
  }
}

export default CocktailCell
