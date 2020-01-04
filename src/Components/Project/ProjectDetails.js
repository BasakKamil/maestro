import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const ProjectDetails = (props) => {

  const {project} = props;
  console.log(project);
 if(project){
    return(
     <div className="project-details">
     <div className="card">
     <span className="card-title"> Project Title {project.title}</span>

        <div className="authorProject">
    <p>Autor: {project.authorLastName}</p>
        </div>
     </div>
    </div>
    )
  } else {
    return(
     <div className="Loading">Loading...</div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
    
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)