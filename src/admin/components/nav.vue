<template lang="pug">
  nav.nav-admin
    .container
      - var menu = ['Обо мне', 'Работы', 'Отзывы']
        ul.nav__list
          each item in menu
            li.nav__item
              a.nav__link #{item}
</template>