import * as React from 'react/cjs/react.development.js';

import { Like } from './like.jsx';

export class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.addBasketBook = this.addBasketBook.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ selected: !this.state.selected });
    }

    addBasketBook(e) {
        e.preventDefault();
        this.props.handleAddBasket(this.props.id);
    }

    render() {
        const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;

        return <div className={"book " + (this.state.selected ? "book_selected" : "book_default")}>
            <h3>{this.props.title}</h3>
            <img src={`https://placehold.it/100x120? text= ${this.props.title}`} alt='' />
            <p> Author: {this.props.author}</p>
            <p> Price: {price}</p>
            <a href="#" className="book_link-compare" onClick={this.handleClick}>Сравнить</a>&nbsp;
            <a href="#" className="book_link-basket" onClick={this.addBasketBook}> В корзину</a>
            <Like />
        </div>;
    }
}