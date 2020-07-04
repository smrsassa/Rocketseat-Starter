axios.get('http://127.0.0.1:5500/JavaScript/Modulo%204/info.json')
  .then(function(response) {
    console.log(response);
    console.log(response.data.name);
  })
  .catch(function(error) {
    console.warn(error);
  })