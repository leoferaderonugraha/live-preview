const CardBase = (props) => {
    return (
        <div className="col">
            <div className="card custom">
                <CardCarousel
                    id={props.id}
                    totalImages={props.totalImages}
                    previewImages={props.previewImages}
                />
                <CardBody
                    projectName={props.projectName}
                    category={props.category}
                    lotPrice={props.lotPrice}
                    totalLot={props.totalLot}
                />
            </div>
        </div>
    );
};