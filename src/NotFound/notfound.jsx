import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class NotFoundPage extends Component{
    render = () => {
        return(
            <div className="notfound_container">
                <h1>NOT FOUND!! Please check you route!</h1>
                <Link to='/'>Go on homepage</Link>
            </div>
        )
    }
}