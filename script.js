function showContent(contentId) {
  var contents = document.getElementsByClassName('card');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  document.getElementById(contentId).style.display = 'block';
}