import React from 'react';

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;

    return(
        <div className="project-details">
            <div className="card">
                <span className="card-title"> Project Title - {id} </span>
                <p>hahahahhahahahahhahahahasaassa</p>
                <div className="authorProject">
                    <p>Posted by Kamil</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails