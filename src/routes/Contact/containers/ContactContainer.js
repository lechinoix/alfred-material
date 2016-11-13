import { connect } from 'react-redux'
import { setContact } from '../modules/contact'

import Contact from '../components/Contact'

const mapDispatchToProps = {
  setContact
}

const mapStateToProps = (state) => ({
  id : state.contact.id,
  name : state.contact.name
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
