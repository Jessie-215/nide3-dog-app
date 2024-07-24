console.log('js file')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log('client side js file')
//     })
// })

// var myHeaders = new Headers();
// myHeaders.append("X-Api-Key", "FCu9hYtbZcu7/YxpPry++A==vMfXXtDtXbQFRL0j");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.api-ninjas.com/v1/dogs?name=golden retriever", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// fetch("https://api.api-ninjas.com/v1/dogs?name=golden retriever", requestOptions)
//   .then((response) => {
//     response.json().then((data)=>{
//         if (data.error){
//             console.log(data.error)
//         } else {
//             console.log(data[0])
//         }
//     })})

const dogForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

dogForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const info = search.value

    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "FCu9hYtbZcu7/YxpPry++A==vMfXXtDtXbQFRL0j");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    msg1.textContent='loading...'
    msg2.textContent=''

    fetch("https://api.api-ninjas.com/v1/dogs?name="+info, requestOptions)
    .then((response) => {
        response.json().then((data)=>{
            if (data.error){
                console.log(data.error)
                msg1.textContent=data.error
            } else {
                console.log(data[0])
                msg2.textContent=data[0].name
            }
        })})
    console.log(info)


})