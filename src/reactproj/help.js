import "./style.css";
import { Link } from "react-router-dom";

function Help() {
    return (
        <>
            <section className="one">
                <nav className="navbar navbar-default">
                    <div className="container">

                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#mynavbar"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="mynavbar">

                            <ul className="nav navbar-nav">

                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/business">Business</Link>
                                </li>

                                <li>
                                    <Link to="/help">Help</Link>
                                </li>

                                <li>
                                    <Link to="/converter">
                                        Currency Converter
                                    </Link>
                                </li>

                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                            </ul>

                        </div>
                    </div>
                </nav>
            </section>

            <hr />

            <h1 className="sixteen">
                Recommended Currency Converter Articles
            </h1>

            <br />

            <h4 className="fifth">
                How do I convert currencies using GlobeCash?
            </h4>

            <br />
            <hr />

            <h4 className="fifth">
                How do I check the latest exchange rate?
            </h4>

            <br />
            <hr />

            <h4 className="fifth">
                How can I convert USD to INR and other currencies?
            </h4>

            <br />
            <hr />

            <h4 className="fifth">
                How do I select the currency I want to convert?
            </h4>

            <br />
            <hr />

            <h4 className="fifth">
                Why is my converted amount different from the expected amount?
            </h4>

            <br />
            <hr />

            <h1 className="sixteen">
                More ways to get help
            </h1>

            <hr />

            <div className="container">

                <div className="row">

                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img29.jpg"
                            alt="Currency Converter"
                            height="200"
                            className="img-responsive"
                        />

                        <h4>
                            Currency Converter Guide
                        </h4>

                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img30.webp"
                            alt="Exchange Rates"
                            className="img-responsive"
                        />

                        <h4>
                            Exchange Rates
                        </h4>

                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img31.webp"
                            alt="Currency Information"
                            className="img-responsive"
                        />

                        <h4>
                            Currency Information
                        </h4>

                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img32.webp"
                            alt="Conversion History"
                            className="img-responsive"
                        />

                        <h4>
                            Conversion History
                        </h4>

                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img33.webp"
                            alt="Technical Help"
                            className="img-responsive"
                        />

                        <h4>
                            Technical Help
                        </h4>

                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <img
                            src="image/img34.jpg"
                            alt="Business Currency Help"
                            className="img-responsive"
                        />

                        <h4>
                            Business Currency Help
                        </h4>

                    </div>

                </div>
            </div>


            <h1 className="eight">
                GlobeCash Currency Converter
            </h1>


            <div className="container">

                <div className="row">

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4 className="third">
                            Product
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4 className="third">
                            Resources
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4 className="third">
                            Company and Terms
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Converter
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Exchange Rates
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Company Information
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Tools
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            International Currencies
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            News and Updates
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Calculator
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Codes
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Security
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            USD Converter
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            INR Converter
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Support
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4 className="third">
                            Personal
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Rate Alerts
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Careers
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Conversion
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Money Transfer Information
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Exchange Rate Information
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Amount Converter
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Available Currencies
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Our Mission
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Travel Currency
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Currency Reviews
                        </h4>
                    </div>

                </div>
            </div>


            <hr />


            <div className="container">

                <div className="row">

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Legal
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Privacy Policy
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Cookie Policy
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Terms and Conditions
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Complaints
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Country Information
                        </h4>
                    </div>


                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Modern Statement
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Accessibility
                        </h4>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-6">
                        <h4>
                            Intellectual Property
                        </h4>
                    </div>

                </div>
            </div>


            <div className="container">

                <div className="row">

                    <div className="col-md-4 col-sm-4 col-xs-6">

                        <h4 className="third">
                            © GlobeCash 2026
                        </h4>

                    </div>

                </div>
            </div>


            <h4 className="fourth">
                GlobeCash provides a simple and convenient currency
                conversion service that helps users understand the value
                of their money across different currencies.
            </h4>


            <h4 className="fourth">
                GlobeCash Currency Converter allows users to select
                currencies, enter an amount and view the converted value
                quickly and easily. Exchange rates may change based on
                current market conditions.
            </h4>

        </>
    );
}

export default Help;