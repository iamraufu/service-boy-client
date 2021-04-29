import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 bg-dark" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-success">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-success">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/dashboard" className="text-success">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-success">
                            <FontAwesomeIcon icon={faUsers} /> <span>Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-success">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Orders List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-success" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-success"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;