import React from 'react'
import config from 'config'
import Feed from './Feed'

import './style.sass'

// TODO: errors handlers; load more
export default class Feeds extends React.Component {

  static propTypes = {
    feeds       : React.PropTypes.array.isRequired,
    currentUser : React.PropTypes.object.isRequired
  }

  render() {
    let { feeds, currentUser } = this.props

    return (
      <section className='feeds'>
        <div className='feeds-owner'>
          <img src={currentUser.avatar_url} />
          <span>{ currentUser.login }</span>
        </div>

        { feeds.map((feed, i) => <Feed key={i} data={feed} />) }

      </section>
    )
  }

  // loadFeeds = (login, page) => {
  //   this.props.loadFeeds(login)
  // }
}