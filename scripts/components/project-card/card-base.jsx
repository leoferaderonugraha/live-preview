const CardBase = (props) => {
    return (
        <div className="col">
            <div className="card">
                <CardCarousel
                    id={props.id}
                    totalImages={props.totalImages}
                    previewImages={props.previewImages}
                />
            </div>
        </div>
    );
};