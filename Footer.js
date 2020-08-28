import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Footer extends Component {
    render() {
        return (
            <div className="layoutTestGreen footer whiteText">
               <center class="footText"> 
               
               
               <h4> Places to enjoy your stay: </h4>
                <ul>
                    <li><a href="" >Hilton Cincinnati Netherland Plaza</a></li>
                    <li><a href="" >Cincinnati Marriott at RiverCenter </a> </li>
                    <li> <a href="https://www.hyatt.com/en-US/hotel/ohio/hyatt-regency-cincinnati/cinci?src=corp_lclb_gmb_seo_nam_cinci">
Hyatt Regency Cincinnati</a></li> 
<br />
                   
<li className="yellowText"><a href="https://www.cvgairport.com/" >
Book Your Flight Now!</a></li>



                </ul> 
</center>
               
            </div>
        )
    }
}