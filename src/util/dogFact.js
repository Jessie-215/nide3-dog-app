import request from 'request'

export function getDogFact(name, callback){
    //API KEY:  FCu9hYtbZcu7/YxpPry++A==vMfXXtDtXbQFRL0j
    //const url = 'https://api.api-ninjas.com/v1/dogs?name=golden retriever'
    const url = 'https://api.api-ninjas.com/v1/dogs?name='+name

    request({
        headers: {
        'X-Api-Key': 'FCu9hYtbZcu7/YxpPry++A==vMfXXtDtXbQFRL0j'
      },
      url: url, json: true}, (error, response) => {
           //console.log(error) ;
           callback(response.body[0].grooming);

    })

}
