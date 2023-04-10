export const url = 'https://api.le-systeme-solaire.net/rest/bodies/';
export class Fetch {
    constructor(i){
        this.url = `${url}${i}`;
    }
        getData() {
            fetch(this.url)
.then(response => response.json())
.then(json => console.log(json));
        }
}
