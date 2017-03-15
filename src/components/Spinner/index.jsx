import React from 'react'
import cn from 'classnames'

import './style.sass'


export default class Spinner extends React.Component {

  static propTypes = {
    showSpinner: React.PropTypes.bool
  }

  static defaultProps = {
    showSpinner: false
  }

  render() {
    let cns = {
      spinner: cn('spinner', {'active': this.props.showSpinner}),
      spinner_wrap: cn('spinner-wrap'),
      spinner_icon: cn('spinner-icon'),
      spinner_elem: cn('spinner-icon-elem')
    }

    return(
      <div className={cns.spinner}>
        <div className={cns.spinner_wrap}>
          <div className={cns.spinner_icon}>
            <div className={cns.spinner_elem} />
          </div>
        </div>
      </div>
    )
  }

}