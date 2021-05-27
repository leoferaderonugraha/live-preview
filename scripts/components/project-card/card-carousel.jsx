const CardCarousel = (props) => {
    return (
        <div id={props.id} className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
                <CardCarouselTarget
                    id={props.id}
                    totalImages={props.totalImages}
                />
                <CardCarouselInner
                    previewImages={props.previewImages}
                />
            </ol>
        </div>
    );
};