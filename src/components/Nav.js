import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'


// NavLink is similar to a Link, it also allows us the add classes for active links


class Nav extends Component {
    render() {
        return (
            <div>
                <span>
                    {/* Allows the app to look for matching routes that are created and render those components  */}
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/about">About</Link>
                </span>
            </div>
        )
    }
}

export default Nav