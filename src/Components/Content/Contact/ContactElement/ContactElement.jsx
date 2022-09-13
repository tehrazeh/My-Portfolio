import s from './ContactElement.module.css'
const ContactElement = (props) => {
    return (
        <div className={s.contactContainer}>
            <img className={s.contactImage} alt='contact' src={require(`../Images/${props.contact.label.toLowerCase()}.png`)}/>
            <h3>{props.contact.description}</h3>
        </div>
    )
}

export default ContactElement