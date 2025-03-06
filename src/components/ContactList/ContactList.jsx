import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice";



const ContactList = () => {

    const filterContactList = useSelector(selectFilteredContacts);
    return (
        <ul className={s.contactsList}>
            {filterContactList.map(data => (
                    <Contact key={data.id} data={data} />
            ))}
        </ul>
    );
};

export default ContactList