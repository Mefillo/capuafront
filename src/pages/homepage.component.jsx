import React from 'react'
import banner from '../components/img/banner3.jpg'

import Directory from '../components/directory/directory.component'
import NavBar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import './homepage.styles.scss'
import Loader from '../components/loader'

class HomePage extends React.Component {
  constructor () {
    super()
    this.state = {
      loaded: false
    }
  }

    imgLoaded = () => {
      this.setState({ loaded: true })
    }

    render () {
      return (
        <div className="homepage">
          <NavBar/>

          {!this.state.loaded ? <Loader /> : ''}
          <div className="content" style={{ display: (this.state.loaded ? 'flex' : 'none') }}>
            <div className="baner">
              <div className="slogan">
                <h3 className="slogan">Exercise. Travel. Repeat.</h3>
                <h5 className="slogan"> Technical developments<br/>for comfortable physical activities</h5>
              </div>
              <div className="photoRight">
                <img src="" alt="" className="right"/>
              </div>
              <div className="banner-img" >
                <img className="banner-img" src={banner} alt="Travel!" width='400px'/>
              </div>
            </div>
            <div className="promo">
              <div className="control">
                <h2>TRY &nbsp; IT</h2>
                {/* <h3 className='next'>next</h3> */}
              </div>
              {/* eslint-disable-next-line react/prop-types */}
              <Directory names = {this.props.names.names} imgLoaded={this.imgLoaded}/>
            </div>
          </div>
          <Footer/>
        </div>

      )
    }
}

export default HomePage
