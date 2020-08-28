import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-lg">
                <Link to="/" className="navbar-brand" >        <img src={require('../assets/planeicon.png')} width="40px" alt="icon" class="icon"/>  EXPLORE CINCINNATI  </Link>
                <div className="">
                <ul className="navbar-nav mx-auto"> 
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/allLocations" className="nav-link">All Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/addLocations" className="nav-link">Add Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/contacts" className="nav-link">Contact </Link>
                            </li>
                        </ul>
</div>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-danger" type="submit">Search</button>
                </form>
                </nav>











        )
    }
}



// const endpoint = 'insert the json within this quotes';

// const name = [];
// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => name.push(...data))

// function findMatches(wordToMatch, name) {
//   return name.filter(place => {
// const regex = new RegExp(wordToMatch, 'gi');
// return place.name.match(regex) 
// });
// }

// function displayMatches(){
//   const matchArray = findMatches(this.value, name);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const locationName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//     <li>
//     <span class="name">${locationName}</span>
//     </li> 
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions')

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
