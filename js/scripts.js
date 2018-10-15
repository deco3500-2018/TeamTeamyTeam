$(document).ready(function()

{

  //press 1 to post tiffany's
  $(document).keypress(function(e) {
    if(e.which == 49) {
        $(".popup-post, .popup-content-post").addClass("active");
        $(".confirm").click(function(){
          $(".popup-post, .popup-content-post").removeClass("active");
          $("#tif-image").attr("src","img/tiffany.png");
          $('#tiffany').removeClass("invisible");

        });
        $(".nevermind").click(function(){
          $(".popup-post, .popup-content-post").removeClass("active");
        });
    };

    //press 2 to post bryan's
    if(e.which == 50) {
      $(".popup-post, .popup-content-post").addClass("active");
      $(".confirm").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
        $("#bryan-image").attr("src","img/bryan.png");
        $('#bryan').removeClass("invisible");

      });
      $(".nevermind").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
      });

    };
});

  $( ".accept" ).click(function() {
    var image =   $(this).parent().prev(".img-post");
    $(image).appendTo('#column2, #column3').after(function(){
      return "<div class='cross-delete'>x</div><div class='star-button' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='likes'>0</div></div>";
    });
    $(this).prev(".decline").remove();
    $(this).remove();
    $( ".star-button" ).click(function() {
      $('.likes').html(function(i, val) { return val*1+1 });
    });
    $( ".cross-delete" ).click(function(){
      $(".popup, .popup-content").addClass("active");
      $(".delete").click(function(){
        $(".popup, .popup-content").removeClass("active");
      });
      $(".cancel").click(function(){
        $(".popup, .popup-content").removeClass("active");
      });
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
  
  $(".submit").click(function(){
    var question = document.getElementById("question");
    var text = "";
    var i;
    for (i = 0; i < question.length ;i++) {
        text += question.elements[i].value + "<br>";
    }
    document.getElementById("question").innerHTML = text;
}
  
  
  
  $("#settings").click(function(){

    $(".popup-settings, .popup-content-settings").addClass("active");
    $(".cancel").click(function(){
      $(".popup-settings, .popup-content-settings").removeClass("active");
    });
    $(".save").click(function(){
      $(".popup-settings, .popup-content-settings").removeClass("active");
    });

  });







});
