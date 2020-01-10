import React from 'react'
import '../View/detail.css'
//import axios from 'axios';

class Upload extends React.Component{
   /* constructor(props){
        super(props)
        this.state={
            files:[]
        }
    }
    componentDidMount(){
    // this.getImgFromDb()
    }
    getImgFromDb=()=>{
        axios.get('http://localhost:3000/images').then(res=>{
            let files = res.data
            this.setState({files:files})
        })
    } */

    Post = e => {
        e.preventDefault()
        const file = document.getElementById('file1').files
        const formData = new FormData()
        for(var i=0;i<file.length;i++){
        formData.append('img', file[i])
        }
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
        }).then(r => {
          console.log(r)
        })
        console.log(file[file.length-1])
      }
    render(){
        console.log("Still not figure out how to display")
        return(
           
            <div className="row">
            <div className="col-md-6 m-auto">
                <h1 className="my-4">Images/ Videos upload</h1>
                <form>
                    <div className="custom-file mb-3">
                        <input type="file" className="custom-file-input" multiple name="file" id="file1" />
                        <label className="custom-file-label" htmlFor="file1" id="file-label">Choose file</label>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary btn-block" onClick={this.Post}/>
                </form>
            </div>
        </div>
        
        )  
        }
}
export default Upload;