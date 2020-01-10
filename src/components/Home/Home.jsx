import React from 'react';
import SlideShow from './carousel/Carousel'       
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
   
    render(){ 
    return(
        
        <div className='container' >
            <br/>
        <h1>Welcome To Rmiter's projects page</h1>
            <br/>
                <SlideShow />
            
        </div>
    )
}
}
export default Home;