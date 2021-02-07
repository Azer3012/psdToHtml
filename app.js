
const search =document.querySelector('.search-img')

const headerList=document.querySelector('.list')

const inputSearch=document.querySelector('.search-form')




search.addEventListener('click',getSearch)


let x=true
function getSearch(){

    
    headerList.classList.toggle("none")
   
    inputSearch.classList.toggle("blockk")

    
    
}





