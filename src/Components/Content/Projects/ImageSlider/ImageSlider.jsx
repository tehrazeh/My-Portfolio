import { useState } from 'react';
import s from './ImageSlider.module.css';
import leftArrow from './sliderImages/leftArrow.png';
import rightArrow from './sliderImages/rightArrow.png';
import back from './sliderImages/back.png'
import { Link, useLocation } from 'react-router-dom'
const ImageSlider = (props) => {
    const propsLocation = useLocation()

    const images = propsLocation.state.images
    const imagesFolder = propsLocation.state.imagesFolder
    const [current, setCurrent] = useState(0)
    const length = images.length

    if (!Array.isArray(images) || length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className={s.slider}>
            <Link className={s.backLink} to='/projects'>
                    <img className={s.buttonImage} src={back} alt='go back'></img>
            </Link>
            
            <button className={s.leftButton} onClick={previousSlide}>
                <img className={s.buttonImage} src={leftArrow} alt='prev'></img>
            </button>
            <button className={s.rightButton} onClick={nextSlide}>
                <img className={s.buttonImage} src={rightArrow} alt='next'></img>
            </button>


            {images.map((image, index) => {
                return (
                    <div className={index === current ? s.activeSlide : s.slide} key={index}>
                        {index === current && (<img className={s.screenshot} src={require(`../${imagesFolder}/${image}.png`)}
                            alt='project screenshot' key={image} />)}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider