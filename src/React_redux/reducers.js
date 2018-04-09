const currentIndexReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD_ITEM': 
            return state + 1;
        default: 
            return state;
    }
}

const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'DELETE_ITEM':
            return state.filter(element => element !== action.item);
        case 'RESTORE_ITEM':
            return [...state, action.item];
        default: 
            return state;
    }
}

const removedItemsReducer = (state = [], action) => {
    switch(action.type){
        case 'DELETE_ITEM':
            return [...state, action.item];
        case 'RESTORE_ITEM':
            return state.filter(element => element !== action.item);
        default: 
            return state;
    }
}

const reducers = Redux.combineReducers({
    currentIndex: currentIndexReducer, 
    items: itemsReducer, 
    removedItems: removedItemsReducer,
});