document.forms.main.onsubmit = function() {
  var message = this.inputDuration.value;
  console.log(message)
  return false;
};