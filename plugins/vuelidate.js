import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)


//Spaces validator
export function spacesValidator (value) {    

    /*..*/
    if(value==""){
        return true
    }

    let res 

    var expreg = /^[^\s]+$/

    return res = expreg.test(value) ? true : false 
}

//Name validator
export function phoneNumberValidator (value) {       
    let res 
        
    if(value==""){
        return true
    }

    let data = value.substr(1,3)

    return res = data >=300 && data <= 320 ? true : false 
}

export function cleanPhone (phone) {       
    
    let data = phone.replace(/\D/g,'')

    let resp = Number(data)

    return resp
}



