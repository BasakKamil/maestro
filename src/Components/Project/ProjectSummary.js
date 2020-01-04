import React from 'react';

const ProjectSummary = (props) => {
    const {project} = props;

    return(
        <div className="ProjectSummaryInfo">
            <div className="card project-summary">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>     
                <p> Projekt nr. {project.id}</p>   
            </div>
        </div>
    )
}

export default ProjectSummary