const ProjectCategory = (props) => {
    return (
        <div className="row">
            <button className="btn rounded-pill semi-transparent-button">
                {props.category}
            </button>
        </div>
    );
};