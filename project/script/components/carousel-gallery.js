const carouselGallery = (props) => {
    var images = [];
    props.previewImages.map((image) => {
        images.push(
            <li data-thumb={image} key={image}>
                <img src={image} className="slider-img"></img>
            </li>
        );
    });
    return React.createElement("div",
        {
            className: "col-md-6 left-box"
        },
        React.createElement("div",
            {
                className: "item"
            },
            React.createElement("div",
                {
                    className: ""
                },
                React.createElement("ul",
                    {
                        id: "image-gallery",
                        className: "gallery list-unstyled cS-hidden"
                    },
                    images
                )
            )
        )
    );
};
  