<style lang="postcss">
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
///////////////////////////////////////////////////////////

.authorization__wrapper {
  height: 100vh;
  background: url("../images/content/bg/Mountain-Baloon.jpg") no-repeat center
    center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.8);
  }
}

.authorization {
  padding: 60px 75px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  z-index: 5;
  position: relative;
  @include phones {
    padding: 260px 23px;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.authorization__title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  @include phones {
    font-size: 30px;
  }
}

.form__authorization-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form__author-title {
  font-weight: 600;
  opacity: 0.4;
  padding-left: 45px;
}

.form__input-hover {
  position: relative;
}

.form__author-input {
  width: 410px;
  font-size: 18px;
  font-weight: bold;
  padding: 25px 25px 25px 45px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 35px;
  @include phones {
    width: auto;
  }
}

.form__icon {
  position: absolute;
  top: 20px;
  left: 0;
}

.form__login-icon {
  width: 30px;
  height: 30px;
  background: svg-load(
      "Avatar.svg",
      fill= "grey",
      width= "25px",
      height= "25px"
    )
    center center no-repeat;
}

.form__password-icon {
  width: 30px;
  height: 30px;
  background: svg-load(
      "key-open.svg",
      fill= "grey",
      width= "25px",
      height= "25px"
    )
    center center no-repeat;
}

.form__authorization-button {
  text-align: center;
}

.form__author-button {
  padding: 30px 100px;
  background-image: linear-gradient(
    to right,
    rgba(#9100ef, 1),
    rgba(#5500f2, 1)
  );
  border-radius: 40px 5px 40px 5px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}

.authorization__button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 31px;
  height: 31px;
  background: svg-load(
      "Cross.svg",
      fill= "black",
      width= "20px",
      height= "20px"
    )
    center center no-repeat;
}
//////////////////////////////////////////////

.header__panel {
  background: #3f3f5e;
}

.header__user-panel {
  display: flex;
  padding: 16px 0 18px 0;
  justify-content: space-between;
  @include phones {
    flex-direction: column;
  }
}

.header__left {
  display: flex;
  align-items: center;
}

.header__user {
  display: flex;
  align-items: center;
  margin-right: 25px;
}

.header__user-avatar {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}

.header__user-avatar-img {
  border-radius: 50%;
}

.header__user-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  @include phones {
    font-size: 16px;
    margin: -23px 0 0 0;
  }
}

.header__text {
  font-size: 14px;
  opacity: 0.5;
  @include phones {
    display: none;
  }
}

.header__right {
  display: flex;
  align-items: center;
  @include phones {
    margin: -22px 0 0 64px;
  }
}

.header__exit {
  opacity: 0.6;
}
/////////////////////////////////

.nav-admin {
  color: #000;
}

.nav__list {
  display: flex;
}

.nav__item {
  padding: 30px;
  border-bottom: 3px solid transparent;
  &:hover {
    font-weight: 600;
    border-bottom: 3px solid #383bcf;
    .nav__link {
      color: #383bcf;
    }
  }
  @include phones {
    font-size: 14px;
    padding: 20px;
  }
}
//////////////////////////////////

.general-section {
  background: url("../images/content/bg/MountainBaloon.jpg") no-repeat center
    top / cover;
  color: #000;
  /* z-index: -10; */
}

.section__title {
  display: flex;
  padding: 60px 0;
  @include phones {
    flex-direction: column;
    padding: 35px 0;
  }
}

.about-me__title {
  margin-right: 55px;
  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.title {
  font-size: 21px;
  font-weight: bold;
  @include phones {
    font-size: 18px;
  }
}

.add-group {
  display: flex;
  text-decoration: none;
  @include phones {
    font-size: 16px;
  }
}

.add-group__icon {
  width: 31px;
  height: 31px;
  margin-right: 10px;
  background: svg-load("plus.svg", fill= "blue", width= "22px", height= "22px")
    center center no-repeat;
}

.add-group__text {
  font-weight: bold;
  margin-top: 5px;
  color: #383bcf;
}
//////////////////////////////////

.group__list {
  display: flex;
  flex-wrap: wrap;
  @include phones {
    width: 100vw;
    transform: translateX(-7.5%);
  }
}

.group__item {
  margin: 0 30px 30px 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 10px 0 #ccc;
  min-height: 390px;
  @include desktopSuperHd {
    min-width: 590px;
  }
  @include desktopHd {
    min-width: 540px;
  }
  @include desktop {
    min-width: 577px;
  }
  @include tablets {
    min-width: 385px;
  }
  @include phones {
    padding: 0;
    margin: 0 0 30px 0;
    width: 100%;
  }
}

.form__group {
  height: 100%;
}

.form__row {
  position: relative;
  height: 100%;
}

.form__title {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.form__input-title {
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 18px;
  font-weight: 600;
  @include phones {
    font-size: 16px;
  }
}

.form__title-icon {
  display: flex;
  align-items: center;
  @include phones {
    margin-right: 15px;
  }
}

.form__title-edit {
  width: 20px;
  height: 20px;
  background: svg-load(
      "Pencil.svg",
      fill= "grey",
      width= "13px",
      height= "13px"
    )
    center center no-repeat;
  margin-right: 40px;
  @include desktopHd {
    margin-right: 30px;
  }
  @include desktop {
    margin-right: 33px;
  }
  @include tablets {
    margin-right: 0;
  }
}

.form__title-icon-check-mark {
  width: 20px;
  height: 20px;
  margin-right: 7px;
  background: svg-load("Tick.svg", fill= "green", width= "12px", height= "12px")
    center center no-repeat;
}

.form__title-icon-close {
  width: 20px;
  height: 20px;
  background: svg-load("Cross.svg", fill= "red", width= "10px", height= "10px")
    center center no-repeat;
}

.form__icon-edit {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: svg-load(
      "Pencil.svg",
      fill= "grey",
      width= "13px",
      height= "13px"
    )
    center center no-repeat;
}

.form__icon-delete {
  width: 20px;
  height: 20px;
  background: svg-load("Trash.svg", fill= "grey", width= "13px", height= "13px")
    center center no-repeat;
}

.form-divider {
  margin: 0 0 25px 0;
}

.form__content {
  padding: 0 0 60px 10px;
}

.form__skill-wrapper {
  display: flex;
  margin-bottom: 15px;
  justify-content: space-around;
  
}

.input {
  border: none;
}

.form__skill-name {
  margin-right: 130px;
  @include tablets {
    margin-right: 20px;
    width: 155px;
  }
}

.form__skill-value-wrapper {
  margin-right: 35px;
  position: relative;
  &:after {
    content: "%";
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 40px;
  }
  @include tablets {
    margin-right: 20px;
  }
  @include phones {
    margin-right: 10px;
  }
}

.form__skill-buttons {
  @include phones {
    margin-right: 15px;
  }
}

.form__new-skill {
  display: flex;
  justify-content: flex-end;
  margin-right: 17px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.form__new-skill-name {
  border-bottom: 1px solid #000;
  padding: 0 0 0 15px;
  margin-right: 8px;
  @include tablets {
    width: 145px;
  }
}

.form__new-skill-value-wrapper {
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-right: 20px;
  &:after {
    content: "%";
    position: absolute;
    top: 4px;
    right: 6px;
  }
}

.form__new-skill-value {
  border-bottom: 1px solid #000;
  padding: 0 0 10px 10px;
}

.form__new-skill-add {
  width: 40px;
  height: 35px;
  background: svg-load("plus.svg", fill= "blue", width= "30px", height= "30px")
    center center no-repeat;
}
////////////////////////////////////////////////////////

.work__editing-block {
  box-shadow: 0 0 10px 0 #ccc;
  padding: 20px;
  background: #fff;
  margin-bottom: 30px;
  margin-right: 33px;
  @include phones {
    padding: 0;
    width: 100vw;
    transform: translateX(-7.5%);
  }
}

.min-title {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  @include phones {
    font-size: 16px;
  }
}

.divider {
  margin-bottom: 30px;
}

.work__content {
  padding: 10px;
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 10px 130px;
  }
  @include phones {
    padding: 20px;
  }
}

.work__left {
  margin-right: 30px;
  @include tablets {
    margin-right: 0;
    padding-left: 17px;
    margin-bottom: 50px;
  }
  @include phones {
    padding: 0;
    display: flex;
    justify-content: center;
  }
}

.work__picture {
  width: 495px;
  height: 275px;
  background: #cad8ee;
  border: 1px dotted #000;
  display: flex;
  align-items: center;
  justify-content: center;
  @include phones {
    width: 280px;
    height: 155px;
  }
}

.work__picture-info {
  padding: 0 130px;
  text-align: center;
  @include phones {
    padding: 0;
  }
}

.work__picture-text {
  margin-bottom: 25px;
  line-height: 1.9;
  font-weight: 600;
  opacity: 0.6;
}

.work__button {
  padding: 18px 40px;
  background-image: linear-gradient(
    to right,
    rgba(#1757e1, 1),
    rgba(#3f35cb, 1)
  );
  border-radius: 30px;
  color: #fff;
}

.work__button-text {
  text-transform: uppercase;
  font-weight: bold;
}

.work__right {
  width: 100%;
}

.work__form-row {
  display: flex;
  flex-direction: column;
}

.work__form-textarea {
  padding: 10px;
  min-height: 145px;
}

.work__add-tag {
  padding-bottom: 35px;
}

.work__form-buttons {
  display: flex;
  justify-content: flex-end;
  @include tablets {
    justify-content: center;
  }
}
///////////////////////////////////////////////

.form__label {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
}

.form__label-title {
  padding: 0;
  font-weight: 600;
  opacity: 0.5;
  margin-bottom: 18px;
}

.form__input {
  padding: 10px 0;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid #000;
}

.form__button-cancel {
  font-weight: 600;
  color: blue;
  margin-right: 20px;
}

.form__button-save {
  padding: 22px 40px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgba(#1757e1, 1),
    rgba(#3f35cb, 1)
  );
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
}
///////////////////////////////////////////////

.button-add {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(#1757e1, 1),
    rgba(#3f35cb, 1)
  );
}

.button-add__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include phones {
    flex-direction: initial;
    margin-left: 20px;
  }
}

.button-add__icon {
  width: 150px;
  height: 150px;
  background: svg-load(
      "big-plus.svg",
      fill= "white",
      width= "140px",
      height= "140px"
    )
    center center no-repeat;
  margin-bottom: 30px;
  @include phones {
    margin-bottom: 0;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    background: svg-load(
        "big-plus.svg",
        fill= "white",
        width= "50px",
        height= "50px"
      )
      center center no-repeat;
  }
}

.button-add__text {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 0 95px;
  line-height: 1.6;
  @include phones {
    font-size: 16px;
    padding: 0;
  }
}
///////////////////////////////////////

.buttons__edit-del {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
}

.buttons__edit-del-btn {
  display: flex;
}

.buttons__btn-text {
  font-weight: 600;
  opacity: 0.5;
  margin-right: 3px;
}

.buttons__btn-edit-icon {
  width: 20px;
  height: 20px;
  background: svg-load(
      "Pencil.svg",
      fill= "blue",
      width= "15px",
      height= "15px"
    )
    center center no-repeat;
}

.buttons__btn-del-icon {
  width: 20px;
  height: 20px;
  background: svg-load("Cross.svg", fill= "red", width= "13px", height= "13px")
    center center no-repeat;
}
////////////////////////////////////////

.works__wrapper {
  @include phones {
    width: 100vw;
    transform: translateX(-7.5%);
  }
}

.works__list {
  display: flex;
  flex-wrap: wrap;
}

.works__item {
  margin: 0 30px 30px 0;
  min-height: 555px;
  box-shadow: 0 0 10px 0 #ccc;
  background: #fff;
  @include desktopSuperHd {
    width: 415px;
  }
  @include desktopHd {
    width: 397px;
  }
  @include desktop {
    width: 374px;
  }
  @include tablets {
    width: 385px;
  }
  @include phones {
    margin: 0 0 30px 0;
    width: 100%;
  }
}

.works__item-mobile {
  @include phones {
    min-height: 110px;
    width: 100%;
  }
}

.works__picture {
  position: relative;
}

.works__tags-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}

.works__tag {
  padding: 10px 20px;
  background: #fff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin: 0 10px 10px 0;
}

.works__content-wrapper {
  padding: 30px 25px 45px 25px;
  position: relative;
}

.works__content-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.works__content {
  margin-bottom: 40px;
}

.works__content-text {
  font-weight: 600;
  opacity: 0.7;
  margin-bottom: 20px;
  line-height: 1.7;
}
///////////////////////////////////////////////////////////////

.reviews__new-block {
  box-shadow: 0 0 10px 0 #ccc;
  padding: 20px;
  background: #fff;
  margin-bottom: 30px;
  margin-right: 33px;
  @include phones {
    width: 100vw;
    transform: translateX(-7.5%);
  }
}

.reviews__content {
  display: flex;
  @include phones {
    flex-direction: column;
  }
}

.reviews__left {
  width: 225px;
  margin-right: 30px;
  @include phones {
    width: 100%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
  }
}

.reviews__picture {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reviews__picture-add {
  background: #dee4ed;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.reviews__picture-icon {
  width: 150px;
  height: 150px;
  background: svg-load(
      "User.svg",
      fill= "white",
      width= "110px",
      height= "110px"
    )
    center center no-repeat;
}

.reviews__picture-text {
  font-weight: 600;
  color: blue;
}

.reviews__right {
  width: 100%;
  padding-right: 22%;
  @include tablets {
    padding-right: 0;
  }
}

.reviews__form-row {
  display: flex;
  @include tablets {
    flex-direction: column;
  }
}

.reviews__form-input {
  @include tablets {
    width: 290px;
  }
}

.reviews__form-label_name {
  margin-right: 30px;
}

.reviews__form-textarea {
  min-height: 115px;
}

.reviews__form-buttons {
  display: flex;
  justify-content: flex-end;
}
//////////////////////////////////////////////////////////

.reviews__list {
  display: flex;
  flex-wrap: wrap;
  @include phones {
    width: 100vw;
    transform: translateX(-7.5%);
  }
}

.reviews__item {
  min-height: 380px;
  width: 374px;
  margin: 0 30px 30px 0;
  box-shadow: 0 0 10px 0 #ccc;
  background: #fff;
  @include desktopSuperHd {
    width: 415px;
  }
  @include desktopHd {
    width: 397px;
  }
  @include desktop {
    width: 374px;
  }
  @include tablets {
    width: 385px;
  }
  @include phones {
    width: 100%;
    margin: 0 0 30px 0;
  }
}

.reviews__item-mobile {
  @include phones {
    min-height: 110px;
  }
}

.reviews__row {
  padding: 20px;
  height: 100%;
  position: relative;
}

.reviews__person {
  display: flex;
  padding: 10px;
}

.reviews__avatar {
  margin-right: 20px;
}

.reviews__avatar-img {
  width: 50px;
  height: 50px;
}

.reviews__author-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.reviews__author-occupation {
  font-weight: 600;
  opacity: 0.6;
}

.reviews-divider {
  margin: 20px 0;
}

.reviews__content {
  padding: 10px 10px 30px 10px;
}

.reviews__text {
  font-weight: 600;
  line-height: 1.7;
  opacity: 0.7;
}
</style>


<template lang="pug">

  .maincontent-admin
    .authorization__wrapper
      .authorization
        .authorization__title
          .authorization__title-text Авторизация
        form.form__authorization
          .form__authorization-row
            label.form__authorization-label.form__label-login
              span.form__author-title.form__login-title Логин
              .form__input-hover
                input.form__author-input(type="text" name="name")
                .form__login-icon.form__icon
            label.form__authorization-label.form__label-password
              span.form__author-title.form__password-title Пароль
              .form__input-hover
                input.form__author-input(type="password" name="password")
                .form__password-icon.form__icon
          .form__authorization-button
            button(type="button").form__author-button Отправить
        button(type="button").authorization__button
          .authorization__close
    header.header__panel
      .container
        .header__user-panel
          .header__left
            .header__user
              .header__user-avatar
                img(src="../images/content/ya.jpg").header__user-avatar-img
              .header__user-name Азамат Арслангараев
            .header__text Панель администрирования
          .header__right
            a(href="#").header__exit Выйти
    nav.nav-admin
      .container
        - var menu = ['Обо мне', 'Работы', 'Отзывы']
          ul.nav__list
            each item in menu
              li.nav__item
                a.nav__link #{item}
    .general-section
      router-about
      section.works-block
        .container
          .section__title
            h2.works__title.title Блок «Работы»
          .work__editing-block
            h4.work__editing-title.min-title Редактирование работы
            hr.work-divider.divider
            .work__content
              .work__left
                .work__picture
                  .work__picture-info
                    .work__picture-text Перетащите или загрузите для загрузки изображения
                    button(type='button').work__button
                      .work__button-text Загрузить
              .work__right
                form.work__form.form
                  .work__form-row
                    label.form__label.work__form-label_name
                      span.form__label-title Название
                      input.work__form-input.form__input(type="text" name="name")
                    label.form__label.work__form-label_email
                      span.form__label-title Ссылка
                      input.work__form-input.form__input(type="text" name="name")
                  .work__form-row
                    label.form__label
                      span.form__label-title Описание
                      textarea.work__form-textarea(type="textarea" name="message")
                  .work__form-row.work__add-tag
                    label.form__label.work__form-label_name
                      span.form__label-title Добавление тэга
                      input.work__form-input.form__input(type="text" name="name")
                  .work__form-buttons
                    button(type='button').work__form-button.form__button-cancel Отмена
                    button(type='button').work__form-button.form__button-save Сохранить
          .works__wrapper
            ul.works__list
              li.works__item.works__item-mobile
                button(type='button').button-add
                  .button-add__content
                    .button-add__icon
                    p.button-add__text Добавить работу
              li.works__item
                .works__picture
                  img(src="../images/content/1.jpg").works__img
                  .works__tags-wrapper
                    .works__tag HTML5
                    .works__tag CSS3
                    .works__tag JavaScript
                .works__content-wrapper
                  h4.works__content-title Сайт школы образования
                  .works__content
                    .works__content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="http://loftschool.ru").works__content-link Сайт школы
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.works__item
                .works__picture
                  img(src="../images/content/1.jpg").works__img
                  .works__tags-wrapper
                    .works__tag HTML5
                    .works__tag CSS3
                    .works__tag JavaScript
                .works__content-wrapper
                  h4.works__content-title Сайт школы образования
                  .works__content
                    .works__content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="http://loftschool.ru").works__content-link Сайт школы
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.works__item
                .works__picture
                  img(src="../images/content/1.jpg").works__img
                  .works__tags-wrapper
                    .works__tag HTML5
                    .works__tag CSS3
                    .works__tag JavaScript
                .works__content-wrapper
                  h4.works__content-title Сайт школы образования
                  .works__content
                    .works__content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="http://loftschool.ru").works__content-link Сайт школы
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.works__item
                .works__picture
                  img(src="../images/content/1.jpg").works__img
                  .works__tags-wrapper
                    .works__tag HTML5
                    .works__tag CSS3
                    .works__tag JavaScript
                .works__content-wrapper
                  h4.works__content-title Сайт школы образования
                  .works__content
                    .works__content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="http://loftschool.ru").works__content-link Сайт школы
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
      section.reviews-block
        .container
          .section__title
            h2.reviews__title.title Блок «Отзывы»
          .reviews__new-block
            h4.reviews__new-title.min-title Новый отзыв
            hr.reviews-divider.divider
            .reviews__content
              .reviews__left
                .reviews__picture
                  .reviews__picture-add
                    .reviews__picture-icon
                  button(type='button').reviews__picture-button
                    .reviews__picture-text Добавить фото
              .reviews__right
                form.reviews__form.form
                  .reviews__form-row
                    label.form__label.reviews__form-label_name
                      span.form__label-title Имя автора
                      input.reviews__form-input.form__input(type="text" name="name")
                    label.form__label.reviews__form-label_email
                      span.form__label-title Титул автора
                      input.reviews__form-input.form__input(type="text" name="name")
                  .reviews__form-row
                    label.form__label
                      span.form__label-title Отзыв
                      textarea.reviews__form-textarea(type="textarea" name="message")
                  .reviews__form-buttons
                    button(type='button').reviews__form-button.form__button-cancel Отмена
                    button(type='button').reviews__form-button.form__button-save Сохранить
          .reviews__wrapper
            ul.reviews__list           
              li.reviews__item.reviews__item-mobile
                button(type='button').button-add
                  .button-add__content
                    .button-add__icon
                    p.button-add__text Добавить отзыв
              li.reviews__item
                .reviews__row
                  .reviews__person
                    .reviews__avatar
                      img(src="../images/content/VladimirS.jpg").reviews__avatar-img
                    .reviews__author
                      h4.reviews__author-name Владимир Сабанцев
                      .reviews__author-occupation Преподаватель
                  hr.reviews-divider
                  .reviews__content
                    .reviews__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.reviews__item
                .reviews__row
                  .reviews__person
                    .reviews__avatar
                      img(src="../images/content/DimaK.jpg").reviews__avatar-img
                    .reviews__author
                      h4.reviews__author-name Ковальчук Дмитрий
                      .reviews__author-occupation Основатель Loftschool
                  hr.reviews-divider
                  .reviews__content
                    .reviews__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.reviews__item
                .reviews__row
                  .reviews__person
                    .reviews__avatar
                      img(src="../images/content/VladimirS.jpg").reviews__avatar-img
                    .reviews__author
                      h4.reviews__author-name Владимир Сабанцев
                      .reviews__author-occupation Преподаватель
                  hr.reviews-divider
                  .reviews__content
                    .reviews__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              li.reviews__item
                .reviews__row
                  .reviews__person
                    .reviews__avatar
                      img(src="../images/content/DimaK.jpg").reviews__avatar-img
                    .reviews__author
                      h4.reviews__author-name Ковальчук Дмитрий
                      .reviews__author-occupation Основатель Loftschool
                  hr.reviews-divider
                  .reviews__content
                    .reviews__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .buttons__edit-del
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Править
                      .buttons__btn-edit-icon
                    button(type='button').buttons__edit-del-btn
                      .buttons__btn-text Удалить
                      .buttons__btn-del-icon
              
              
</template>

<script>
export default {
  
}
</script>