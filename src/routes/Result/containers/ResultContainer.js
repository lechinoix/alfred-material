import { connect } from 'react-redux'
import { setName } from '../modules/visitor'

import Visitor from '../components/Visitor'

const mapDispatchToProps = {
  setName
}

const mapStateToProps = (state) => ({
  name : state.visitor.name
})

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)
