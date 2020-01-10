import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Admin from './components/admin/Admin';
import Users from './components/users/Users';
import Logo from './Img/Logo.png'
import './App.css';
import Home from './components/Home/Home'
import axios from 'axios';
import DetailForUsers from './components/View/DetailPageForUsers';
import DetailForAdmin from './components/admin/DetailPageForAdmin'
import Upload from './components/admin/Upload'
 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects:[],
      search:'',
      searchOption:'aName',
      courseOption:'None', 
      sort:'None',
      project:'',
     /* sID:'',sName:'',sYear:'',cID:'',cName:'',aName:'',percentage:'',aDescription:'',techUsed:'',application:'',
        scope:'',description:'',pName:'', addNew:false */
      
  };
  }
  getDataFromDb=()=>{
    axios.get('http://localhost:3000/')
      .then(res => {
        let projects = res.data;
        
        this.setState({ projects:projects });
       
      })
   // console.log("ok")
  }
  componentDidMount() {
    this.getDataFromDb();
    
  }
 
  deleteDataFromDb=()=>{
    const projects=this.state.projects.slice(0,this.state.projects.length-1)
    this.setState({projects:projects})
  }
  

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  

  // our put method that uses our backend api
  // to create new query into our data base
  

  // our delete method that uses our backend api
  // to remove existing database information
  

  
  
  handleOnChange=(p)=>{
    this.setState({
      project:p,
    })
  }
  
  onSearchChange=(e)=>{
    this.setState({search:e.target.value});
    
  }
  onOptionChange=(e)=>{
    this.setState({searchOption:e.target.value})
  }
  onCourseChange=(e)=>{
    this.setState({courseOption:e.target.value})
  }
  onSortChange=(e)=>{
    this.setState({sort:e.target.value})
  }
  render(){
//    console.log(this.state.projectx.id)
    const selectedCourse=this.state.courseOption;
    
    const selectedOption = this.state.searchOption;
    const filteredProjects = this.state.projects.filter(project => {
    
      if(selectedCourse==='None' || selectedCourse===project.cName){
      if(selectedOption === "aName"){
      return project.aName.toLowerCase().includes(this.state.search.toLowerCase())
      }
      else{
        if(selectedOption === "semester"){
          return project.semester.toLowerCase().includes(this.state.search.toLowerCase())
        }
        else{
          if(selectedOption === "sName"){
            return project.sName.toLowerCase().includes(this.state.search.toLowerCase())
          }
          else{
            
              return project.sID.toLowerCase().includes(this.state.search.toLowerCase())
            
            
          }
        }
      }
    }
    return false;
    })
    

function sortAlphaNum(a, b) {
  const reA = /^[-a-zA-Z]/g;
  const reN = /^[-0-9]/g;
  let aA = a.replace(reA, "");
  let bA = b.replace(reA, "");
  if (aA === bA) {
    let aN = parseInt(a.replace(reN, ""), 10);
    let bN = parseInt(b.replace(reN, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } 
  else {
    return aA > bA ? 1 : -1;
  }
}
    const sort=this.state.sort;
      filteredProjects.sort(function(a,b){
      if(sort==='latest'){
        return sortAlphaNum(b.semester,a.semester);
      }
      else{
        if(sort==='oldest'){
          return sortAlphaNum(a.semester,b.semester);
        }
        else{
          if(sort==='highest score'){
            return b.percentage - a.percentage;
          }
          else{
              return a.percentage - a.percentage;          
          }
        }
      }
  })

    
    const styledLogo={
      height:"50px",
      width:"50px",
      "marginRight":"20px"
    }
    
  return (
    <Router >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand"><img src={Logo} alt="N" style={styledLogo} ></img>Students'projects</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item " >
            <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item" >
            <Link to="/admin/projects" className="nav-link"  >Admin</Link>
          </li>
          <li className="nav-item" id="3">
            <Link to="/users/projects" className="nav-link" >Users</Link>
          </li>
        </ul>
        
      </div>
    </nav>
    
        <Switch>
              <Route exact path="/admin/projects" key='admin'>  
                             
                <Admin projects={filteredProjects} handleOnChange={this.handleOnChange} searchChange={this.onSearchChange} optionChange={this.onOptionChange} courseChange={this.onCourseChange} sortChange={this.onSortChange}/>
              </Route>
              <Route exact path="/users/projects" key='users'>
                 
                <Users projects={filteredProjects} handleOnChange={this.handleOnChange} searchChange={this.onSearchChange} optionChange={this.onOptionChange} courseChange={this.onCourseChange} sortChange={this.onSortChange}/>
              </Route>
              <Route exact path="/" key='home'>
                  <Home projects={this.state.projects}/>
              </Route>
              <Route path="/admin/projects/:id">
                      <DetailForAdmin projects={this.state.projects} deleteDataFromDb={this.deleteDataFromDb} project={this.state.project} getDataFromDb={this.getDataFromDb} />
              </Route>
              <Route path="/users/projects/:id">
                      <DetailForUsers project={this.state.project}/>
              </Route>
              <Route path="/admin/upload">
                      <Upload/>
              </Route>
            </Switch>
        </Router>
  );
  } 
}

export default App;
