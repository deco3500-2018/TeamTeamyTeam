$(document).ready(function()

{
  $( ".accept" ).click(function() {
    var image =   $(this).parent().prev(".img-post");
    $(image).appendTo('#column2');
    $(this).prev(".decline").remove();
    $(this).remove();
    $(image).clone().appendTo("#column3");
  });


  $( ".decline" ).click(function() {
    var image = $(this).parent().prev(".img-post");
    var accept = $(this).next(".accept");
    var decline = $(this);


    $(".popup, .popup-content").addClass("active");

    $(".delete").click(function(){
      $(".popup, .popup-content").removeClass("active");
      $(image).fadeOut(400, function(){
        $(this).remove();
      });
      $(decline).fadeOut(400, function(){
        $(this).remove();
      });
      $(accept).fadeOut(400, function(){
        $(this).remove();
      });
    });
    $(".cancel").click(function(){
      $(".popup, .popup-content").removeClass("active");
    });

  });









});
