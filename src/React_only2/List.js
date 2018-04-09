class List extends React.Component {
    render(){
        const { items, removeItem } = this.props;

        const itemsNodes = items.map(element => (
            <button
                key={element.id} 
                type="button" 
                className="list-group-item list-group-item-action" 
                onClick={()=> removeItem(element.id)}
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