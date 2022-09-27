import ContactElement from "./ContactElement/ContactElement"
import React from "react"
import s from './Contact.module.css'
class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                { id: 1, label: 'Email', description: 'danilatolstoukhov@gmail.com' },
                { id: 2, label: 'Phone', description: '+1 (365)-228-64-92 (Email preferred)' },
                { id: 3, label: 'Address', description: 'Mississauga, ON. CA.' }
            ]

        }
    }
    render() {
        let contactBlocks = this.state.contacts.map(contact => {
            return <ContactElement key={contact.id} contact={contact} />
        })
        return (
            <div className={s.Contact}>
                <div className={s.ContactBlocks}>{contactBlocks}</div>
                <div className={s.ContactInfo}>
                    <h3>I have a legal permit to work in Canada.</h3>
                    <h3>I am willing to relocate Canada-wide if required.</h3>
                    <h3>I can work both remotely and visit an office daily.</h3>
                </div>
            </div>
        )
    }
}

export default Contact;