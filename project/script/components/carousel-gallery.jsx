const carouselGallery = (props) => {
    var images = [];
    props.previewImages.map((image) => {
        images.push(
            <li data-thumb={image}>
                <img src={image} className="slider-image" />
            </li>
        );
    });

    return (
        <div className="col-md-6 left-box">
            <div className="item">
                <div className="">
                    <ul className="gallery list-unstyled cS-hidden">
                        {images}
                    </ul>
                </div>
            </div>
        </div>
    );
};
  