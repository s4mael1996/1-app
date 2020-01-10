import React from 'react'
import './detail.css'
class Detail extends React.Component{
    render(){
        const styledImage ={height: 'auto',
        width: "100%",
            border:'2px solid grey',
            borderBottom:"2px solid grey",
        }
        return(
            <div className='container'>
    
                <img src={this.props.project.photo} alt={this.props.project.photo} style={styledImage} />
            <br/>
        <form>

            <div className="form-row"  style={{marginTop:'20px'}}>
    <div className="form-group col-md-2">
        <label htmlFor="student"></label>  
        <p style={{paddingTop:'10px', fontWeight:'bold'}}>Student</p>              
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputCity">ID</label>
      <input type="text" className="form-control" id="sID" value={this.props.project.sID} readOnly/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Name</label>
      <input type="text" className="form-control" id="sName" value={this.props.project.sName} readOnly/> 
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputZip">Year</label>
      <input type="text" className="form-control" id="sYear" value={this.props.project.sYear} readOnly/>
    </div>
            </div>
<hr/>
            <div className="form-row" style={{marginTop:'10px'}}>
        <div className="form-group col-md-2">
            <label htmlFor="course"></label>  
            <p style={{paddingTop:'10px',fontWeight:"bold"}}>Course</p>              
        </div>
        <div className="form-group col-md-5">
            <label htmlFor="id">ID</label>
            <input type="text" className="form-control" id="cID" value={this.props.project.cID} readOnly/>
        </div>
        <div className="form-group col-md-5">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="cName" value={this.props.project.cName} readOnly/>
        </div>
            </div>
            
            <hr/>
<h3 style={{margin:'0 auto',width:'165px',borderBottomStyle:'solid',borderRightStyle:'solid',borderBottomWidth:'1px',borderRightWidth:'1px',boxShadow: '5px 8px #888888'}}>Assignment</h3>
<br/>
<div className="form-group row" >
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" id="aName" value={this.props.project.aName} readOnly/>
    </div>
    <label htmlFor="percentage" className="col-sm-2 col-form-label">Percentage</label>
    <div className="col-sm-1">
      <input type="text" className="form-control" id="percentage" value={this.props.project.percentage} readOnly style={{width:'70px'}}/>
    </div>
    <label htmlFor="semester" className="col-sm-2 col-form-label">Semester</label>
    <div className="col-sm-2">
      <input type="text" className="form-control" id="percentage" value={this.props.project.semester} readOnly/>
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="aDescription" rows="3" value={this.props.project.aDescription} readOnly></textarea>    
    </div>
  </div>
  <br/>
<hr/>
<br/>
<div className="form-group row" >
    <label htmlFor="techUse" className="col-sm-2 col-form-label">Technology used</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="techUse" value={this.props.project.techUsed} readOnly/>
    </div>
    <label htmlFor="application" className="col-sm-2 col-form-label">Application</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="application" value={this.props.project.application} readOnly/>
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="scope" className="col-sm-2 col-form-label">Scope</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="scope" rows="3" value={this.props.project.scope} readOnly></textarea>    
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="description" rows="3" value={this.props.project.description} readOnly></textarea>    
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="photo" className="col-sm-2 col-form-label">PhotoUrl</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="photo" rows="2" value={this.props.project.photo} readOnly></textarea>    
    </div>
  </div>
  <br/>
<hr/>
            
        </form>
            </div>

            

        )
    }
}
export default Detail;