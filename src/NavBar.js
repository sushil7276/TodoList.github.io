import React from 'react'

const NavBar = (props) => {

    return (
        <div style={style.nav}>
            <div style={style.cartIconContainer}>
                <img src="https://as2.ftcdn.net/v2/jpg/00/97/00/05/1000_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg" alt="cart-icon" style={style.cartIcon} />
                <span style={style.cartCount}>{props.count}</span>
            </div>
        </div>
    )

}

const style = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 10,
        top: -9
    }
};

export default NavBar;
