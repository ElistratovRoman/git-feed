import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from 'actions/user.js'
import * as feedsActions from 'actions/feeds.js'
import config from 'config'
import Header from 'components/Header'
import Feeds from 'components/Feeds'
import Spinner from 'components/Spinner'

import normalize from 'normalize.css'
import './style.sass'


const mapStateToProps = ({ user, feeds }) => ({ user, feeds })

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...userActions,
    ...feedsActions
  }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {

  componentWillMount() {
    this.props.actions.checkAuth()
  }

  componentWillReceiveProps(nextProps) {
    let { currentUser } = nextProps.user

    if (!currentUser) {
      let url = window.location.href
      let regex = new RegExp("[?code](=([^&#]*)|&|#|$)")
      let results = regex.exec(url)

      if (results && results[2]) {
        let code = decodeURIComponent(results[2].replace(/\+/g, " "))
        this.props.actions.getToken(code)
      }
    }

    if (!!currentUser && !this.props.user.currentUser) {
      this.props.actions.loadFeeds(currentUser.login)
    }
  }

  render() {
    let { user, feeds, actions } = this.props

    return (
      <div className='page'>
        <Header currentUser={user.currentUser} onSignOut={actions.signOut} />

        <Spinner showSpinner={user.isFetching || feeds.isFetching} />

        <div className='page__content'>
          {
            !user.currentUser &&
            <div className='auth-link'>
              { `To begin watching you need ` }
              <a href={config.auth_link}>
                { 'sign in.' }
              </a>
            </div>
          }

          {
            !!user.currentUser && !!feeds.list.length &&
            <Feeds currentUser={user.currentUser} feeds={feeds.list} loadFeeds={actions.loadFeeds} />
          }
        </div>
      </div>
    )
  }
}