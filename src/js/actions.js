import 'whatwg-fetch';

export const WIN_TYPE = 'WIN_TYPE';
export const CHANGE_TYPE = 'CHANGE_TYPE';

var consoleList = items => {
    // const { type, placeholder } = items;
    for (var item in items ) {
        console.log(`${item}: ${items[item]} `)
    }

    return {
        type: items['acType']
    }
}

//触发相应的reducer
export function chanInput (item) {
    return {
        type: 'CHANGE_TYPE',
        item
    }
}
//触发相应的reducer
export function chanBtn (item) {
    return {
        type: 'WIN_TYPE',
        item
    }
}

export function change (item) {
    return (
        dispatch => {
            return consoleList(item)
        }
    )
}

export function ch (item) {
    return (
        dispatch => {
            return consoleList(item)
        }
    )
}
