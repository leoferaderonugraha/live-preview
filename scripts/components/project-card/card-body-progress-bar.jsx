const CardBodyProgressBar = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="progress sm">
                    <div className="progress-bar progress-bar-green" style={{width: props.launchProgress + '%'}}></div>
                </div>
            </div>
        </div>
    );
}