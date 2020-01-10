import React from 'react'
import View from '../View/View'

export default class Admin extends React.Component {

render(){
    return(
        <div>
            <h1>Welcome Boss!</h1>
            <View path='admin' projects={this.props.projects} handleOnChange={this.props.handleOnChange} searchChange={this.props.searchChange} optionChange={this.props.optionChange} courseChange={this.props.courseChange} sortChange={this.props.sortChange}/>
                   
        </div>
    )

}
}