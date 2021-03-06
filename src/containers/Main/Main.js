import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as classNames from 'classnames/bind' 

import styles from './Main.scss'

import share from '../../assets/images/share.svg'

const cx = classNames.bind(styles)

class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      path: '/'
    }

    this.onUse = this.onUse.bind(this)
  }

  onUse = () => {
    if(sessionStorage.length === 0){
      return('/login')
    } else {
      return('/video')
    }
  }

  render(){
    return(
      <React.Fragment>
        <div className={cx('Main')}>
          <div>
            <div>
              <p>Censorship</p>
              <p>with A.I</p>
              <div>
                <Link to={this.onUse}>USE NOW !</Link>
                <Link to='/how-to-use'>HOW TO USE ?</Link>
              </div>
            </div>
            <img src={share} alt=""/>
          </div>
        </div>
        <footer>
          <div/>
          <div>© YOUMO, All rights reserved</div>
        </footer>
      </React.Fragment>
    )
  }
}

export default withRouter(Main);