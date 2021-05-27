const CardBodyProgressBar = (props) => {
    return (
        <div class="row mb-1">
            <div class="col">
                <div class="progress sm">
                    <div class="progress-bar progress-bar-green" style={{width: props.launchProgress + '%'}}></div>
                </div>
            </div>
        </div>
    );
}