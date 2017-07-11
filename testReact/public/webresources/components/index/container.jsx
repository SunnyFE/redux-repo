import React, { Component } from 'react'

export default class IndexContainer extends Component {
    constructor(options) {
        super(options)
    }

    renderBook(book) {
        const { name, description, id } = book
        return (
            <li key={id}>
                <h3>{name}</h3>
                <br />
                <i>{description}</i>
            </li>
        )
    }
    render() {
        const { books } = this.props

        return (
            <div>
                <ul>
                    {
                        books.map(book => this.renderBook(book))
                    }
                </ul>
            </div>
        )
    }
}