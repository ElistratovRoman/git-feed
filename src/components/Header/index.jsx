import React from 'react'
import './style.sass'

export default class Header extends React.Component {

  static propTypes = {
    currentUser : React.PropTypes.object,
    onSignOut   : React.PropTypes.func
  }

  render() {
    let { currentUser, onSignOut } = this.props

    return (
      <header>
        <div className='logo'>Git Feed</div>
        {
          currentUser &&
          <div className='auth' onClick={onSignOut}>
            <span className='auth__signout' onClick={onSignOut}>Sign out</span>
          </div>
        }
      </header>
    )
  }
}