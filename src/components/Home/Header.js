import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faSnapchatGhost, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faUser, faCartArrowDown, faArrowLeft, faPhoneAlt, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function Header({ style }) {

    const [login, setLogin] = useState('');

    return (
        <div>

            {/* Start Modal Search */}
            <div className={`modal fade ${style["modal-search"]}`} id="search-btn" tabindex="-1" aria-labelledby="search-btn" aria-hidden="true">
                <button type="submit" className={`btn ${style["back"]}`} data-bs-dismiss="modal">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form onSubmit={(event) => event.preventDefault()}>
                                <input className="form-control" type="search" placeholder="إبحث عن منتج" maxLength="100" />
                                <button type="submit" className={`btn`} onClick={(e) => alert("Search")}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </form>
                            <div className={`${style["quick-search"]}`}>
                                <ul>
                                    <li>رجال</li>
                                    <li>نساء</li>
                                    <li>أطفال</li>
                                    <li>أطفال</li>
                                    <li>إكسسوارات</li>
                                    <li>إكسسوارات رجالية</li>
                                    <li>حقائب</li>
                                    <li>أحذية</li>
                                    <li>أطفال</li>
                                    <li>إكسسوارات</li>
                                    <li>حقائب</li>
                                    <li>أحذية</li>
                                    <li>رجال</li>
                                    <li>نساء</li>
                                    <li>رجال</li>
                                    <li>نساء</li>
                                    <li>إكسسوارات</li>
                                    <li>حقائب</li>
                                    <li>أحذية</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Modal Search */}

            {/* Start Modal Account */}
            <div className={`modal fade ${style["modal-account"]}`} id="account-btn" tabindex="-1" aria-labelledby="account-btn" aria-hidden="true">
                <button type="submit" className={`btn ${style["back"]}`} data-bs-dismiss="modal">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            {login === '' ?
                                <form onSubmit={(event) => event.preventDefault()} className={`${style["login"]}`}>
                                    <label>
                                        <FontAwesomeIcon icon={faPhoneAlt} className={`${style["icon"]}`} />
                                        <p>+218</p>
                                    </label>
                                    <input className="form-control" type="text" placeholder="رقم الهاتف" maxLength="100" />
                                    <button type="submit" className={`btn`} onClick={(e) => setLogin('091-7633-488')}>تسجيل</button>
                                </form>
                                :
                                <div className={`${style["info"]}`}>
                                    <p className={`${style["title"]}`}>معلومات الحساب</p>
                                    <h2>{login}</h2>
                                    <button type="submit" className={`btn btn-danger`} onClick={(e) => setLogin('')}>تسجيل الخروج</button>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* Start Modal Account */}

            {/* Start top header */}
            <div className={`container-fluid ${style["top-header"]}`}>
                <div className={`container-fluid ${style["fixed-header"]}`}>
                    <div className={`${style["container"]}`}>
                        <div className="row">

                            <div className="col-6 col-lg-4">
                                <ul className={`navbar-nav ${style["tools"]}`}>
                                    <li className={`nav-item d-block d-md-none`}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </li>
                                    <li className={`nav-item d-none d-md-block`} data-bs-toggle="modal" data-bs-target="#search-btn">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </li>
                                    <li className={`nav-item`} data-bs-toggle="modal" data-bs-target="#account-btn">
                                        <FontAwesomeIcon icon={faUser} className={`${login != '' ? style["loggined"] : null}`} />
                                    </li>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </li>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-4">
                                <ul className={`navbar-nav  ${style["navbar-brand"]}`}>
                                    <li className={`nav-item`}>
                                        <h1 className={`navbar-brand`}><span>س</span>توريز</h1>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 d-none d-lg-block">
                                <ul className={`navbar-nav ${style["social-link"]}`}>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </li>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faSnapchatGhost} />
                                    </li>
                                    <li className={`nav-item`}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {/* End top header */}

            {/* Start bottom header */}
            <div className={`container ${style["bottom-header"]} d-none d-md-block`}>
                <ul className={`navbar-nav`}>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">نساء</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">أطفال</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">ملحقات</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">تجميل</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href="#" className="nav-link">رجال</a>
                    </li>
                </ul>
            </div>
            {/* End bottom header */}

        </div>
    );
}

export default Header;
