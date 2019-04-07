import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: colors.grey,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.6)',
    zIndex: 2
  },
  label: {
    color: colors.lightGrey
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 4,
    resizeMode: 'cover',
    zIndex: 1
  }
})
