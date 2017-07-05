import React,{Component,Proptype} from 'react'
import {connect} from 'react-redux'
import {loadRepo,loadStargazers} from '../actions'
import Repo from './components/repo'
import User from './components/user'
import List from './components/list'

class RepoPage extends Component {
  componentWillMount(){
    this.loadData(this.props)
  }

  componentWillReceiveProps(nextProps){
    this.loadData(nextProps)
  }

  loadData(props){
    const {fullName} = props

    props.loadRepo(fullName,['description'])
    props.loadStargazers(fullName)
  }

  render(){
    const {repo,owner,name} = this.props

    if(!repo || !owner){
      return (<h1><i>Loading {name} now!</i></h1>)
    }

    const {stargazers,stargazersPagination} = this.props

    return (
      <div>
        <Repo repo={repo} owner={owner} />
        <hr />
        <List 
          renderItem={this.renderUser}
          items={stargazers}
          onLoadMoreClick={this.handleLoadMoreClick}
          loadingLabel={`Loading stargazersof ${name}`}
          {...stargazersPagination}          
        />

      </div>
    )
  }

  handleLoadMoreClick(){}

  renderUser(){

  }
}

const mapStateToProps = (state,ownProps) => {
  const login = ownProps.params.login.toLowerCase()
  const name = ownProps.params.name.toLowerCase()

  const {
    pagination:{},
    
  }
}