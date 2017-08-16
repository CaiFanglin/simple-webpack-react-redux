import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.string.isRequired,
    text: PropTypes.string,
    onclick: PropTypes.func.isRequired,
};

export default class Btn extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { item, text, onclick } = this.props;
        const clk = () => {
            onclick({
                "text": "123"
            })
        }
        return (
            <button onClick={clk}>
                {item}
            </button>
        )
    }
}

Btn.propTypes = propTypes;