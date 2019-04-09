import { connect } from 'react-redux'
import View from './view'
import * as CocktailsActions from '../../redux/cocktails/actions'

const mapStateToProps = state => {
  return {
    favoriteList: state ? state.favorites.favoriteList : [],
    favoriteTotal: state ? state.favorites.favoriteTotal : 0
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCocktailsFavoriteList: () => {
      dispatch(CocktailsActions.getCocktailsFavoriteList())
    }
    // getCocktailsList: () => {
    //   dispatch(CocktailsActions.initCocktailsList())
    // }
    // ,
    // updateCocktailSelected: cocktail => {
    //   dispatch(CocktailsActions.updateCocktailSelected(cocktail))
    // },
    // updateCocktailsListOffset: () => {
    //   dispatch(CocktailsActions.updateCocktailsListOffset())
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
