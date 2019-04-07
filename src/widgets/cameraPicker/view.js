import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { CAMERA_OPTIONS } from '../../config/camera'
import styles from './styles'

class CameraPicker extends Component {
  _showImagePicker = () => {
    ImagePicker.showImagePicker(CAMERA_OPTIONS, response => {
      if (response.uri) {
        this.props.onChange(response)
      }
    })
  }

  render () {
    const { value, label, containerStyle, labelStyle } = this.props
    const source = value ? { uri: value.uri } : null

    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={this._showImagePicker}
      >
        <Image source={source} style={styles.image} />
        <View
          style={[
            styles.labelContainer,
            source ? {} : { backgroundColor: 'transparent' }
          ]}
        >
          <Text style={[styles.label, labelStyle]}>{label.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CameraPicker.defaultProps = {
  value: null,
  onChange: () => {},
  label: 'Choose image',
  containerStyle: {},
  labelStyle: {}
}

export default CameraPicker
