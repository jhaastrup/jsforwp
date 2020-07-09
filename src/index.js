import React, { Component } from "react";
import ReactDOM from "react-dom"; 
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
 

class Home extends Component {

  //set posts to an empty state

  state = {
    posts: []
  }  

  //component did mount
  componentDidMount() {
    axios.get(`https://dev-sendbox-test.pantheonsite.io/wp-json/wp/v2/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  // ReactHtmlParser(html)
  
//render your response.
  render(){
    return(
      <ul>
      { this.state.posts.map(post => <li>{ReactHtmlParser(post.content.rendered)}</li>)}
    </ul>
    )
  }
} 


ReactDOM.render(<Home />, document.querySelector("#root"));

export default Home;