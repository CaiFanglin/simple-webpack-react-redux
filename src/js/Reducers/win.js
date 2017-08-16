import * as ActionTypes from "../actions.js"

const initState = {
    'text': '点我啊!'
};

export default function win (state = initState, action) {
    switch (action.type) {
        case ActionTypes.WIN_TYPE:
            console.info('win')
            return Object.assign({}, state, action.item);
        default:
            return state;
    }
}