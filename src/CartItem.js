import React, { Component } from 'react'

export class CartItem extends Component {

    /*
      constructor() {
          super();
          this.state = {
              price: 999,
              title: 'My Phone',
              qty: 1,
              img: '',
              id: 1
          }
      }
    
         increase = () => {
             // 1. setState Methode changing value // if we not required preveous state then use this method
             // this.setState({
             //     qty: this.state.qty + 1
             // })
     
             // 2. setState Methode changing value  // if we required preveous state then use this method
             this.setState((prevState) => {
                 return {
                     qty: prevState.qty + 1
                 }
             })
         }
     
         decrease = () => {
             const { qty } = this.state
     
             if (qty === 0) {
                 return;
             }
     
             this.setState((prevState) => {
                 return {
                     qty: prevState.qty - 1
                 }
             })
     
         }
         */


    render() {
        // Destructure 
        // const { price, qty, title } = this.state;
        const { price, qty, title } = this.props.myProduct
        const { myProduct, ondecreaseQuantity, onDeleteProduct } = this.props;

        return (
            <div className='cart-item'>
                <div className="left-block">

                    <img style={style.image} src={myProduct.img} alt='img' />

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>

                    <div className='cart-item-actions'>
                        {/* Buttons */}

                        {/* Not Using Destructure  "onincreaseQuantity" this function */}
                        <img src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" alt="increse" className='action-icons' onClick={() => this.props.onincreaseQuantity(this.props.myProduct)} />

                        {/* Using Destructure  "ondecreaseQuantity" this function */}
                        <img src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" alt="decrease" className='action-icons' onClick={() => ondecreaseQuantity(myProduct)} />

                        {/* Using Destructure  "ondecreaseQuantity" this function */}
                        <img src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" alt="delete" className='action-icons' onClick={() => onDeleteProduct(myProduct.id)} />
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRedius: 4,
        background: '#ccc'
    }
}

export default CartItem