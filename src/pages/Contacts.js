// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './Pages.module.css';

const Contacts = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className={css.wrapperContacts}>
      <div className={css.bgWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
