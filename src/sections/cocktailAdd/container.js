import { connect } from 'react-redux'
import { CocktailForm } from '../../widgets'
import * as CocktailsActions from '../../redux/cocktails/actions'

const mapStateToProps = state => {
  console.log('MAPTOPROPS add ', state)
  return {
    favoriteList: state ? state.cocktails.favoriteList : []
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: cocktail => {
      dispatch(CocktailsActions.addCocktail(cocktail))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailForm)
