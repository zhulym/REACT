// libraries
import React, { useState, useEffect } from 'react';
// components
import QuickButtons from './QuickButtons/index'
import Searching from './Searching/index'
import Images from './Images/index'
// api
import { getImages } from '../api/images';
// styles
import './App.css';

const App = () => {
    const initialSearchString = 'bmw';
    const [searchTerm, setSearchTerm] = useState(initialSearchString);
    const [imageData, setImageData] = useState([]);
    const [isClickQuickButton, setIsClickQuickButton] = useState(false);

    useEffect(async () => {
        try {
            const data = await getImages(searchTerm);
            const images = data.photos.photo;
            setImageData(images);
            setSearchTerm('');
        } catch (e) {
            console.error(e);
        }
    }, [isClickQuickButton])

    return (
        <div className="App">
            <div className="heading">
                <h1>SnapShot</h1>
            </div>
            <div className="search-wrapper">
                <Searching
                    searchTerm={searchTerm}
                    setImageDataCallBack={setImageData}
                    setSearchItemCallBack={setSearchTerm} />
                <QuickButtons
                    onClickCallBack={setSearchTerm}
                    setSearchItemCallBack={setSearchTerm}
                    setIsClickQuickButtonCallBack={setIsClickQuickButton}
                    isClickQuickButton={isClickQuickButton}
                />
            </div>
            <Images imageData={imageData} />
        </div>
    );
};

export default App;
