import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadStarred } from '../actions'
import User from '../components/user'
import Repo from '../components/repo'
import List from '../components/list'
import zip from 'lodash/zip'


const loadData = ({ login, loadUser, loadStarred }) => {
    loadUser(login, ['name'])
    loadStarred(login)
}

class UserPage extends Components {
    static propTypes = {
        login: PropTypes.string.isRequired,
        user: PropTypes.object,
        starredPagination: PropTypes.object,
        starredRepos: PropTypes.array.isRequired,
        starredRepoOwners: PropTypes.array.isRequired,
        loadUser: PropTypes.func.isRequired,
        loadStarred: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login !== this.props.login) {
            loadData(nextProps)
        }
    }

    renderRepo([user, repo]) {

        return (
            <Repo
                user={user}
                repo={repo}
                key={user.fullName}
            />
        )
    }

    render() {
        const { user, login } = this.props

        if (!user) {
            return (
                <h1>
                    <i>Loading {login}{"'s profile..."}</i>
                </h1>)
        }

        const { starredPagination, starredRepoOwners, starredRepos } = this.props

        return (
            <div>
                <User user={user} />
                <hr />
                <List renderItem={this.renderRepo}
                    items={zip(starredRepoOwners, starredRepos)}
                    onLoadMoreClick={this.handleLoadMoreClick}
                    loadingLabel={`Loading ${login}'s starred...`}
                    {...starredPagination}
                />
            </div>
        )
    }

    handleLoadMoreClick() {
        this.props.loadStarred(this.props.login, true)
    }


}

const mapStateToProps = (state, ownProps) => {
    const login = ownProps.params.login.toLowerCase()
    const {
        pagination: { starredByUser },
        entitied: { users, repos }
    } = state

    const starredPagination = starredByUser[login] || { ids: [] }
    const starredRepos = starredPagination.ids.map(id => repos[id])
    const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

    return {
        login,
        starredRepos,
        starredRepoOwners,
        starredPagination,
        user: users[login]
    }
}

export default connect(mapStateToProps, {
    loadUser,
    laodStarred
})(UserPage)