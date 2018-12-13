$(document).ready(function () {

  // EXPAND button

      $('.expand-text').hide();
      $('.expand-plus').click(function(){
      var $answer = $(this).next('.expand-text');
      if ($answer.is(':hidden')) {
        $answer.slideDown();

        $(this).addClass('close-text');
      }else{
        $answer.slideUp();
        $(this).removeClass('close-text');
      }
    });//end click
// end of expand

      }); // document ready end



      $(document).ready(function() {
      $('#gallery a').click(function(evt) {
      	evt.preventDefault();
      	var imgPath = $(this).attr('href');
      	var oldImage = $('#photo img');
      	var newImage = $('<img src="' + imgPath +'">');
      	newImage.hide();
      	$('#photo').prepend(newImage);
      	newImage.fadeIn(1000);
      	oldImage.fadeOut(1000,function(){
      	$(this).remove();
      }); //end fadeOut
    }); // end click
      $('#gallery a:first').click();

      }); // end ready
