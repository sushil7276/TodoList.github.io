import { Component } from 'react';
import './App.css';
// import Cart from './Cart';
import CartFuntionBased from './CartFuntionBased';
import NavBar from './NavBar';
import firebase from 'firebase/compat/app';


class App extends Component {

  constructor() {
    super();
    this.state = {
      product: [],
      loading: true
    }

    this.db = firebase.firestore().collection('products')
  }



  componentDidMount() {

    /* Using "get()" any change in database go to page refresh */
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {

    //     const products = snapshot.docs.map((doc) => {
    //       let data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       product: products,
    //       loading: false
    //     })
    //   })

    /* Using "onSnapshot()" any change in database auto change ui do not refresh page */
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {

        const product = snapshot.docs.map((doc) => {
          let data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          product,
          loading: false
        })
      })

  }

  handleIncrease = (pro) => {
    /*
    // Normaly update this value
        const { product } = this.state;
        let index = product.indexOf(pro);
        product[index].qty += 1;
    
        this.setState({
          product
        })
     */

    // In firebase update value
    const { product } = this.state;
    let index = product.indexOf(pro);

    let docRef = this.db.doc(product[index].id);
    docRef.update(
      {
        qty: product[index].qty + 1
      }
    )
      .then(() => {
        console.log("Increase")
      })
      .catch((err) => {
        console.log(err)
      })


  }

  handledecrease = (pro) => {
    /*
         // Normaly update this value
        const { product } = this.state;
        let index = product.indexOf(pro);
    
        if (product[index].qty === 0) {
          return;
        }
    
        product[index].qty -= 1;
        this.setState({
          product
        })
    */

    // In firebase update value
    const { product } = this.state;
    let index = product.indexOf(pro);

    let docRef = this.db.doc(product[index].id);
    docRef.update({
      qty: product[index].qty - 1
    })
    .then(()=>{
      console.log("Decrease")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleDelete = (id) => {

    const items = this.state.product.filter((item) => item.id !== id);

    this.setState({
      product: items
    })
  }

  getCount = () => {
    const { product } = this.state
    let count = 0;

    product.forEach((item) => {
      count += item.qty
    })

    return count;
  }

  getTotal = () => {
    const { product } = this.state

    let total = 0;
    product.forEach((e) => {
      total = total + (e.qty * e.price)
    })

    return total;
  }

  /* Add Product to Firebase DataBase */
  addProduct = () => {
    this.db.add({
      img: 'https://media.istockphoto.com/id/1328117297/photo/washing-machine-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=4AW7fQqUAYUuMOydNk7P_x6DTFTF_I7onVC50JxFeCY=',
      price: 10000,
      qty: 1,
      title: "Washing Machine"
    })
      .then((docRef) => {
        // console.log(docRef);
      })
      .catch((err) => {
        // console.log(err);
      })
  }


  render() {
    const { product, loading } = this.state
    return (
      <div className="App">
        <NavBar
          count={this.getCount()}
        />
        {/* Add Product Button */}
        {/* <button onClick={this.addProduct} style={{ padding: 10, fontSize: 20 }}>Add Product</button> */}

        {/* This is  Class Based */}
        {/* <Cart
          myProduct={product}
          onincreaseQuantity={this.handleIncrease}
          ondecreaseQuantity={this.handledecrease}
          onDeleteProduct={this.handleDelete}
        /> */}

        {/* This is Function Based */}
        <CartFuntionBased
          myProduct={product}
          onincreaseQuantity={this.handleIncrease}
          ondecreaseQuantity={this.handledecrease}
          onDeleteProduct={this.handleDelete}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>Total: {this.getTotal()}</div>

      </div>
    );
  }
}

export default App;
