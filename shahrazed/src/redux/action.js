import {ADD, SUPP} from '../const/actionTypes'

export const add=(payload)=>{
    return{type:ADD, payload}
}

export const supp=(payload)=>{
    return{type:SUPP, payload}
}