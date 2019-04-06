import { StyleSheet, Dimensions } from 'react-native'
import * as colors from '../../commons/colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  cell: {
    width: width / 2,
    height: width / 1.4,
    padding: 5
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
    backgroundColor: 'red'
  },
  text: {
    width: '100%',
    height: '10%',
    color: colors.white
  }
})
