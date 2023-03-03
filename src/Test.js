import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value > 5) return false;
        return true;
    }
    componentDidMount() {
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    value: prevState.value + 1
                };
            });
        });
    }
    render() {
        console.log(this.state.value);
        return <div></div>;
    }
}