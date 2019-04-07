import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import _ from 'lodash'
import styles from './styles'
import { Input, Button, CameraPicker } from '../'

class CocktailAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: _.get(props, 'cocktail.strDrink', ''),
      nameError: '',
      instructions: _.get(props, 'cocktail.strInstructions', ''),
      instructionsError: '',
      image: _.has(props, "cocktail.strDrinkThumb")
        ? { uri: props.cocktail.strDrinkThumb }
        : null
    }
  }

    _onSubmit = () => {
      const { name, instructions } = this.state;
      if (!name || !instructions) {
        const nameError = name ? '' : '*Required'
        const instructionsError = name ? '' : '*Required'
        this.setState({ nameError, instructionsError })
        return
      } else {
        this.setState({ nameError: '', instructionsError: '' })
      }

      const cocktail = {
        strDrink: name,
        strInstructions: instructions,
        strDrinkThumb: _.has(this.state, 'image.data')
        ? "data:image/jpeg;base64," + this.state.image.data
        : null
      };
      this.props.onSubmit(cocktail);
      this.setState({ name: '', instructions: '', image: null })
    };

  render () {
    console.log('THIS PROPS adding cocktail', this.props)
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Input
            label={'Name:'}
            value={this.state.name}
            onChangeText={v => this.setState({ name: v })}
            placeholder={'Margarita'}
            error={this.state.nameError}
          />

          <Input
            label={'Instructions:'}
            value={this.state.instructions}
            onChangeText={instructions => this.setState({ instructions })}
            placeholder={'Detail instructions...'}
            error={this.state.instructionsError}
          />

          <View style={{ margin: 20 }}>
            <Text style={styles.label}>{"Image:"}</Text>
            <CameraPicker
              value={this.state.image}
              onChange={image => this.setState({ image })}
            />
          </View>
        </View>

        <Button
          label={"Save"}
          onPress={this._onSubmit}
          buttonStyle={{ margin: 20 }}
          isFetching={this.props.isFetching}
        />
      </SafeAreaView>
    )
  }
}

export default CocktailAdd
