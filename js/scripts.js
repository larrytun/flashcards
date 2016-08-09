$(document).ready(function() {
  $("button").click(function() {
    if($("h1#" + this.parentNode.id).css("display") === "block"){
      $("h1#" + this.parentNode.id).toggle();
      $("p#" + this.parentNode.id).fadeToggle();
    } else{
      $("p#" + this.parentNode.id).toggle();
      $("h1#" + this.parentNode.id).fadeToggle();
    };
  });
});
