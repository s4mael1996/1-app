import React from 'react'
import Search from '../Search/Search'
import Button from 'react-bootstrap/Button'
import {
  Link,
  
} from "react-router-dom"; 


  class View extends React.Component{
    

  
    render(){
      
      const headCentered={
        "textAlign":"center",
        
      }
      
      let n=1;
      const tbData=this.props.projects.map(project =>
        
          <tr key={project.pID}>
    <th scope="row" >{n++}</th>
    <td>{project.aName}</td>
    <td>{project.sID}</td>
    <td>{project.sName}</td>
    <td>{project.cID}</td>
    <td>{project.cName}</td>
    <td>{project.semester}</td>
    <td><Link to={`/${this.props.path}/projects/${project.pID}`}><Button onClick={this.props.handleOnChange.bind(this,project)} variant='primary'>View</Button></Link>
    </td>
      </tr>
        
        )
    let uploadLink;    
    if(this.props.path==='admin'){
      uploadLink=(        <Link to="/admin/upload" ><button type="button" className="btn btn-danger" >Upload Imgs/Vids</button></Link>
      )
    }
    else{
      uploadLink=''
    }    
    const table = (
      <table className="table table-hover table-bordered" style={headCentered}>
  <thead className="thead-dark" > 
    <tr key='a'>
      <th scope="col" rowSpan="2">#</th>
      <th scope="col" rowSpan="2">Assignment</th>
      <th scope="col" colSpan="2">Student </th>
      <th scope="col" colSpan="2">Course</th>
      <th scope="col" rowSpan="2">Semester</th>
    <th scope="col" rowSpan="2">{uploadLink}</th>
      
    </tr>
    <tr key='b'>
      
      <th scope="col" >ID </th>
      <th scope="col" >Name</th>
      <th scope="col" >ID </th>
      <th scope="col" >Name</th>
    </tr>
  </thead>
  <tbody>
    {tbData}
  </tbody>
</table>
  )
  
    return(
      
        <div className="container">
          <br/>
          
        <Search searchChange={this.props.searchChange} optionChange={this.props.optionChange} courseChange={this.props.courseChange} sortChange={this.props.sortChange}/>
        <br/>
        {table}
        
        </div>
    )
}
}
export default View;