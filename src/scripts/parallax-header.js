var parallax = (function () {
    var itemOne = document.querySelector(".parallax-header__item__1");
    var itemTwo = document.querySelector(".parallax-header__item__2");
    var itemThree = document.querySelector(".parallax-header__item__3");

    return {
      move: function (block, windowScroll, strafeAmount) {
        var strafe = windowScroll / -strafeAmount + "%";
        var transformString = 'translate3d(0,' + strafe + ', 0)';

        var style = block.style;

        style.transform = transformString;
        style.webkitTransform = transformString;
      },

      init: function (wScroll) {
        this.move(itemOne, wScroll, 200);
        this.move(itemTwo, wScroll, 70);
        this.move(itemThree, wScroll, 20);
      }
    }
}());

window.onscroll = function() {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
};

