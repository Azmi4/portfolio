<template lang="pug">
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
                  img(src="../../../images/content/VladimirS.jpg").reviews__avatar-img
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
                  img(src="../../../images/content/DimaK.jpg").reviews__avatar-img
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
                  img(src="../../../images/content/VladimirS.jpg").reviews__avatar-img
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
                  img(src="../../../images/content/DimaK.jpg").reviews__avatar-img
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