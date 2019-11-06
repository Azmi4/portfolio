<template lang="pug">
  section.about-me
    .container
      .section__title
        h2.about-me__title.title Блок «Обо мне»
        a(href="#").add-group
          .add-group__icon
          .add-group__text Добавить группу
      .group
        ul.group__list
          li.group__item
            form.form__group
              .form__row
                .form__title
                  input.form__input-title(type="text" name="name" placeholder="Название новой группы")
                  .form__title-icon
                    button(type='button').form__title-icon-check-mark
                    button(type='button').form__title-icon-close
                hr.form-divider
                .form__skill-wrapper.form__new-skill
                  input.input.form__new-skill-name(type="text" name="name" placeholder="Новый навык")
                  .form__new-skill-value-wrapper
                    input.input.form__new-skill-value(type="number" name="name" min="0" max="100" placeholder="100")
                  button(type='button').form__new-skill-add
          li.group__item
            form.form__group
              .form__row
                .form__title
                  input.form__input-title(type="text" name="name" placeholder="Workflow")
                  .form__title-icon
                    button(type='button').form__title-icon-edit.form__title-edit
                hr.form-divider
                .form__content
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="Git")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="100")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="Terminal")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="90")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="Gulp")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="80")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="Webpack")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="85")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                .form__skill-wrapper.form__new-skill
                  input.input.form__new-skill-name(type="text" name="name" placeholder="Новый навык")
                  .form__new-skill-value-wrapper
                    input.input.form__new-skill-value(type="number" name="name" min="0" max="100" placeholder="100")
                  button(type='button').form__new-skill-add
          li.group__item
            form.form__group
              .form__row
                .form__title
                  input.form__input-title(type="text" name="name" placeholder="Frontend")
                  .form__title-icon
                    button(type='button').form__title-icon-edit.form__title-edit
                hr.form-divider
                .form__content
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="HTML5")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="100")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="CSS3")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="90")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="JavaScript")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="80")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                  .form__skill-wrapper
                    input.input.form__skill-name(type="text" name="name" placeholder="jQuery и Vue.js")
                    .form__skill-value-wrapper
                      input.input.form__skill-value(type="number" name="name" min="0" max="100" placeholder="85")
                    .form__skill-buttons
                      button(type='button').form__icon-edit
                      button(type='button').form__icon-delete
                .form__skill-wrapper.form__new-skill
                  input.input.form__new-skill-name(type="text" name="name" placeholder="Новый навык")
                  .form__new-skill-value-wrapper
                    input.input.form__new-skill-value(type="number" name="name" min="0" max="100" placeholder="100")
                  button(type='button').form__new-skill-add
</template>