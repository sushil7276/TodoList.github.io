import React, { Component } from 'react'
import CartItem from './CartItem';

class Cart extends Component {
    /*
        constructor() {
            super();
            this.state = {
                product: [
                    {
                        price: 999,
                        title: 'My Phone',
                        qty: 1,
                        img: '',
                        id: 1
                    },
                    {
                        price: 99,
                        title: 'Watch',
                        qty: 10,
                        img: '',
                        id: 2
                    },
                    {
                        price: 5000,
                        title: 'Laptop',
                        qty: 4,
                        img: '',
                        id: 3
                    }
                ]
            }
        }
    
    
        handleIncrease = (pro) => {
    
            const { product } = this.state;
            let index = product.indexOf(pro);
            product[index].qty += 1;
    
            this.setState({
                product
            })
    
        }
    
        handledecrease = (pro) => {
            const { product } = this.state;
            let index = product.indexOf(pro);
    
            if (product[index].qty === 0) {
                return;
            }
    
            product[index].qty -= 1;
            this.setState({
                product
            })
        }
    
        handleDelete = (id) => {
    
            const items = this.state.product.filter((item) => item.id !== id);
    
            this.setState({
                product: items
            })
        }
    */
    render() {
        const { myProduct } = this.props
        return (
            <div className='cart'>

                {myProduct.map((item) => {
                    return (
                        <CartItem
                            myProduct={item}
                            key={item.id}
                            onincreaseQuantity={this.props.onincreaseQuantity}
                            ondecreaseQuantity={this.props.ondecreaseQuantity}
                            onDeleteProduct={this.props.onDeleteProduct}
                        />
                    )
                })
                }

            </div>
        )
    }
}

export default Cart;