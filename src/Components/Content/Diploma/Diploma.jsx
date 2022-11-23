import diplomaImage from './Images/diploma.png'
import diplomaPreview from './Images/diploma-preview.jpg'
import s from './Diploma.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Diploma = (props) => {
    return (
        <div className={s.diplomaContainer}>
            <div className={s.diplomaBlock}>
                <div>
                    <p>Graduated: April, 2022</p>
                </div>
                <div>
                    <p>GPA: 3.87/4 (Honors)</p>
                </div>
            </div>
            <div className={s.diplomaImageContainer}>
                <div className={s.placeholderRatio}>
                    <LazyLoadImage className={s.diplomaImage}
                        src={diplomaImage}
                        alt='skill pic' loading="lazy" effect="blur"
                        placeholderSrc={diplomaPreview} />
                </div>
            </div>

        </div>
    )
}

export default Diploma;