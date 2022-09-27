import diplomaImage from './Images/diploma.png'
import s from './Diploma.module.css'
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
                <img className={s.diplomaImage} alt='diploma' src={diplomaImage}/>
            </div>
            
        </div>
    )
}

export default Diploma;