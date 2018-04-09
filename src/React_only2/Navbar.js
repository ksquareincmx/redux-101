class Navbar extends React.Component {

    render(){
        const {addItem, restoreItem} = this.props;
        return (
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
                    <button type="button" className="btn btn-primary" onClick={addItem}> Add Item </button>
                    <button type="button" className="btn btn-primary" onClick={restoreItem}> Restore Item </button>
                </div>
            </nav>
        );
    }
}