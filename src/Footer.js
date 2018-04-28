import React from 'react';

function Footer(){
    return(
        <div className="Section-6 container">
            <div className="row justify-content-center">
                <img className="img-fluid" src="#" alt="Facebook icon" />
                <img className="img-fluid" src="#" alt="Twitter icon" />
                <img className="img-fluid" src="#" alt="Instagram icon" />
            </div>
            <div className="row justify-content-center">
                <ul className="col-sm-sm-auto nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FAQS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Terms of Use</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Privacy Policy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hiring Now</a>
                </li>
                </ul>
            </div>
            <p className="text-center">&copy;MEALACQUIANTANCE, Inc.</p>
        </div>
    );
}

export default Footer;