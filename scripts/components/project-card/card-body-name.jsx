const CardBodyName = (props) => {
    return (
        <div className="row">
            <div className="col">
                <p className="project-name">
                    {props.projectName}
                </p>
            </div>
        </div>
    );
}