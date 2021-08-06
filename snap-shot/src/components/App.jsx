// libraries
import React, { useState, useEffect } from 'react';
// static
import QuickButtons from './QuickButtons/index'
import { getImages } from '../api/images';
// styles
import './App.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("bmw");
    const [imageData, setImageData] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        // debugger;// eslint-disable-line no-debugger
        try {
            const data = await getImages(searchTerm);
            const images = data.photos.photo;
            setImageData(images);
            setSearchTerm('');
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(async () => {
        try {
            const data = await getImages(searchTerm);
            const images = data.photos.photo;
            setImageData(images);
            setSearchTerm('');
        } catch (e) {
            console.error(e);
        }
    }, [searchTerm])

    // const handleClick = (event) => {
    //     setSearchTerm(event.target.innerHTML);
    // }

    return (
        <div className="App">
            <div className="heading">
                <h1>SnapShot</h1>
            </div>
            <div className="search-wrapper">
                <div className="search__input">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button className="search-submit" type="submit" onClick={handleSubmit}>Search<i className="fas fa-search"></i></button>
                </div>
                {/* <div className="search__default-links">
                    <ul className="search__default-container">
                        <li><a href="#" onClick={handleClick}>Ferrari</a></li>
                        <li><a href="#" onClick={handleClick}>Lamborghini</a></li>
                        <li><a href="#" onClick={handleClick}>Mercedes</a></li>
                        <li><a href="#" onClick={handleClick}>Maserati</a></li>
                    </ul>
                </div> */}
                <QuickButtons onClickCallBack={setSearchTerm} />
            </div>
            <div className="app-content">
                <ul className="image__card-wrap">
                    {imageData.map((item) => {
                        return <li key={item.id} className="image__card">
                            <img src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.owner} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;
