import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    backgroundColor: colors.red,
    marginBottom: 20
  },
  infoRow: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    fontSize: 16,
    color: colors.white,
    flex: 1,
    textAlign: 'right'
  },
  label: {
    fontSize: 14,
    color: colors.white
  }
})
