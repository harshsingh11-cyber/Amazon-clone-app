import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
               
                <div className="home__row">
                    {/* 2 */}
                  
                    <Product
                        title="Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | 5000 mAh Battery"
                        price={10999.00}
                        image="https://m.media-amazon.com/images/I/41NFpBMSe4L._AC_SR400,600_.jpg"
                        rating={4} />

                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={2399.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={1999.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={989.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={59800.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={109400.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Gold Plated Jewellery Set for Women (Green)(rrsd7818s)"
                        price={385.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71iuaEwI58L._AC_UL320_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="BANGALORE REFINERY
                        24k (999) 20 gm Yellow Gold Bar"
                        price={119656.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61DHkMe6omL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="JivanOrganics A2 Ghee  100% Desi Ghee | Natural & Healthy, Non-GMO | Lab Tested (500ML)"
                        price={840.99}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41GKHXlDo1L._AC_SX184_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Sanjeevini KSRLPS Channapatna Wooden Christmas Crib Made by Karnataka SHG Women"
                        price={999.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61PP8RgqZBL._AC_UL320_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Sanjeevini KSRLPS Rosewood Inlay Village River Bank Evening Scenery- Wall Hanging"
                        price={1989.9}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81-v8kThJSL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Resin Handcrafted Ganesha Sitting Position Decorative Showpiece Idol Statue | God Idol - Pack of 1"
                        price={1999}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41sjZy0GxsL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
