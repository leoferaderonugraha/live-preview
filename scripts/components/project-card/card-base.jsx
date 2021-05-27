const CardBase = (props) => {
    return (
        <div className="col">
            <div className="card">
                <CardCarousel id={props.id}/>
            </div>
        </div>
    );
};