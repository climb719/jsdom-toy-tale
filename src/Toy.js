class Toy {

    static all = []

    constructor(toy) {
        this.toy = toy
        this.constructor.all.push(this)
    }

    render = () => {
        const { name, image, likes, id } = this.toy
        dom.toyCollection.innerHTML +=
        `<div class="card" data-id=${id}>
        <h2>${name}</h2>
        <img src=${image} class="toy-avatar" />
        <p>${likes} Likes </p>
        <button class="like-btn">Like <3</button>
        <button class="delete-btn">Delete This Toy</button>
        </div>`
    }

    like = (card) => {
        api.likeToy(this.toy.id, this.toy.likes + 1).then(toy => {
            this.toy = toy
            card.querySelector("p").innerText = `${this.toy.likes} likes`
        })
    }

    delete = (card) => {
        api.deleteToy(this.toy.id).then(card.remove())
    }

    static find = (id) => this.all.find(toy => toy.toy.id == id)

    static handleClick = (e) => {
        const card = e.target.closest(".card")
        const id = card.dataset.id
        const toy = Toy.find(id)
        if (e.target.classList.contains("like-btn")) {
            toy.like(card)
        }
        else if  (e.target.classList.contains("delete-btn")) {
            toy.delete(card)
        }
    }


    static addEventListeners = () => {
        dom.form.addEventListener("submit", Toy.handleSubmit)
        dom.toyCollection.addEventListener("click", Toy.handleClick)
    }

    static create = (toy) => {
        new Toy(toy).render()
    }

    static getAll = () => {
        api.getToys().then(toys => {
            toys.forEach(this.create)
            // this is toy class since in a class/static method
        })
    }

    static handleSubmit = (e) => {
        e.preventDefault()
        const newToy = {
            name: e.target.name.value,
            image: e.target.image.value,
            likes: 0
        }
        api.createToy(newToy).then(Toy.create)
        e.target.reset()
    }


}
