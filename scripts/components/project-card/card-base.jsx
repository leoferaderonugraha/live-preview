const CardBase = (props) => {
    return (
        <div className="col">
            <div className="card-project">
                <CardCarousel
                    id={props.id}
                    totalImages={props.totalImages}
                    previewImages={props.previewImages}
                />
                <CardBody />
            </div>
        </div>
    );
};