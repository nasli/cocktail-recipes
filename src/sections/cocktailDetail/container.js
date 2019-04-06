import { connect } from 'react-redux'
import View from './view'
import * as CocktailDetailActions from '../../redux/cocktailDetail/actions'

const mapStateToProps = state => {
  return {
    cocktailDetail: state ? state.cocktailDetail.cocktailDetail : null,
    isFetching: state ? state.cocktailDetail.isFetching : false
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCocktailDetail: () => {
      dispatch(CocktailDetailActions.fetchCocktailDetail())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
