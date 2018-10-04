$(document).ready(function()

{


  $( ".accept" ).click(function() {
    var image =   $(this).parent().prev(".img-post");
    $(image).appendTo('#column2, #column3').after(function(){
      return "<div class='star-button' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='likes'>0</div></div>";
    });
    $(this).prev(".decline").remove();
    $(this).remove();
    $( ".star-button" ).click(function() {
      $('.likes').html(function(i, val) { return val*1+1 });
    });
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
