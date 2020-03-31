import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works"]
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork"]
};

const tags = {
  template: "#slider-tags"
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"]
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data: () => ({
    works: [],
    currentWork: {}
  }),
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/bg/${item.photo}`);
        item.photo = requiredPic;
        return item;
      });
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);

    this.currentWork = this.work[0];
  }
});
