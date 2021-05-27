const CardBodyName = (props) => {
    return (
        <div className="row no-mb-1">
            <div className="col">
                <p className="project-name">
                    {props.projectName}
                </p>
            </div>
        </div>
    );
}