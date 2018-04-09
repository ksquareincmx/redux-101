class List extends React.Component {
    render(){
        const { activeItems, deleteSelectedItem } = this.props;

        const itemsNodes = activeItems.map(element => (
            <button
                key={element.id} 
                type="button" 
                className="list-group-item list-group-item-action" 
                onClick={()=> deleteSelectedItem(element)}
            > 
                {element.name}
            </button>
        ));

        return (
            <main className="container pb2">
                <div className="list-group">
                    {itemsNodes}
                </div>
            </main>
        )
    }
}


const mapStateList = state => ({
    activeItems: state.items,
});

const mapDispatchList = dispatch => ({
    deleteSelectedItem: (item) => dispatch(actions.deleteItem(item)),
});


List = ReactRedux.connect(mapStateList, mapDispatchList)(List);