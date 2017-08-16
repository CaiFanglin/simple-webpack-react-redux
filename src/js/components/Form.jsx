import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Btn from './Button.jsx';

const propTypes = {
    state : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired
};

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { state, actions } = this.props;

        return (
            <section>
                <div>
                    <Input item={state.change} onchange={actions.chanInput}/>
                </div>
                <Btn item={state.win.text} onclick={actions.chanBtn}/>
            </section>
        )
    }
}

Form.propTypes = propTypes;