import pen from '../images/pen.svg';
import Vector from '../images/Vector.svg';

export default function Main() {

 function handleEditAvatarClick() {

 }
    return (
     <>
      <main className="content">
          <section className="profile">
           <div className="profile__avatar">
            <button type="button" className="profile__button-edite-avatar"></button>
           </div>
            <div className="profile__info">
              <h1 className="profile__nickname"></h1>
              <p className="profile__profession"></p>
              <button type="button" className="profile__button-edite">
                  <img src={pen} className="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля" />
              </button>
            </div>
            <button type="button" className="profile__button-add">
                <img src={Vector} className="profile__image-add" alt="Картинка с плюсиком" />
            </button>
          </section>
          <section className="elements"></section>
        </main>
     </>
    );
}
