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
</template>