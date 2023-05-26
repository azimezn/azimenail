import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <>
            <div>Which door would you like to go through?</div>
            <ul>
                <li><Link to="/plainizzy">just plain izzy/azime</Link></li>
                <li><Link to="/webdeveloper">azime as a web developer</Link></li>
                <li><Link to="/teacherizzy">izzy as a teacher</Link></li>
                <li><Link to="/turkishazi">azi... Turkish?</Link></li>
            </ul>
        </>
    )
}

export default MainPage;