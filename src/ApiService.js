class ApiService {

    constructor(rootUrl) {
        this.api = rootUrl 
    }

    getToys = () => fetch(this.api + "/toys").then(resp => resp.json())

    createToy = (toy) => fetch(this.api + "/toys", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toy),
        })
        .then(resp => resp.json()) 

    likeToy = (id, likes) => fetch(`${this.api}/toys/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes: likes}),
        })
        .then(resp => resp.json()) 

    deleteToy = (id) => fetch(`${this.api}/toys/${id}`, {
        method: 'DELETE', 
        })
        .then(resp => resp.json()) 
    
   
}