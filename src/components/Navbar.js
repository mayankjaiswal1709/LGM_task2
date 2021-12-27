import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {

    return (

        <nav className="navdiv">

            <div className="navdata">

                <div className="Logo">

                    <h1>{props.title}</h1>

                </div>

                <div className="GetUserData">

                    <button className="getUbtn" onClick={props.handleClick} >
                        Get User
                    </button>


                </div>



            </div>

        </nav>

    )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,

}

Navbar.defaultProps = {
    title: 'Set title here',

}
