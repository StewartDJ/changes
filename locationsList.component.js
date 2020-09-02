// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

class LocationsList extends React.Component {

    state = {
name: " ",
description: ' ',
website: ' ',
imageUrl: ' ',
location: ' ',
address: ' ',
city: ' ',
destinationState: ' ',
posts: []
    };

    componentDidMount = () => {
        this.getLocationPost();
      };
    

getLocationPost = () => {
    axios.get('/all-locations')
    .then((response) => {
        const data = response.data;
        console.log(response.data)
        this.setState({ posts: data });
        console.log('data from locations has been recieved');
    })
    .catch(() => {
        alert('Error retrieving data!!!');
    });
  }
  
  //do i need this?
//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };



  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.name,
      body: this.state.description
    };


    axios({
      url: '/all-locations/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getLocationPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      description: ''
    });
  };

  displayLocationPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="post__display">
        <h3>{post.name}</h3>
        <p>{post.description}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
     

        <div className="display">
          {this.displayLocationPost(this.state.posts)}
        </div>
      
    );
  }
}

export default LocationsList;





// export default class LocationsList extends Component {
//     constructor(props) {
//         super(props);

// this.state = {touristdestinations: []};

//     }
    
//     componentDidMount() {
//         axios.get('http://localhost:5000/all-locations')
//             .then(response => {
//             this.setState({touristdestinations: response.data})
// })
// .catch((error) => {
//     console.log(error);
// })
// }

    
//     render() {
//         return (
//             <div className="theLocations">
//                 <h2> Placeholder </h2>
// <p> This is where the list will be </p>

//                 </div>
//         )
//     }
// }