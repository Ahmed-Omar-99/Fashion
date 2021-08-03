import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ style }) {
    return (
        <div>
            {/* Start top header */}
            <div className={`container-fluid ${style["top-header"]}`}>
                <div className={`container ${style["container"]}`}>
                    <div className="row">

                        <div className="col-4 d-none d-lg-block">
                            <ul className={`navbar-nav ${style["social-link"]}`}>
                                <li className={`nav-item`}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </li>
                                <li className={`nav-item`}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                                <li className={`nav-item`}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-4">
                            <ul className={`navbar-nav  ${style["navbar-brand"]}`}>
                                <li className={`nav-item`}>
                                    <h1 className={`navbar-brand`}><span>S</span>tories</h1>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-4">
                            <ul className={`navbar-nav ${style["tools"]}`}>
                                <li className={`nav-item`}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </li>
                                <li className={`nav-item`}>
                                    <FontAwesomeIcon icon={faBars} />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
            {/* End top header */}
            {/* Start bottom header */}
            <div className={`container-fluid ${style["bottom-header"]}`}>
                <ul className={`navbar-nav`}>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
            {/* End bottom header */}
        </div>
    );
}

export default Header;
