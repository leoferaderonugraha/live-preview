const CardBase = (props) => {
    var cards = [];

    /* Take an array of landXProperty */
    for (var i = 0; i < props.length; i++) {
        cards.push(
            <div className="col-sm-12 col-md-6 col-xl-4" key={props[i]["landXProperty"].id}>
                <div className="card custom">
                    <CardCarousel
                        id={props[i]["landXProperty"].id}
                        totalImages={props[i]["landXProperty"].previewImages.length}
                        previewImages={props[i]["landXProperty"].previewImages}
                    />
                    {CardBody(props[i]["landXProperty"])}
                </div>
            </div>
        );
    }

    return (cards);
};