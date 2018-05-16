

export default store => next => action => {
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then((resp) => {
        const newAction = {
            ...action,
            payload: resp
        };
        store.dispatch(newAction);
    })

    return action.payload //action.payload is a promise, so it'll fix the undefined error
    // console.log('Action in middleware: ', action);

    // next(action);
}

    // function (store) {
    //     return function(next) {
    //         return function(action) {
    //             //code goes here
    //         }
    //     }
    // }