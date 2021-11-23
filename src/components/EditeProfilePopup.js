import React from "react";
import { CurrentUserContext } from "../cotexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditeProfilePopup(props) {

  const [name, setName] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  console.log(typeof name);
 console.log(typeof description);

  function handleChange(data) {
    setName(data.name);
    setDescription(data.about);
  }

  React.useEffect(() => {
    if(props.isOpen === true) {
      handleChange(currentUser);
    }
  }, [props.isOpen, currentUser]);

  console.log(name);
  return (
    <PopupWithForm id="#profile" name="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}>
      <input name="name" type="text" id="name" className="fields__input" value={name} minLength="2" maxLength="40" required onChange={handleChange} />
      <span id="name-error" className="fields__input-error"></span>
      <input name="about" type="text" id="about" className="fields__input" minLength="2" maxLength="200" required onChange={handleChange} value={description} />
      <span id="about-error" className="fields__input-error"></span>
    </PopupWithForm>
  );
}
