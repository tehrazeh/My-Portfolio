import diplomaImage from './Images/diploma.png'
import s from './Diploma.module.css'
const Diploma = (props) => {
    return (
        <div className={s.diplomaContainer}>
            <div className={s.diplomaBlock}>
                <div>
                    <h3>Graduated: April, 2022</h3>
                </div>
                <div>
                    <h3>GPA: 3.87/4 (Honors)</h3>
                </div>
                
            </div>

            <img className={s.diplomaImage} alt='diploma' src={diplomaImage}/>
        </div>
    )
}

export default Diploma;