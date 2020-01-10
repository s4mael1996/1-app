import React from 'react'
import View from '../View/View'


export default class Users extends React.Component{
    render(){
    return(
        <View path='users' projects={this.props.projects} handleOnChange={this.props.handleOnChange} searchChange={this.props.searchChange} optionChange={this.props.optionChange} courseChange={this.props.courseChange} sortChange={this.props.sortChange}/>
    )
}
}