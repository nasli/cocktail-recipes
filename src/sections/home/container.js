import { connect } from 'react-redux'
import View from './view'
import * as CocktailsActions from '../../redux/cocktails/actions'

const mapStateToProps = state => {
  return {
    cocktailsList: state ? state.cocktails.list : [],
    cocktailsTotal: state ? state.cocktails.total : 0,
    isFetching: state ? state.cocktails.isFetching : false
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCocktailsList: () => {
      dispatch(CocktailsActions.initCocktailsList())
    },
    updateCocktailSelected: cocktail => {
      dispatch(CocktailsActions.updateCocktailSelected(cocktail))
    },
    updateCocktailsListOffset: () => {
      dispatch(CocktailsActions.updateCocktailsListOffset())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
