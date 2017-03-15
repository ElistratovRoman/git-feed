import React from 'react'

// TODO: handle all event type
// https://developer.github.com/v3/activity/events/types/
export default class Feed extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  }

  render() {
    let { data } = this.props

    switch(data.type) {
      case 'WatchEvent':
        return this.renderWatchEvent(data)
      default:
        return null
    }
  }

  renderWatchEvent = (data) =>
    <div className='feed WatchEvent'>
      <div className='actor'>
        <img src={data.actor.avatar_url} />
        <a href={`https://github.com/${data.actor.login}`}>
          { data.actor.display_login }
        </a>
      </div>

      <div className='action'>{ 'starred' }</div>

      <div className='event-repo'>
        <a href={data.repo.url}>
          { data.repo.name }
        </a>
      </div>
    </div>
}