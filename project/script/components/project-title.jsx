const ProjectTitle = (props) => {
    return (
        <div className="row-cols-1">
            <div className="row">
                <p className="main-title" id="project-name">
                    {props.name}
                </p>
            </div>
            <div className="row">
                <p className="main-title" id="project-issuername">
                    - {props.issuerName}
                </p>
            </div>
        </div>
    );
};