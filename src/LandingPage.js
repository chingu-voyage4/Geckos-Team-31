import React from 'react';

function LandingPage(props){
    return(
        <div id="landing-page">
            {/* // <!---Header & Nav bar --> */}
        <div className="header container-fluid">
        <div className="row d-flex justify-content-between navbar" role="navigation">
            <div className="col-4">
            <div className="row d-flex">
                <div className="col-2 icon">
                <img className="img-fluid" src="https://s26.postimg.org/yl58a3aft/MP_Logo1.jpg" alt="MealPal logo" />
                </div>
                <div className="col-2">
                <h1>MealPaL</h1>
                </div>
            </div>
            </div>
            <div className="col-3">
            <button id="login-button" onClick={()=>props.changePage('login')}>LogIn</button>
            <button id="register-button" onClick={()=>props.changePage('register')}>Register</button>
            </div>
        </div>

        {/* <!------------Main section----------> */}
        <div className="row d-flex">
            <div className="col">
            <h2>Meals For
                <br/>Less Than $6</h2>
            <p>Join Today</p>
            <form action="#" method="post">
                <div>
                <label htmlFor="mail"></label>
                <input type="email" id="mail" name="user_mail" placeholder="E-mail" />
                </div>
                <div>
                <label htmlFor="Zip Code"></label>
                <input type="text" name="zip-code" id="zip-code" pattern="[0-9] {5}" placeholder="Zip Code" />
                </div>
                <div>
                <button type="submit">Register</button>
                </div>
            </form>
            </div>

            {/* <!--- Sliding Images for the Home page ----> */}
            <div className="col">
            <div id="carousel-1" className="carousel-1 slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="#" alt="First slide" />
                    <div className="caption d-none d-md-block">
                    <h4>First Image Caption</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Second slide" />
                    <div className="caption d-none d-md-block">
                    <h4>Second Image Caption</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Third-slide" />
                    <div className="caption d-none d-md-block">
                    <h4>Third Image Caption</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* <!-----How MealPal Works Section----> */}

        <div className="section2 container">
        <h2 className="text-center">The Way MealPal Works</h2>
        <div id="carousel-2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="#" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="#" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="#" alt="Third slide" />
            </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="row">
            <div className="col">
            <img className="img-fluid" src="#" alt="Buddy Pal" />
            </div>
            <div className="col text-center">
            <h4>HI, I'M PAL, YOUR LUNCH BUDDY
                <span className="lobster-font">and now dinner, too</span>
            </h4>
            <p>I'll learn your preferences and make meal time the best time of your day!</p>
            </div>
        </div>
        </div>

        {/* <!--- Map Section --> */}

        <div className="Section3 Map container">
        <div className="row">
            <div className="col">
            <h1 className="text-center">Find a MealPal place In Your Area</h1>
            <div className="embed-responsive embed-responsive-4by3">
                <iframe className="embed-responsive-item" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpTvG15DL1IkRd8S0KlBVNTI&key=AIzaSyAPUxIyh09qeFNMncQF06IzVC16JPm3-x8"
                allowFullScreen></iframe>
            </div>
            </div>
        </div>
        </div>

        {/* <!----Section 4, Carousel --> */}

        <div className="Section4 container">
        <div className="row">
            <div className="col">
            <img className="img-fluid" src="#" alt="MealPal robot icon" />
            <div id="carousel-3 Controls" className="carousel-slide" data-ride="carousel">
                <ul className="carousel-inner">
                <li className="carousel-item active">
                    <img className="d-block w-100" src="#" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Fourth slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Fifth slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Sixth slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                <li className="carousel-item">
                    <img className="d-block w-100" src="#" alt="Seventh slide" />
                    <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                    <p>........</p>
                    </div>
                </li>
                </ul>
                <a className="carousel-control-prev" href="carousel-3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="carousel-3" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>
        </div>

        {/* <!--- Section 5, Meal Plan --> */}
        <div className="Section5 container">
        <h3 className="text-center">Meal Plans</h3>
        <p className="text-center">Meals are available on everyday, excluding national holidays.
            <br/>Meal plans are monthly and automatically renewable.
        </p>
        <div className="row justify-content-center">
            <div className="col-3">
            <div className="card text-center">
                <div className="card-body">
                <h5 className="card-title">Lunch</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdwon-toggle" type="button" id="lunchNumberButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">No. Of Meals</button>
                    <div className="dropdown-menu" aria-labelledby="lunchNumberButton">
                    <a className="dropdown-item" href="#">15</a>
                    <a className="dropdown-item" href="#">20</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">21</a>
                    <a className="dropdown-item" href="#">22</a>
                    <a className="dropdown-item" href="#">23</a>
                    <a className="dropdown-item" href="#">24</a>
                    <a className="dropdown-item" href="#">25</a>
                    </div>
                </div>
                <p className="card-text">$6.49/Meal</p>
                <a href="#" className="btn btn-primary">Buy This Plan</a>
                </div>
            </div>
            </div>
            <div className="col-3">
            <div className="card text-center">
                <div className="card-body">
                <h5 className="card-title">Dinner</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdwon-toggle" type="button" id="dinnerNumberButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">No. Of Meals</button>
                    <div className="dropdown-menu" aria-labelledby="dinnerNumberButton">
                    <a className="dropdown-item" href="#">15</a>
                    <a className="dropdown-item" href="#">20</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">21</a>
                    <a className="dropdown-item" href="#">22</a>
                    <a className="dropdown-item" href="#">23</a>
                    <a className="dropdown-item" href="#">24</a>
                    <a className="dropdown-item" href="#">25</a>
                    </div>
                </div>
                <p className="card-text">$6.99/Meal</p>
                <a href="#" className="btn btn-primary">Buy This Plan</a>
                </div>
            </div>
            </div>
        </div>
        <p className="text-muted text-center">Tax or any other fees as per the local regulations are not included in the meal price.</p>
        </div>

        {/* <!--- Section 6, Footer --> */}
        <div className="Section-6 container">
        <div className="row justify-content-center">
            <img className="img-fluid" src="#" alt="Facebook icon" />
            <img className="img-fluid" src="#" alt="Twitter icon" />
            <img className="img-fluid" src="#" alt="Instagram icon" />
        </div>
        <div className="row justify-content-center">
            <ul className="col-sm-auto nav">
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
        <p className="text-center">&copy;MealPal, Inc.</p>
        </div>
        </div>
    );
}

export default LandingPage;