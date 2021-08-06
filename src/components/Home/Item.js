import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import item from '../../img/product.jpg';
import A from '../../img/A.jpg';
import B from '../../img/B.jpg';
import D from '../../img/D.jpg';
import E from '../../img/E.jpg';

function Item({ style }) {
    return (
        <section className={`${style["items-container"]}`}>
            <div className="container">
                <div className="row text-center">

                    <div className={`col-6 col-md-4`}>

                        <div className={`${style['item']}`}>

                            <div className={`${style["fav-btn"]}`}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </div>

                            <div className={`${style['img']}`}>
                                <img src={item} />
                            </div>

                            <div className={`${style['description']}`}>
                                <p>تيشيرت بوي فريند</p>
                            </div>

                            <div className={`${style['price']}`}>
                                <p>السعر: 45 د.ل</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-6 col-md-4`}>

                        <div className={`${style['item']}`}>

                            <div className={`${style["fav-btn"]}`}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </div>

                            <div className={`${style['img']}`}>
                                <img src={A} />
                            </div>

                            <div className={`${style['description']}`}>
                                <p>تيشيرت بوي فريند</p>
                            </div>

                            <div className={`${style['price']}`}>
                                <p>السعر: 45 د.ل</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-6 col-md-4`}>

                        <div className={`${style['item']}`}>

                            <div className={`${style["fav-btn"]}`}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </div>

                            <div className={`${style['img']}`}>
                                <img src={B} />
                            </div>

                            <div className={`${style['description']}`}>
                                <p>تيشيرت بوي فريند</p>
                            </div>

                            <div className={`${style['price']}`}>
                                <p>السعر: 45 د.ل</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-6 col-md-4`}>

                        <div className={`${style['item']}`}>

                            <div className={`${style["fav-btn"]}`}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </div>

                            <div className={`${style['img']}`}>
                                <img src={D} />
                            </div>

                            <div className={`${style['description']}`}>
                                <p>تي شيرت أبيض للرجال برقبة دائرية</p>
                            </div>

                            <div className={`${style['price']}`}>
                                <p>السعر: 54 د.ل</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-6 col-md-4`}>

                        <div className={`${style['item']}`}>

                            <div className={`${style["fav-btn"]}`}>
                                <FontAwesomeIcon icon={faHeart} size="lg" />
                            </div>

                            <div className={`${style['img']}`}>
                                <img src={E} />
                            </div>

                            <div className={`${style['description']}`}>
                                <p>حقيبة ظهر من نايك</p>
                            </div>

                            <div className={`${style['price']}`}>
                                <p>السعر: 240 د.ل</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Item;
