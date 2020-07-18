import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import DetailedProduct from './components/detailed-product/detailed-product.component'
import About from './pages/about.page'
import Contact from './pages/contact.page'
import SERVER_URL from './global'

import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient, gql} from 'apollo-boost';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const httpLink = createHttpLink ({
  uri: SERVER_URL + 'graphql/'
})
const cache = new InMemoryCache ();
const client = new ApolloClient({
  link:httpLink,
  cache
});
const override = css`
display: block;
margin: auto;
border-color: purple;
top:50%;
left:50%;
`;


class App extends React.Component {

  componentDidMount() {
    client.query({
        query: gql`{
          products{name}}`})
            .then(response => {
              let array = response.data.products.map((x)=>x.name)
              this.setState({names:array})
            })
            .then(this.setState({loading:false})).catch();

}

  constructor(){
    super();
    this.state ={
      loading:false,
      names: []
    }
  }
  render(){
    if (!this.state.loading){
    return (
      <div>
        <Switch>
        <Route exact path = '/' render={() => <HomePage names = {this.state.names} /> } />

        {this.state.names.map((name) =>
          <Route key={name} exact path = {'/'+name+'/'} render={(name) => <DetailedProduct key={name} name = {name}/>}/>
        )}

        <Route exact path = '/about/'  component = {About} />
        <Route exact path = '/contact/'  component = {Contact} />
        </Switch>
      </div>
    );
    }
    else{
      return(
        <div>
            <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={!this.state.loading}
            />
          </div>
          </div>
        )
    }
    
  }
}

export default App;
