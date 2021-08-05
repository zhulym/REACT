// libraries
import React, { useState } from 'react';
// static
import { getImages } from '../api/images';
// styles
import './App.css';

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [imageData, setImageData] = useState(null);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const data = await getImages(searchTerm);
            setImageData(data);
            console.log(data);
            console.log(imageData);
        } catch (e) {
            console.error(e);
        }
    };

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
                <div className="search__default-links">
                    <ul className="search__default-container">
                        <li><a href="">Stethem</a></li>
                        <li><a href="">Van Damme</a></li>
                        <li><a href="">Svarceneger</a></li>
                        <li><a href="">Stalone</a></li>
                    </ul>
                </div>
            </div>
            <div className="app-content"></div>
        </div>
    );
};

export default App;
