let addToy = false;
const dom = new DomService()
const api = new ApiService("http://localhost:3000")
Toy.getAll()
Toy.addEventListeners()


  dom.addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      dom.toyFormContainer.style.display = "block";
    } else {
      dom.toyFormContainer.style.display = "none";
    }
  });



