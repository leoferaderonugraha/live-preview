// ReactDOM.render(
//     <div>
//         <div className="container">
//             <div className="row">
//                 <carouselGallery
//                     previewImages={project["previewImages"]}
//                 />
//                 <ProjectWrapper
//                     project={project}
//                 />
//             </div>
//         </div>
//         <hr className="mt-5 mb-5" />
//         <div className="container">
//             <projectDescDetails
//                 description={project["description"]}
//                 address={project["address"]}
//                 mapImageUrl={project["mapImageUrl"]}
//             />
//         </div>
//     </div>,
function initReact(project) {
    ReactDOM.render(
        React.createElement("div", null,
            React.createElement("div",
                {
                    className: "container"
                },
                React.createElement("div",
                    {
                        className: "row"
                    },
                    React.createElement(carouselGallery, {
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
                React.createElement(projectDescDetails, {
                    description: project["description"],
                    address: project["address"],
                    mapImageUrl: project["mapImageUrl"]
                })
            )
        ),
        document.getElementById("root")
    );
}