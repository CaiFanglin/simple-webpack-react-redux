import * as ActionTypes from "../actions.js"

const initState = {
    type: 'text',
    placeholder: '请输入'
};

export default function change (state = initState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_TYPE:
            console.info('change')
            return Object.assign({}, state, action.item);
        default:
            return state;
    }
}