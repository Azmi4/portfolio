<template lang="pug">
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
              img(src="../../../images/content/1.jpg").works__img
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
              img(src="../../../images/content/1.jpg").works__img
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
              img(src="../../../images/content/1.jpg").works__img
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
              img(src="../../../images/content/1.jpg").works__img
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
</template>