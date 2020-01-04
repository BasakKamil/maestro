import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../Project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

export class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="DashboardCont">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                     <div className="col s12 m5 offset-m1">
                         <Notifications/>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        {collection: 'projects', orderBy:['createdAt','desc']},
        {collection: 'notification', limit: 6, orderBy:['time','desc']}
])
)(Dashboard) 
