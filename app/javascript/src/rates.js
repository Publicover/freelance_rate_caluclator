$(document).on('turbolinks:load', function() {
  $('#rate-field').keyup(function() {
    var empty = false;
    if ($('#rate-field').val() == '') {
      empty = true;
    }
    if (empty) {
      $('#rate-button').attr('disabled', 'disabled');
    } else {
      $('#rate-button').removeAttr('disabled');
    };
  });
});
