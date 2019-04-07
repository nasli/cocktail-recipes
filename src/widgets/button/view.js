import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

class Button extends Component {
  _renderContent () {
    const { labelStyle, label } = this.props
    return (
      <Text style={[styles.label, labelStyle]}>{label.toUpperCase()}</Text>
    )
  }

  render () {
    const { buttonStyle, onPress, isFetching } = this.props
    return (
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={isFetching ? () => {} : onPress}
      >
        {this._renderContent()}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  label: '',
  onPress: () => {},
  buttonStyle: {},
  labelStyle: {},
  isFetching: false
}

export default Button
