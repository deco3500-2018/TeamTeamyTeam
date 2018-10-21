$(document).ready(function()

{

// Reviewing posts turn on
  //press 1 to post tiffany's
  $(document).on('keypress', function(e) {
    if(e.which == 49) {
        $(".popup-post, .popup-content-post").addClass("active");
        $(".confirm").click(function(){
          $(".popup-post, .popup-content-post").removeClass("active");
          $(".popup-confirmation, .popup-content-confirmation").addClass("active");
          $("#tif-image").attr("src","img/tiffany.png");
          $('#tiffany').removeClass("invisible");
          $(".ok").click(function(){
            $(".popup-confirmation, .popup-content-confirmation").removeClass("active");
          });
        });
        $(".nevermind").click(function(){
          $(".popup-post, .popup-content-post").removeClass("active");
        });
    // accept tiffany's post
      $( "#accept-tiffany" ).click(function() {
        var image =   $(this).parent().prev(".img-post");
        $(image).appendTo('#column2, #column3').after(function(){
          return "<div class='cross-delete'>x</div><div class='star-button-tiffany' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='tiffany-likes' id='likes'>0</div></div>";
        });
        $( "#column3" ).find('.cross-delete').replaceWith('');
        $(this).prev(".decline").remove();
        $("#accept-tiffany").remove();
        $( ".star-button-tiffany" ).click(function() {
          $('.tiffany-likes').html(function(i, val) { return val*1+1 });
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
    }
    //press 2 to post bryan's
    if(e.which == 50) {
      $(".popup-post, .popup-content-post").addClass("active");
      $(".confirm").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
        $(".popup-confirmation, .popup-content-confirmation").addClass("active");
        $("#bryan-image").attr("src","img/bryan.png");
        $('#bryan').removeClass("invisible");
        $(".ok").click(function(){
          $(".popup-confirmation, .popup-content-confirmation").removeClass("active");
        });
      });
      $(".nevermind").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
      });

    // accept bryans post
      $( "#accept-bryan" ).click(function() {
        var image =   $(this).parent().prev(".img-post");
        $(image).appendTo('#column2, #column3').after(function(){
          return "<div class='cross-delete'>x</div><div class='star-button-bryan' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='bryan-likes' id='likes'>0</div></div>";
        });
        $( "#column3" ).find('.cross-delete').replaceWith('');
        $(this).prev(".decline").remove();
        $("#accept-bryan").remove();
        $( ".star-button-bryan" ).click(function() {
          $('.bryan-likes').html(function(i, val) { return val*1+1 });
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
    }
    //press 3 to post lucy's
    if(e.which == 51) {
      $(".popup-post, .popup-content-post").addClass("active");
      $(".confirm").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
        $(".popup-confirmation, .popup-content-confirmation").addClass("active");
        $("#lucy-image").attr("src","img/lucy.png");
        $('#lucy').removeClass("invisible");
        $(".ok").click(function(){
          $(".popup-confirmation, .popup-content-confirmation").removeClass("active");
        });
      });
      $(".nevermind").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
      });
    // accept lucy's post
      $( "#accept-lucy" ).click(function() {
        var image =   $(this).parent().prev(".img-post");
        $(image).appendTo('#column2, #column3').after(function(){
          return "<div class='cross-delete'>x</div><div class='star-button-lucy' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='lucy-likes' id='likes'>0</div></div>";
        });
        $( "#column3" ).find('.cross-delete').replaceWith('');
        $(this).prev(".decline").remove();
        $("#accept-lucy").remove();
        $( ".star-button-lucy" ).click(function() {
          $('.lucy-likes').html(function(i, val) { return val*1+1 });
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
    }

    //press 4 to post oliver's
    if(e.which == 52) {
      $(".popup-post, .popup-content-post").addClass("active");
      $(".confirm").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
        $(".popup-confirmation, .popup-content-confirmation").addClass("active");
        $("#oliver-image").attr("src","img/oliver.png");
        $('#oliver').removeClass("invisible");
        $(".ok").click(function(){
          $(".popup-confirmation, .popup-content-confirmation").removeClass("active");
        });
      });
      $(".nevermind").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
      });
    // accept olivers post
      $( "#accept-oliver" ).click(function() {
        var image =   $(this).parent().prev(".img-post");
        $(image).appendTo('#column2, #column3').after(function(){
          return "<div class='cross-delete'>x</div><div class='star-button-oliver' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='oliver-likes' id='likes'>0</div></div>";
        });
        $( "#column3" ).find('.cross-delete').replaceWith('');
        $(this).prev(".decline").remove();
        $("#accept-oliver").remove();
        $( ".star-button-oliver" ).click(function() {
          $('.oliver-likes').html(function(i, val) { return val*1+1 });
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
    }
    //press 5 to post polly's
    if(e.which == 53) {
      $(".popup-post, .popup-content-post").addClass("active");
      $(".confirm").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
        $(".popup-confirmation, .popup-content-confirmation").addClass("active");
        $("#polly-image").attr("src","img/polly.png");
        $('#polly').removeClass("invisible");
        $(".ok").click(function(){
          $(".popup-confirmation, .popup-content-confirmation").removeClass("active");
        });
      });
      $(".nevermind").click(function(){
        $(".popup-post, .popup-content-post").removeClass("active");
      });
    // accept pollys post
      $( "#accept-polly" ).click(function() {
        var image =   $(this).parent().prev(".img-post");
        $(image).appendTo('#column2, #column3').after(function(){
          return "<div class='cross-delete'>x</div><div class='star-button-polly' id='counter'><div class='star'><div class='material-icons star'>star</div></div><div class='polly-likes' id='likes'>0</div></div>";
        });
        $( "#column3" ).find('.cross-delete').replaceWith('');
        $(this).prev(".decline").remove();
        $("#accept-polly").remove();
        $( ".star-button-polly" ).click(function() {
          $('.polly-likes').html(function(i, val) { return val*1+1 });
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
    }
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
});



  $("#settings").click(function(){

    $(".popup-settings, .popup-content-settings").addClass("active");
    $(".cancel").click(function(){
      $(".popup-settings, .popup-content-settings").removeClass("active");
    });
    $(".save").click(function(){
      $(".popup-settings, .popup-content-settings").removeClass("active");
    });

  });

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });








});
