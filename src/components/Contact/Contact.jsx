import css from "./Contact.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";
import MyModalDelete from "../MyModalDelete/MyModalDelete";
import MyModalEdit from "../MyModalEdit/MyModalEdit";

export default function Contact({ data: { id, name, number } }) {
  // const dispatch = useDispatch();
  return (
    <div className={css.conteiner}>
      <div>
        <div className={css.wrapper}>
          <BsTelephoneFill />
          <p>{name}</p>
        </div>
        <div className={css.wrapper}>
          <FaUserAlt />
          <p>{number}</p>
        </div>
      </div>
      {/* <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button> */}
      <div className={css.wrapperModal}>
        <MyModalDelete contactId={id} />
        <MyModalEdit contactId={id} />
      </div>
    </div>
  );
}
