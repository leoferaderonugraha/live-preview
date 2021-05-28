const CardBase = (props) => {
    var Cards;

    /* Take an array of landXProperty */
    for (var i = 0; i < props.length; i++) {
        Cards.push(
        <div className="col-sm-12 col-md-3" key={props[i]["landXProperty"].id}>
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

    return (
        <div className="col-sm-12 col-md-3">
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