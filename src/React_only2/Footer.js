class Footer extends React.Component{
    render(){
        const { itemsAmount, removedItemsAmount, createdItemsAmount } = this.props;
        return (
            <footer className="d-flex bg-info text-white justify-content-between px-3 py-3">
                <div>
                    Amount of Items:  {itemsAmount}
                </div>
                <div>
                    Amount of Deleted Items: {removedItemsAmount}
                </div>
                <div>
                    Amount of Cretaed Items: {createdItemsAmount}
                </div>
            </footer>
        );
    }
}