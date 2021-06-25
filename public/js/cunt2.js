
function GarCount(count)
{
  var div_by = 100,
      speed = Math.round(count / div_by),
      $display = $('.count2'),
      run_count = 1,
      int_speed = 5;

  var int = setInterval(function() {
    if(run_count < div_by){
      $display.text(speed * run_count);
      run_count++;
    } else if(parseInt($display.text()) < count) {
      var curr_count = parseInt($display.text()) + 200;
      $display.text(curr_count);
    } else {
      clearInterval(int);
    }
  }, int_speed);
}
