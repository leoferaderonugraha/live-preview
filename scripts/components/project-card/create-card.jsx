function CreateCard(props) {
    ReactDOM.render(
        <div className="container">
            <div className="row">
                <CardBase
                    id={props.id}
                    totalImages={props.previewImages.length}
                    previewImages={props.previewImages}
                    projectName={props.projectName}
                />
            </div>
        </div>
    
        , document.getElementById("card-base")
    );
};