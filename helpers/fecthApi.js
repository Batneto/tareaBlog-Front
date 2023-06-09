

const urlBase='http://localhost:3000/api'

const express = require('express')


const consultaInt = async(url,method,body) => {
 
    let options={}
    if(method=='post' || method=='put'){
        
       const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }

    if(method=='delete'){
        options={
            method: method,
        }
    }

    if(method=='get'){
        options={
            method: method,
        }
    }
    
      return await fetch(`${urlBase}${url}`,options);
}

module.exports = {
    consultaInt
}
