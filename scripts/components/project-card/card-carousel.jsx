const CardCarousel = (props) => {
    return (
        <div id={props.id} className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
                <CardCarouselTarget totalImages={10}/>
                <CardCarouselInner />
            </ol>
        </div>
    );
};