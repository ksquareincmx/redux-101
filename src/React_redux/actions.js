const actions = {
    addItem: (item) => ({type: 'ADD_ITEM', item}),
    deleteItem: (item) => ({type: 'DELETE_ITEM', item}),
    restoreItem: (item) => ({type: 'RESTORE_ITEM', item}),
};