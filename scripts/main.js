$(document).ready(function () {
  $("a.photo").fancybox({
    transitionIn: "elastic",
    transitionOut: "elastic",
    speedIn: 300,
    speedOut: 300,
    hideOnOverlayClick: false,
    titlePosition: "over",
    playSpeed: 1000,
  })
  $("#gallery2 a").append("<span></span>")
  $("#gallery2 a").hover(
    function () {
      $(this).children("span").fadeIn(600)
    },
    function () {
      $(this).children("span").fadeOut(200)
    },
  )
})
