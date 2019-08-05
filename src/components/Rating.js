import React from 'react'
import {rateMovie} from '../redux/actions'
import {connect} from 'react-redux'
const Rating = ({count,ratemov,test=false}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml=[
                ...starsHtml,
                <i onClick={()=>test&&ratemov(i+1)} className="fas fa-star"></i>
            ]
        }
        else {
            starsHtml=[
                ...starsHtml,
                <i onClick={()=>test&&ratemov(i+1)} className="far fa-star"></i>
            ]
        }
    }
    return starsHtml
}

const mapDispatchToProps=dispatch=>{
    return{
        ratemov:(newrate)=>dispatch(rateMovie(newrate))
    }
}




export default connect (null,mapDispatchToProps) (Rating);