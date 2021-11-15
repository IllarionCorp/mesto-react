import React from "react";
import Trash from '../images/Trash.svg';


export default function Cards(props) {

 function handleClick() {
  props.onCardClick(props.card);
 }

    return (
        <>
        <div className="element">
          <img src={props.card.link} className="element__image" alt="Пользовательское изображение" onClick={handleClick} />
          <button id="" type="button" className="element__trash">
           <img src={Trash} className="element__trash-image"  alt="Иконка для удаления карточки" />
          </button>
          <div className="element__footer">
            <h2 className="element__place-name">{props.card.name}</h2>
            <div className="element__like-container">
             <button type="button" className="element__like"></button>
             <p className="element__like-counter">{props.card.likes.length}</p>
            </div>
          </div>
         </div>
        </>
    );
}
