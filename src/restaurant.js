
const createRestaurantHomePage=()=>{
    const content=document.querySelector('#content');
    const pageContent=document.createElement('div');
    pageContent.classList.add('page-content')

    const image=document.createElement('img');
    image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMI6G1Pagwe-T8VQ5cSk0Y7bFZqPs5BcorJUYSd8OTg&s'
    image.height='300'
    pageContent.appendChild(image)

    const headline=document.createElement('h1')
    headline.textContent='My pizza'
    pageContent.appendChild(headline)
    content.appendChild(pageContent)
}
export default createRestaurantHomePage