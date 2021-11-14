import React from 'react';
import Img from '../Images/logo.jpg'

function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">
                    <img src={Img} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    Waycool</a>

                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;