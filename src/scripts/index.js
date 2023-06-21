/* Desenvolva sua lógica aqui ... */

function createCard(product) {
   const card = document.createElement("li");
   const albumImg = document.createElement("img");
   const bandAndAgeName = document.createElement("p");
   const albumTitle = document.createElement("h2");

   const span = document.createElement("span");
   const priceSpan = document.createElement("p");
   const buttonSpan = document.createElement("button");

   albumImg.src = product.img;
   bandAndAgeName.innerText = `${product.band} ${product.year}`;
   albumTitle.innerText = product.title;

   priceSpan.innerText = `R$ ${product.price}`;
   buttonSpan.innerText = "Comprar";
   
   card.append(albumImg, bandAndAgeName, albumTitle, span);
   span.append(priceSpan, buttonSpan);

   return card;
}


function renderButtons(buttons){
   const genderContainer = document.querySelector(".gender__container")

   buttons.forEach(category => {
      const categoryList = document.createElement("li")
      const categoryButton = document.createElement("button")

      categoryButton.innerText = category
      categoryButton.classList = "buttons__categories"

      categoryList.appendChild(categoryButton)
      genderContainer.appendChild(categoryList)
   });
}
renderButtons(categories)

function renderCards(cards){
   const ulContainer = document.querySelector(".found__albuns")

   cards.forEach(products =>{
      const card = createCard(products)
      ulContainer.appendChild(card)
   })
}
renderCards(products)

function addEventsFilter(categories, products){
   const ulContainer = document.querySelector(".found__albuns")
   const filterButtons = document.querySelectorAll(".buttons__categories")
   const priceInput = document.querySelector("input[type='range']")
   const paragInput = document.querySelector(".input__father")

   let filteredArray = products
   let categoryIndex = 0
   let inputValue = 100
   
   filterButtons.forEach((button, index)=>{
      button.innerText = categories[index]

      button.addEventListener("click", ()=>{
         categoryIndex = index
         
         if(categoryIndex === 0){
            filteredArray= products.filter((product)=> product.price <= inputValue)
         }else{
            filteredArray = products.filter((product) => product.category === categoryIndex && product.price <=inputValue)
         }
         ulContainer.innerHTML = ""
         
         renderCards(filteredArray)
         
      })
   })

   priceInput.addEventListener("input", ()=>{
      inputValue = priceInput.value
      paragInput.innerText = `Até... R$: ${inputValue}`
      
      if(categoryIndex === 0){
         filteredArray = products.filter((product)=> product.price <= inputValue)
      }else{
         filteredArray = products.filter((product) => product.category === categoryIndex && product.price <= inputValue)
      }
      ulContainer.innerHTML = ""
      renderCards(filteredArray)
      })
   }
   

addEventsFilter(categories, products)