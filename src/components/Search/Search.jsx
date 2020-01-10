import React from 'react'
export default class Search extends React.Component{


render(){
    return(
      //<div className="container">
<form>
    <div className='form-row'>
        <div className="form-group col-md-4">
            
            <select id="courseFilter" className="form-control" onChange={this.props.courseChange}>
              <option value="None" defaultValue>Choose course...</option>
              <option value="Web Programming">Web Programing</option>
              <option value="Programming 1">Programming 1</option>
              <option value="intro To Programming">Intro To Programming</option>
              <option value="DtCmnctNCtCpt">Data communication and Net-Centric Computing</option>
             
            </select>
          </div>
          <div className="form-group col-md-4">
            
            <select id="searchOptions" className="form-control" onChange={this.props.optionChange}>
              <option defaultValue='None'>Choose search option...</option>
              <option value="semester">Semester</option>
              <option value="sID">Student's ID</option>
              <option value="sName">Student's Name</option>   
              <option value="aName">Assignment's name</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            
            <select id="sortOption" className="form-control" onChange={this.props.sortChange}>
              <option value="None" defaultValue>Choose sort option...</option>
              <option value="latest">Latest project</option>
              <option value="highest score">Highest score</option>
              <option value="lowest score">Lowest score</option>
              <option value="oldest">Oldest project</option>
            </select>
          </div>
          
          
       </div> 
       <div className='form-row'>
         <div className="form-group col-md-12">
            <input type="search" className="form-control" id="inputSearch" placeholder="Search keywords here!" onChange={this.props.searchChange}/>          
          </div>
       </div>
</form>

    )
}
}