// Signup Form.
(function () {

    // Vars.
    var $form   = document.querySelectorAll('#signup-form')[0],
    $type   = document.querySelectorAll('#signup-form input[name="lead-type"]')[0],
    $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
    $email  = document.querySelectorAll('#signup-form #email')[0],
    $message;

    // Bail if addEventListener isn't supported.
    if (!('addEventListener' in $form))
      return;

    // Message.
    $message = document.createElement('span');
    $message.classList.add('message');
    $message.id = 'leadMessage';
    $('#message').html($message);

    $message._show = function (type, text) {

      $message.innerHTML = text;
      $message.classList.add(type);
      $message.classList.add('visible');

        // window.setTimeout(function() {
        // 	$message._hide();
        // }, 3000);

      };

      $message._hide = function () {
        $message.classList.remove('visible');
      };

    // Events.
    // Note: If you're *not* using AJAX, get rid of this event listener.
    $form.addEventListener('submit', function (event) {

      event.stopPropagation();
      event.preventDefault();

        // Hide message.
        $message._hide();

        // Disable submit.
        $submit.disabled = true;

        $.ajax({
          url:      '/user/leads',
          type:     'post',
          dataType: 'json',
          success:  function (data) {
                // Reset form.
                $form.reset();

                // Enable submit.
                $submit.disabled = false;

                // Show message.
                $('#email').hide()
                $('#leadSubmit').hide()
                $message._show('success', 'Thank you!');

              },
              error : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.status);
                console.log(textStatus);
                console.log(errorThrown);
                $form.reset();
                // Enable submit.
                $submit.disabled = false;

                if (jqXHR.status == 409) {
                    // Show message.
                    $('#email').hide()
                    $('#leadSubmit').hide()
                    $message._show('success', 'Thank you!');
                  } else {
                    $message._show('error', 'Something went wrong please try again');
                  }
                },
                data: JSON.stringify({email: $email.value, type: $type.value})
              });
      });

  })();
