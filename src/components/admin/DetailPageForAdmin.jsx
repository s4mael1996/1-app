import React from 'react'
import '../View/detail.css'
import axios from 'axios';

    
class Detail extends React.Component{
constructor(props){
    super(props)
    this.state={
        pID:"",
        sID:"",
        sName:"",
        sYear:"",
        cID:"",
        cName:"",
        aName:"",
        percentage:"",
        aDescription:"",
        techUsed:"",
        application:"",
        scope:"",
        description:"",
        photo:"",
        semester:"", 
        selectedFile:null
    }

}
componentDidMount(){
    this.getDataFromDb();
}
getDataFromDb=()=>{
    var url = window.location.href;


  var res = url.split("/");
  var pos = res.indexOf('projects');
  var result = res[pos+1]; 

    axios.get(`http://localhost:3000/projects/${result}`)
      .then(res => {
        let project = res.data;
        console.log(project[0].sID)
        this.setState({ 
            pID:project[0].pID,
            sID:project[0].sID,
            sName:project[0].sName,
            sYear:project[0].sYear,
            cID:project[0].cID,
            cName:project[0].cName,
            aName:project[0].aName,
            percentage:project[0].percentage,
            aDescription:project[0].aDescription,
            techUsed:project[0].techUsed,
            application:project[0].application,
            scope:project[0].scope,
            description:project[0].description,
            photo:project[0].photo,
            semester:project[0].semester
         });
      })
    
  }

 
addNew = () => {
    
    if(this.validation("add")){
    let idToBeAdded = (this.props.projects.length +1).toString() ;
    const {sID,sName,cID,cName,photo,aName,percentage,aDescription,techUsed,application,scope,description,sYear,semester} = this.state;
    axios.post('http://localhost:3000/add/:pID', {
        pID:idToBeAdded,   
        sID:sID,
        sName:sName,
        sYear:sYear,
        cID:cID,
        cName:cName,
        photo:photo,
        aName:aName,
        percentage:percentage,
        aDescription:aDescription,
        techUsed:techUsed,
        application:application,
        scope:scope,
        description:description,
        semester:semester
        
    }).then(res=>{
        this.props.getDataFromDb()
        
    });
    
}

//     let files = document.getElementById('file1').files
//     const data = new FormData()
//    for(var x = 0; x<files.length; x++) {
//        data.append('file', files[x])
//    }

//   axios.post("http://localhost:3000/upload", data, { 
//       // receive two    parameter endpoint url ,form data
//   })

// .then(res => { // then print response status
//     window.history.back()
//     console.log(res.statusText)
//  })

};
  update = () => {
    if(this.validation("update")){
    var url = window.location.href;

    var res = url.split("/");
    var pos = res.indexOf('projects');
    var result = res[pos+1]; 
    axios.put(`http://localhost:3000/update/${result}`, { 
        sID:this.state.sID,
        sName:this.state.sName,
        sYear:this.state.sYear,
        cID:this.state.cID,
        cName:this.state.cName,
        photo:this.state.photo,
        percentage:this.state.percentage,
        techUsed:this.state.techUsed,
        aName: this.state.aName,
        aDescription:this.state.aDescription,
        description:this.state.description,
        scope:this.state.scope,
        application: this.state.application,
        semester: this.state.semester,
    }).then(res=>{
        this.props.getDataFromDb()
        window.history.back()
    });
    
  }};
  delete = () => {
    axios.delete('http://localhost:3000/delete', {
      data: {
        pID: this.state.pID
      }
    }).then(res=>{
        this.props.deleteDataFromDb()
        //this.props.getDataFromDb()
        window.history.back()
    })
  };


handleChange=(e)=> {
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)
}

onChangeFiles=event=>{
    this.setState({
     selectedFile: event.target.files,
    })
    console.log(this.state.selectedFile)
}
validation(option){
    if(this.state.percentage>100 || this.state.percentage<0){
        alert('Error! Percentage must be from 0 - 100');
        return false
    }
    else{
        var letter = /^[a-zA-Z\s]+$/;
        var letterNum =/^[0-9a-zA-Z\s]+$/;
        if(!this.state.sName.match(letter) || !this.state.aName.match(letter)||!this.state.cName.match(letterNum)){
            alert('Name must contain only alphabet letters');
            return false
        }
        else{
            if(option==="add"){
            let project = this.props.projects.find(project=>project.sID===this.state.sID)
            if(project !== undefined){
                if(project.sName!==this.state.sName){
                    alert(`This student ID has been already linked to student named ${project.sName}`)
                    return false
            }}  
            project = this.props.projects.find(project=>project.cID===this.state.cID)
            if(project!==undefined){
                if(project.cName!==this.state.cName){
                    alert(`This course ID has been already linked to course named ${project.cName}`)
                    return false
                }}
            project = this.props.projects.find(project=>project.cName===this.state.cName)
            if(project!==undefined){
                if(project.cID!==this.state.cID){
                    alert(`This course name has been already linked to course ID: ${project.cID}`)
                    return false
                    }}
                }
            else{
                let projects = this.props.projects.filter(project=>project.pID!==this.state.pID)
                let project = projects.find(project=>project.sID===this.state.sID)
            if(project !== undefined){
                if(project.sName!==this.state.sName){
                    alert(`This student ID has been already linked to student named ${project.sName}`)
                    return false
            }}  
            project = projects.find(project=>project.cID===this.state.cID)
            if(project!==undefined){
                if(project.cName!==this.state.cName){
                    alert(`This course ID has been already linked to course named ${project.cName}`)
                    return false
                }}
            project = projects.find(project=>project.cName===this.state.cName)
            if(project!==undefined){
                if(project.cID!==this.state.cID){
                    alert(`This course name has been already linked to course ID: ${project.cID}`)
                    return false
                    }}
            }        
            return true;
        }
           
}
}

reset(){
    this.setState({
        sID:'',sName:'',sYear:'',cID:'',cName:'',aName:'',percentage:'',aDescription:'',techUsed:'',application:'',
        scope:'',description:'',photo:''
    })
}





    
    render(){
        
        
        
        const styledImage ={height: 'auto',
        width: "100%",
            border:'2px solid grey',
            borderBottom:"2px solid grey",
        }
        return(
            <div className='container'>
                <img src={this.state.photo} alt={this.state.photo} style={styledImage} />
            <br/>
        <form>

            <div className="form-row"  style={{marginTop:'20px'}}>
    <div className="form-group col-md-2">
        <label htmlFor="student"></label>  
        <p style={{paddingTop:'10px', fontWeight:'bold'}}>Student</p>              
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="id">ID</label>
      <input type="text" className="form-control" id="sID" value={this.state.sID } name='sID' onChange={this.handleChange.bind(this)}/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="sName" value={this.state.sName } name="sName" onChange={this.handleChange.bind(this)}/> 
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="year">Year</label>
      <input type="number" className="form-control" id="sYear" value={this.state.sYear } name="sYear" onChange={this.handleChange.bind(this)}/>
    </div>
            </div>
<hr/>
            <div className="form-row" style={{marginTop:'10px'}}>
        <div className="form-group col-md-2">
            <label htmlFor="course"></label>  
            <p style={{paddingTop:'10px', fontWeight:'bold'}}>Course</p>              
        </div>
        <div className="form-group col-md-5">
            <label htmlFor="id">ID</label>
            <input type="text" className="form-control" id="cID" value={this.state.cID} name="cID" onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="form-group col-md-5">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="cName" name="cName" value={this.state.cName} onChange={this.handleChange.bind(this)}/>
        </div>
            </div>
            
            <hr/>
<h3 style={{margin:'0 auto',width:'165px',borderBottomStyle:'solid',borderRightStyle:'solid',borderBottomWidth:'1px',borderRightWidth:'1px',boxShadow: '5px 8px #888888'}}>Assignment</h3>
<br/>
<div className="form-group row" >
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" id="aName"  value={this.state.aName} name="aName" onChange={this.handleChange.bind(this)}/>
    </div>
    <label htmlFor="percentage" className="col-sm-2 col-form-label">Percentage</label>
    <div className="col-sm-1">
      <input type="number" className="form-control" id="percentage" value={this.state.percentage} name='percentage' onChange={this.handleChange.bind(this)} style={{width:'70px'}}/>
    </div>
    <label htmlFor="semester" className="col-sm-2 col-form-label">Semester</label>
    <div className="col-sm-2">
      <input type="text" className="form-control" id="percentage" value={this.state.semester} name='semester' onChange={this.handleChange.bind(this)}/>
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="aDescription" rows="3" value={this.state.aDescription} name='aDescription' onChange={this.handleChange.bind(this)}></textarea>    
    </div>
  </div>
  <br/>
<hr/>
<br/>
<div className="form-group row" >
    <label htmlFor="techUse" className="col-sm-2 col-form-label">Technology used</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="techUsed" name='techUsed' value={this.state.techUsed} onChange={this.handleChange.bind(this)}/>
    </div>
    <label htmlFor="application" className="col-sm-2 col-form-label">Application</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="application" name='application' value={this.state.application} onChange={this.handleChange.bind(this)}/>
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="scope" className="col-sm-2 col-form-label">Scope</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="scope" rows="3" name='scope' value={this.state.scope} onChange={this.handleChange.bind(this)}></textarea>    
    </div>
  </div>
  <div className="form-group row" >
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
    <textarea className="form-control" id="description" rows="3" name='description' value={this.state.description|| "gfdg"} onChange={this.handleChange.bind(this)}></textarea>    
    </div>
  </div> 
        </form>
        
<hr/>
        
        <button type="button" className="btn btn-warning" onClick={this.reset.bind(this)}>Reset</button>
  <button type="button" className="btn btn-primary" onClick={this.update.bind(this)}> Update </button>
    <button type="button" className="btn btn-danger" onClick={this.delete.bind(this)}>Delete</button> 
<button type="button" className="btn btn-secondary" onClick={this.addNew.bind(this)}>Add New</button>
</div>
            
        )
    }
}
export default Detail;