String.prototype.isEmpty = function(text){
  return (this.length === 0 || !this.trim())
}

$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
})

$('#fname').on('keyup', function(){
    var name = $(this).val();
    $('#connectName').text(name);
  })

  $('.hover-text').on('mouseover', function(){
    console.log('in')
    $(this).children().css('opacity', '1');
  })

  $('.hover-text').on('mouseout', function(){
    $(this).children().css('opacity', '0');
  })

  $('#sidebar-icon').on('click', function(){
    $('.sidebar').css('width', '250px');
  })

  $('#close-icon').on('click', function(){
    $('.sidebar').css('width', '0')
  })


$('#sendMessage').on('click', function(){
  var emailId = $('#emailId').val();
  var fname = $('#fname').val();
  var lname = $('#lname').val();
  var message = $('#message').val();

  var emailForm = {
    'emailId' : emailId,
    'fname' : fname,
    'lname' : lname,
    'message' : message
  }

  if(emailId.isEmpty() || fname.isEmpty() || lname.isEmpty() || message.isEmpty()){
    if(emailId.isEmpty()){
      $('#emailId').addClass('error-input')
    }
    if(fname.isEmpty()){
      $('#fname').addClass('error-input')
    }
    if(lname.isEmpty()){
      $('#lname').addClass('error-input')
    }
    if(message.isEmpty()){
      $('#message').addClass('error-input')
    }
  }else{
    $.ajax({
      url : '/contact',
      type :'POST',
      data: JSON.stringify(emailForm),
      contentType: 'application/json',
      success : function(res){
        alert('Thank you for contacting me, I will get back to you');
      },
      error: function(res){
        alert('error in sending message'); 
      }
    })
  } 
})




$('input, textarea').focus(function(){
  var input = $(this);
  if(input.hasClass('error-input')){
    input.removeClass('error-input')
  }
})


