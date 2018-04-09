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

        return (
            <div className="main-app">
                <Navbar addItem={this.addItem} restoreItem={this.restoreItem} />
                <List items={items} removeItem={this.removeItem} />
                <Footer 
                    itemsAmount={itemsAmount}
                    removedItemsAmount={removedItemsAmount}
                    createdItemsAmount={currentIndex}
                />
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