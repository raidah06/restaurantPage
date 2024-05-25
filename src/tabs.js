import createRestaurantHomePage from "./restaurant"
import createContactPage from "./contact"
import createMenuPage from "./menu"



const createTabs=()=>{
    const tabsList=["home","menu","contact"]
    const pages=[createRestaurantHomePage,createMenuPage,createContactPage]
    const content=document.querySelector("#content")
    var div=[]
    for (let i=0;i<tabsList.length;i++){
        div[i]=document.createElement("div")
        div[i].setAttribute('id',tabsList[i])
        div[i].textContent=tabsList[i]
        content.appendChild(div[i])
        div[i].addEventListener('click',()=>{
            pages[i]()
        })
    }
}
export default createTabs