function CreateCard() {
    ReactDOM.render(
        <div className="container">
            <div className="row">
                <CardBase />
            </div>
            {alert(0)}
        </div>
    
        , document.getElementById("card-base")
    );
};