import { connect } from 'react-redux'
import View from './view'
import * as CocktailsActions from '../../redux/cocktails/actions'

const mapStateToProps = state => {
  return {
    cocktail: state ? state.cocktails.selected : [] // ,
    // isFetching: state ? state.cocktails.isFetching : false
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCocktailDetail: () => {
      dispatch(CocktailsActions.fetchCocktailDetail())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
