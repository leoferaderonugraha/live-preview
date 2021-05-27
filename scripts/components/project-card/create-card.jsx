function CreateCard(project) {
    ReactDOM.render(
        <div className="container">
            <div className="row">
                <CardBase
                    id={project.id}
                    totalImages={project.previewImages.length}
                    previewImages={project.previewImages}
                />
            </div>
        </div>
    
        , document.getElementById("card-base")
    );
};