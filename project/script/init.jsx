function initReact(project) {
    ReactDOM.render(
        <div>
            <div className="container">
                <div className="row">
                    <CarouselGallery
                        previewImages={project["previewImages"]}
                    />
                    <CarouselGallery 
                        project={project}
                    />
                </div>
            </div>
            <hr className="mt-5 mb-5" />
            <div className="container">
                <ProjectDescDetails
                    description={project["description"]}
                    address={project["address"]}
                    mapImageUrl={project["mapImageUrl"]}
                />
            </div>
        </div>,
        document.getElementById("root")
    );
}