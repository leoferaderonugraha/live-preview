const CardBase = (props) => {
    return (
        <div className="col-12 col-md-3">
            <div className="card custom">
                <CardCarousel
                    id={props.id}
                    totalImages={props.previewImages.length}
                    previewImages={props.previewImages}
                />
                {CardBody(props)}
            </div>
        </div>
    );
};