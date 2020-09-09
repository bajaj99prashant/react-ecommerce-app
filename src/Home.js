import React from 'react';
import Product from './Product';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg" />
                <div className="home_row_wrapper">
                    <div className="home_row">
                        <Product id="1" title="Cracking the Coding Interview (Indian Edition)" price={360} image="https://m.media-amazon.com/images/I/41p1cRZGtaL._AC_SR250,230_.jpg" rating={5}/>
                        <Product id="3" title="US Polo Association Men's OTTO Leather Sneakers" price={2163} image="https://images-eu.ssl-images-amazon.com/images/I/41FKvPzvZ9L._AC_SY200_.jpg" rating={4}/>
                    </div>
                    <div className="home_row">
                        <Product id="2" title="Cracking the Coding Interview (Indian Edition)" price={360} image="https://m.media-amazon.com/images/I/41p1cRZGtaL._AC_SR250,230_.jpg" rating={5}/>
                        <Product id="4" title="US Polo Association Men's OTTO Leather Sneakers" price={2163} image="https://images-eu.ssl-images-amazon.com/images/I/41FKvPzvZ9L._AC_SY200_.jpg" rating={4}/>
                        <Product id="5" title="Cracking the Coding Interview (Indian Edition)" price={360} image="https://m.media-amazon.com/images/I/41p1cRZGtaL._AC_SR250,230_.jpg" rating={5}/>
                    </div>
                    <div className="home_row">
                    <Product id="6" title="US Polo Association Men's OTTO Leather Sneakers" price={2163} image="https://images-eu.ssl-images-amazon.com/images/I/41FKvPzvZ9L._AC_SY200_.jpg" rating={4}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
