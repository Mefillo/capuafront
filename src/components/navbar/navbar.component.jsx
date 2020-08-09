import React from 'react'
import logo from '../img/favicon.png'
import box from '../img/menu.png'

import './navbar.component.scss'
class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggled: this.props.toggled
    }
  }

  Menu = (props) => {
    if (window.innerWidth > 700) {
      return (
        <div className="menu-s" >
          <ul>
            <a href="../"><li>Shop</li></a>
            <a href="../about/"><li>About</li></a>
            <a href="../contact/"><li>Contact us</li></a>
          </ul>
        </div>
      )
    } else {
      return (
        <div className={props.toggled ? 'menu untoggled' : 'menu toggled'} >
          <ul className={props.toggled ? 'untoggled' : 'toggled'}>
            <a href="../"><li>Shop</li></a>
            <a href="../about/"><li>About</li></a>
            <a href="../contact/"><li>Contact us</li></a>
          </ul>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="navbar">
        <div className="up">
          <a id = 'redirect' href='../' style={{ padding: '0px' }}>
            <div className="logo">
              <div id="logotype"><img src={logo} alt=""/></div><p>Capua</p>
            </div>
          </a>
          <div className="box" onClick={() => {
            this.setState({ toggled: !this.state.toggled })
            console.log(this.state.toggled)
          }}>
            <img src={box} alt=""/>
          </div>
        </div>
        <this.Menu toggled={this.state.toggled}/>

      </div>
    )
  }
}
export default NavBar
