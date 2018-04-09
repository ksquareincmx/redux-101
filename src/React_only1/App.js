class App extends React.Component {

    state = {
        currentIndex: 0,
        items: [],
        removedItems: [],
    };

    addItem = () => {
        this.setState({      
            currentIndex: this.state.currentIndex + 1,
            items: [
                ...this.state.items, 
                newElement(this.state.currentIndex + 1)
            ],
        });
    };

    removeItem = (id) => {
        this.setState({
            removedItems: [
                ...this.state.removedItems, 
                this.state.items.find(element => element.id === id)
            ],
            items: this.state.items.filter(element  => element.id !== id),
        });
    };


    restoreItem = () => {
        if(this.state.removedItems.length !== 0 ){
            this.setState({
                removedItems: this.state.removedItems.slice(0, -1),
                items: [
                    ...this.state.items, 
                    this.state.removedItems[this.state.removedItems.length - 1],
                ]
            });
        }
        else {
            alert('WARNING! You cannot restore items anymore');
        }
    };

    render(){
        const { currentIndex, items, removedItems } = this.state;

        const itemsAmount = items.length;
        const removedItemsAmount = removedItems.length;

        const itemsNodes = items.map(element => (
            <button
                key={element.id} 
                type="button" 
                className="list-group-item list-group-item-action" 
                onClick={()=> this.removeItem(element.id)}
            > 
                {element.name}
            </button>
        ));

        return (
            <div className="main-app">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img 
                                src="https://ii.ct-stc.com/2/logos/empresas/2016/12/21/ksquare-labs-sa-de-cv-31D722171E816499thumbnail.png" 
                                width="30" 
                                height="30" 
                                className="d-inline-block align-top" 
                            /> Ksquare Inc 
                        </a>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.addItem}> Add Item </button>
                        <button type="button" className="btn btn-primary" onClick={this.restoreItem}> Restore Item </button>
                    </div>
                </nav>
            <main className="container pb2">
                <p> {this.state.counter} </p>
                <div className="list-group">
                    {itemsNodes}
                </div>
            </main>
            
            <footer className="d-flex bg-info text-white justify-content-between px-3 py-3">
                <div>
                    Amount of Items:  {itemsAmount}
                </div>
                <div>
                    Amount of Deleted Items: {removedItemsAmount}
                </div>
                <div>
                    Amount of Cretaed Items: {currentIndex}
                </div>
            </footer>
            </div>
        );
    }
}


const newElement = (currentIndex) => {
    return {
        id: currentIndex,
        name: 'Item #' + currentIndex,
    };
}