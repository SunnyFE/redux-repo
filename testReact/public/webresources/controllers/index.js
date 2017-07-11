import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IndexContainer from '../components/index/container'

const randomKey = () => Math.random().toString(36).sub(2)



let books = [
    {
        id: randomKey(),
        name: '浪潮之巔',
        description: '《浪潮之巅》是吴军所著图书，现已更新至第三版，由人民邮电出版社出版，主要讲述了IT产业发展的历史脉络和美国硅谷明星公司的兴衰沉浮。'
    }, {
        id: randomKey(),
        name: '清醒思考的艺术',
        description: '清醒思考的艺术是 2013年中信出版社出版的一本图书，作者罗尔夫·多贝里，译者是朱刘华。'
    }
]

class WrapperComponent extends Component {
    constructor() {
        super()
    }

    render() {
        const books = this.props.books

        return (
            <div>
                <IndexContainer books={books} />
                <button onClick={this.changeBooks.bind(this)}>changeBooks</button>
            </div>
        )
    }

    changeBooks({ description = '', name = '' }) {
        let book = {
            id: randomKey(),
            name: name,
            description: description
        }

        this.props.books = [book]
    }
}

ReactDOM.render(
    React.createElement(WrapperComponent, {
        books
    }),
    document.getElementById('root'),
    function () {
        console.log(arguments)
    })
