
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { withRouter } from 'react-router-dom'

import actions from './actions'

const mapState = (state, ownProps) => ({ ...state })

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default compose(connect(mapState, mapDispatch), withRouter)