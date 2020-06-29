// simple radio - sets up shop

$('.simple-radio li').each(function(index) {
  if ($('input', this).prop('checked')) {
    $(this).addClass('checked');
  }
});

// simple radio - listen for click
$('.simple-radio li').click(function() {

  $('.simple-radio input').removeAttr('checked');
  $('input', this).attr('checked', 'checked');
  $('input', this).prop({
    checked: true
  });
  $('.simple-radio li').removeAttr('class');
  $(this).addClass('checked');

});

