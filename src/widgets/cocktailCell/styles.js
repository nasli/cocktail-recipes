import { StyleSheet, Dimensions } from 'react-native'
import * as colors from '../../commons/colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  cell: {
    width: width / 2.04,
    height: width / 1.6,
    margin: 1.5,
    borderRadius: 4,
    borderWidth: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'red',
    borderRadius: 4
  },
  text: {
    flex: 1,
    color: colors.white,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold'
  },
  overlay: {
    flex: 1,
    height: 75,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(218, 223, 225, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 16,
    bottom: 0,
    borderRadius: 4

  }
})
