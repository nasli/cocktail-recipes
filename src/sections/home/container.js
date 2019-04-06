import { connect } from 'react-redux'
import View from './view'
import * as CocktailsActions from '../../redux/cocktails/actions'

const mapStateToProps = state => {
  return {
    cocktailsList: state ? state.cocktails.list : [],
    isFetching: state ? state.cocktails.isFetching : false
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCocktailsList: () => {
      dispatch(CocktailsActions.fetchCocktailsList())
    },
    updateCocktailSelected: cocktail => {
      dispatch(CocktailsActions.updateCocktailSelected(cocktail))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
