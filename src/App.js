import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import {WithSpinner} from './components/with-spinner/with-spinner.component';

class App extends Component{
  constructor(){
    super();

    this.state={
      patents: [],
      searchfield: '',
      isLiked: [],
      isLoading: true
    };
  }

  componentDidMount(){
    fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=yGTtYuwPkMhpG6ZxtAqdsmndh2lVNgJsMboKOUFi')
    .then(response => response.json())
    .then(users => this.setState({patents: users.results,isLoading: false}, function (){
      for(let i=0;i<this.state.patents.length;i++){
        this.state.patents[i].push(i);
      }
      for(let i=0;i<this.state.patents.length;i++){
        this.state.isLiked.push(false);
      }
    }));
  }
  setChange = (x) => {
    let temp=this.state.isLiked;
    temp[x]=!this.state.isLiked[x];
    this.setState({isLiked: temp});
  }
  
  render() {
    const {patents,searchfield,isLiked}=this.state;
    const filteredPatents=patents.filter(patent =>
      (patent[1].toLowerCase().includes(searchfield.toLowerCase()) || patent[2].toLowerCase().includes(searchfield.toLowerCase())
        || patent[3].toLowerCase().includes(searchfield.toLowerCase()) || patent[5].toLowerCase().includes(searchfield.toLowerCase())) 
    );
    return (
      <div className="App">
        <div className="mainbody">
        <header>
          <h1 class="main-heading"> <i class="fa fa-instagram" aria-hidden="true"></i>Patent-to-gram</h1>
        </header>
        <section class="profile">
          <img class="avatar" src="https://i.ibb.co/YkWDrn6/51-HM-OWbzn-L.jpg" alt="" />
          <div class="profile-info">
            <h1>NASA TechTransfer</h1>
            <p class="intro"> Hi, this webpage provides structured, searchable developer access to NASA’s patents, software, and technology spinoff descriptions that have been curated to support technology transfer.</p>
          </div>
        </section>
        <SearchBox 
          placeholder='Filter patents by topic/content/hashtag/sensors'
          handleChange={e =>this.setState({searchfield: e.target.value})}
        />
        </div>
        {
          this.state.isLoading ? <WithSpinner /> : <CardList patents={filteredPatents} isLiked={isLiked} setChange={this.setChange} /> 
        }
        <footer>&copy;2021 Paras' Patent-to-gram</footer>
      </div>
    );
  }

}


export default App;
