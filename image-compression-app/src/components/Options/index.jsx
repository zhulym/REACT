// libraries
import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// static
// styles
import './Options.css'

const Options = () => {
  const [defaultImages, setDefaultImages] = useState({
    upload: 'https://user-images.githubusercontent.com/75386560/127773454-71dc5095-3694-4940-a4da-ee81c8d41243.png',
    compressed: 'https://user-images.githubusercontent.com/75386560/127773885-f7297dc5-38b4-48ec-93f7-c275f654f5d0.png'
  })
  const [inputUrl, setInputUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [compressedImage, setCompressedImage] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isUpload, setIsUpload] = useState(false);


  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    setImageName(imageFile.name);
    setInputUrl(URL.createObjectURL(imageFile));
    setIsUpload(true);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    try {
      const compressedImage = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedImage instanceof Blob); // true
      console.log(`compressedFile size ${compressedImage.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      setCompressedImage(compressedImage);

    } catch (error) {
      console.log(error);
    }
  }
  const handleCompressClick = () => {
    setOutputUrl(URL.createObjectURL(compressedImage));
    setIsClicked(true);
  }
  const handleDownloadClick = () => {
    window.open(outputUrl);
  }
  const handlePreviewClick = () => {
    window.open(outputUrl);
  }


  return (
    <div className="options">
      <p>Set options</p>
      <div className="options-container">
        <div className="options-item">
          <label className="image-label" htmlFor="image-size">Max size MB:</label>
          <input id="image-size" className="image-size" type="number" name="image-size" />
        </div>
        <div className="options-item">
          <label className="image-label" htmlFor="image-width">Max width or height:</label>
          <input id="image-width" className="image-width" type="number" name="image-width" />
        </div>
      </div>
      <div className="items-wrapper d-flex justify-content-between">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Download image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
        </Form.Group>
        {isClicked ? (<div className="parameters d-flex justify-content-between align-items-end">
          <p>Size before: <span className="parameters-value">1.00 mb</span></p>
          <p>Size after: <span className="parameters-value">1.00 mb</span></p>
          <span>
            <Button
              className="preview-btn"
              variant="success"
              onClick={() => handlePreviewClick()}
            >
              Preview
            </Button>
          </span>
        </div>
        ) : <></>}
      </div>

      <div className="images-wrapper d-flex justify-content-between align-items-center">
        {isUpload ? (
          <div className="preview">
            <img src={inputUrl} id="preview__image" width="500px" />
          </div>
        )
          : (
            <div className="preview">
              <img src={defaultImages.upload} id="preview__image" width="500px" />
            </div>
          )}

        <div className="buttons-wrapper">
          {imageName ? (
            <Button
              className="compressed-button"
              variant="primary"
              onClick={() => handleCompressClick()}
            >
              Compress
            </Button>
          )
            : (
              <>
              </>
            )}
          {isClicked ? (
            <a
              href={outputUrl}
              download={imageName}
              className="compressed-button btn btn-success line-height"
              variant="info"
              onClick={() => handleDownloadClick()}>Download
            </a>
          )
            : (
              <>
              </>
            )}
        </div>

        {outputUrl ? (
          <div className="preview">
            <img src={outputUrl} id="preview__image" width="500px" />
          </div>
        )
          : (
            <div className="preview">
              <img src={defaultImages.compressed} id="preview__image" width="500px" />
            </div>
          )}
      </div>
    </div >
  );
};

export default Options;