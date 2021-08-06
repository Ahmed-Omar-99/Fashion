import Header from './Home/Header';
import Slider from './Home/Slider';
import Item from './Home/Item';

import style from './Home.module.css';

function Home() {
    return (
        <div>
            <Header style={style} />
            <Slider style={style} />
            <Item style={style} />
        </div>
    );
}

export default Home;
