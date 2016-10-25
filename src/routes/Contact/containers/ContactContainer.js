import { connect } from 'react-redux'
import { setContactId } from '../modules/contact'

import Contact from '../components/Contact'

const mapDispatchToProps = {
  setContactId
}

const mapStateToProps = (state) => ({
  id : state.contact.id
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
