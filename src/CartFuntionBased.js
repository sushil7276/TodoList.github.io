import React from 'react'
import CartItem from './CartItem';

const CartFuntionBased = (props) => {
    const { myProduct } = props
    return (
        <div className='cart'>

            {myProduct.map((item) => {
                return (
                    <CartItem
                        myProduct={item}
                        key={item.id}
                        onincreaseQuantity={props.onincreaseQuantity}
                        ondecreaseQuantity={props.ondecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })
            }

        </div>
    )
}

export default CartFuntionBased