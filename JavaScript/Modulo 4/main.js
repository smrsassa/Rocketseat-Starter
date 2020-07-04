var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://127.0.0.1:5500/JavaScript/Modulo%204/info.json');
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}
