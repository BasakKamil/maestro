import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../Project/ProjectList';

export class Dashboard extends Component {
    render() {
        return (
            <div className="DashboardCont">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                     <div className="col s12 m5 offset-m1">
                         <Notifications/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Dashboard
