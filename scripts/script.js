fetch('https://api.le-systeme-solaire.net/rest/bodies/')
.then(response => response.json())
.then(json => console.log(json));