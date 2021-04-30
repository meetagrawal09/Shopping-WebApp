import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img20/PLCC/udp/LandingPage_Desktop_Slot1_Background_PLCC_V1_NonPrime_Dots._CB420252906_.jpg" alt=""/>

            {/* products-> id,title,rating,image,price */}

            {/* we are passing values to the component here */}
            <div className="home__row">
                <Product
                    id="1"
                    title="New Apple Watch Series 6 (GPS, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
                    price={599}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAX2_VW_34FR+watch-44-alum-blue-cell-6s_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&.v=1599004950000,1601922300000"
                />

                <Product
                    id="12"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={1299}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-silver-select-202011_GEO_IN?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1613673922000"
                />

            </div>
            <div className="home__row">
                <Product
                    id="123"
                    title="OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)"
                    price={499}
                    rating={4}
                    image="https://static.digit.in/default/4f7f8b1973d7f2345d3e6df46222ead8ca181211.jpeg?tr=1200"
                />

                <Product
                    id="1232"
                    title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815ztYEEwYL._AC_SX342_.jpg"
                />

                <Product
                    id="12321"
                    title="boAt Rockerz 450 Pro Bluetooth On-Ear Headphone with Mic(Luscious Black)"
                    price={150}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg"
                />
                
            </div>
             <div className="home__row">
                <Product
                    id="123212"
                    title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV UA55TU8570UXXL (Black) (2020 Model)"
                    price={800}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91wKQnyG%2BLL._AC_SL1500_.jpg"
                />

            </div>
        </div>

        
    )
}

export default Home
