function initReact(project) {
    ReactDOM.render(
        // wrapper
        React.createElement("div", null,
            React.createElement("div",
                {
                    className: "container"
                },
                React.createElement("div",
                    {
                        className: "row"
                    },
                    React.createElement(CarouselGallery, {
                            previewImages: project["previewImages"]
                    }),
                    React.createElement(ProjectWrapper, {
                            project: project
                    })
                )
            ),
            React.createElement("hr", {
                className: "mt-5 mb-5"
            }),
            React.createElement("div",
                {
                    className: "container"
                },
                React.createElement(ProjectDescDetails, {
                    description: project["description"],
                    address: project["address"],
                    mapImageUrl: project["mapImageUrl"]
                })
            )
        ),
        document.getElementById("root")
    );
}