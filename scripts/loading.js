function disableAnimations() {
  document.body.classList.add("noAnim");
}

function enableAnimations() {
  document.body.classList.remove("noAnim");
}

function addLoadingMask() {
  disableAnimations();
  var mask = document.createElement('div');
  mask.style.position = 'fixed';
  mask.style.width = '100vw';
  mask.style.height = '100vh';
  mask.style.backgroundColor = '#000';
  mask.style.zIndex = '5';
  mask.id = 'loadingMask';

  document.body.appendChild(mask);
}

function removeLoadingMask() {
  var mask = document.getElementById('loadingMask');
  if (mask) {
    mask.parentNode.removeChild(mask);
    enableAnimations();
  }
}
