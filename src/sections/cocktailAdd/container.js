import { connect } from 'react-redux'
import { CocktailForm } from '../../widgets'
import * as FavoritesActions from '../../redux/favorites/actions'

const mapStateToProps = state => {
  return {
    favoriteList: state ? state.favorites.favoriteList : []
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: cocktail => {
      dispatch(FavoritesActions.addCocktail(cocktail))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailForm)
