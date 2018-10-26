import React, { Component } from 'react';
import './App.css';
import AppContainer from './container/appContainer'

class App extends Component {
  state = {
    productList: [],
    isFacthing: false 
  }

  handleSubmite(e){
    e.preventDefault()
    this.getApiProducts(e.target.formSearch.value)
  }

  getApiProducts(value) {
    const url =` https://api.mercadolibre.com/sites/MLA/search?q=${value}`
    this.setState({
      isFacthing: true
    })
    fetch(url)
    .then(res => res.json())
    .then(items => {
      this.setState({
        productList: items.results.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.thumbnail
        }))
      })
    })
    .then(
      this.setState({
        isFacthing: false
      })
    )
  }

  render() {
    return (
      <div className="container">
        <AppContainer {...this.state} handleSubmite={(e) => this.handleSubmite(e)}/>
      </div>
    );
  }
}

export default App;
