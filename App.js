
import React from 'react';
import './App.css';

class Product extends React.Component{
  constructor(){
    super()
    this.state={products:[]};
  }

  componentDidMount(){
    var myApi= new Request(`https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json`);
    fetch(myApi).then(response=>response.json())
    .then(data=>{this.setState({products:data})})
  }

  render(){
    return(
      <div className="App" id="root">
        <h1>products list</h1>
        <ul>
         {this.state.products.map(product=>{return <li key={`product-${product}`}>{product.name}
         <button>+</button><button>-</button>
         </li>})}
        </ul> 
      
      </div>
    )
  }
}
export default Product;
