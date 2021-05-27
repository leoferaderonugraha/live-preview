const CardBody = (props) => {
    return (
        <div className="card-body">
            <div className="container-fluid px-0">
                <CardBodyButtonBuy />
                <CardBodySymbol />
                <CardBodyName 
                    projectName={props.projectName}
                />
            </div>
        </div>
    );
}