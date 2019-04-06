import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  SafeAreaView
} from 'react-native'
import styles from './styles'
import _ from 'lodash'

class CocktailDetail extends Component {
  constructor (props) {
    super(props)
    props.getCocktailDetail()
  }

  render () {
    const { cocktailDetail } = this.props
    console.log('COCKTAIL DETAIL ', cocktailDetail)
    const imageThumb = _.has(cocktailDetail, 'strDrinkThumb')
      ? { uri: cocktailDetail.strDrinkThumb }
      : null
    const name = _.get(cocktailDetail, 'strDrink', '')
    const glass = _.get(cocktailDetail, 'strGlass', '')
    const alcoholic = _.get(cocktailDetail, 'strAlcoholic', '')
    const iba = _.get(cocktailDetail, 'strIBA', '')
    const category = _.get(cocktailDetail, 'strCategory', '')
    const tags = _.get(cocktailDetail, 'strTags', '')
    const instructions = _.get(cocktailDetail, 'strInstructions', '')
    // TODO: Ingredients
    // TODO: call API by id

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image style={styles.image} source={imageThumb} />
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Name:'}</Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Glass: '}</Text>
            <Text style={styles.value}>{glass}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Alcoholic: '}</Text>
            <Text style={styles.value}>{alcoholic}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'IBA: '}</Text>
            <Text style={styles.value}>{iba}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Category: '}</Text>
            <Text style={styles.value}>{category}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Tags: '}</Text>
            <Text style={styles.value}>{tags}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>{'Instructions: '}</Text>
            <Text style={styles.value}>{instructions}</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default CocktailDetail
