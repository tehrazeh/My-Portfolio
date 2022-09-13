import diplomaImage from './Images/diploma.png'
import s from './Diploma.module.css'
const Diploma = (props) => {
    return (
        <div className={s.diplomaContainer}>
            <h2>
                Graduated: April, 2022 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                  
                GPA:3.87/4 (Honors)
            </h2>
            <img className={s.diplomaImage} alt='diploma' src={diplomaImage}/>
        </div>
    )
}

export default Diploma;