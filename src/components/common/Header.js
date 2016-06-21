import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><IndexLink to="/" activeclassNameName="active">Home</IndexLink></li>
                        <li><Link to="/courses" activeclassNameName="active">Courses</Link></li>
                        <li><Link to="/survey" activeclassNameName="active">Survey</Link></li>
                        <li><Link to="/survey" activeclassNameName="active">Survey</Link></li>
                        <li><Link to="/about" activeclassNameName="active">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;

// <div classNameName="ps-navigation">
//     <div classNameName="ps-home">
//         <IndexLink to="/" activeclassNameName="active">Home</IndexLink>
//     </div>
//     <div classNameName="ps-course">
//         <Link to="/courses" activeclassNameName="active">Courses</Link>
//     </div>
//     <div classNameName="ps-about">
//         <Link to="/about" activeclassNameName="active">About</Link>
//     </div>
// </div>