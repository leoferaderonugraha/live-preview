const CardCarouselTarget = (props) => {
    var dataTargets = [];

    for (var i = 0; i < props.totalImages; i++) {
        /* Set the first image to be active */
        if (i == 0) {
            dataTargets.push(
                <li data-target={'#' + props.id} data-slide-to={i} className="active"></li>
            );
        } else {
            dataTargets.push(
                <li data-target={'#' + props.id} data-slide-to={i}></li>
            );
        }
    }

    return dataTargets;
};