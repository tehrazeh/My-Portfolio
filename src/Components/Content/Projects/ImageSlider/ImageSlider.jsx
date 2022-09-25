import {useState} from 'react';
import s from './ImageSlider.module.css'
const ImageSlider = (props) => {

    const [current, setCurrent] = useState(0)
    const length = props.images.length

    if(!Array.isArray(props.images) || length <=0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className={s.slider}>
            <button className={s.leftButton} onClick={previousSlide}>previous</button>
            <button className={s.rightButton} onClick={nextSlide}>next</button>
            {props.images.map((image, index) => {
                return (
                    <div className={index === current ? s.activeSlide : s.slide} key={index}>
                        {index === current && (<img className={s.screenshot} src={require(`../${props.imagesFolder}/${image}.png`)} 
                        alt='project screenshot' key={image}/>)}                       
                    </div>                   
                )
            })}
        </section>
    )
}

export default ImageSlider