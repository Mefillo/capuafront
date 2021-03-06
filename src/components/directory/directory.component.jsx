import React from 'react'

import Product from '../products-items/product-item.component'
import './directory.component.scss'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost'
import SERVER_URL from '../../global'

const httpLink = createHttpLink({
  uri: SERVER_URL + 'graphql/'
}
)

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache
})

class Directory extends React.Component {
  componentDidMount () {
    client.query({
      query: gql`{
                            products{
                                    id
                                    name
                                    imgListing
                                    price
                                    color
                                    width
                                    link   
                                    }
                            }
                        
            `
    }).then(response => this.setState({ products: response.data.products })).catch()
  }

  constructor () {
    super()

    this.state = {
      products: [
      ]
    }
  }

  render () {
    return (
      <ApolloProvider client = {client}>
        <div className="cards">
          {
            this.state.products.map(({ name, price, color, imgListing, order, id, width, link }) => (
              <Product key={name} name = {name} price = {'$' + price.toString()} color={color} img={SERVER_URL + 'media/' + imgListing} imgLoaded={this.props.imgLoaded} order={order} id = {id} width={width} link={link} />
            )
            )
          }
        </div>
      </ApolloProvider>
    )
  }
}

export default Directory
