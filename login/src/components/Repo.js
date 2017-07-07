import React, { Component } from 'react'
import { Link } from 'react-router'

const Reop = ({ repo, owner }) => {
    const { login } = owner
    const { name, description } = repo

    return (
        <div className="Repo">
            <h3>
                <Link to={`/${login}/${name}}`}>{name}</Link>
                {' by '}
                <Link to={`/login`}>{login}</Link>
            </h3>
            {description &&
                (<p>{description}</p>)
            }
        </div>
    )
}

Repo.propTypes = {
    repo:PropTypes.shape({
        name:PropTypes.string.isRequire,
        description:PropTypes.string
    }).isRequire,
    owner:PropTypes.shape({
        login:PropTypes.string.isRequire
    }).isRequire
}

export default Repo