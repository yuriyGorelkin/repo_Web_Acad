import * as React from 'react';
import { render } from 'react-dom';

import { Book } from './bookElement.jsx';
import { BookWithoutPrice } from './bookWithoutPrice.jsx';
import { AddBookForm } from './AddBookForm.jsx';
import { Basket } from './Basket.jsx';

const dataBook = [
    { id: 1, title: "Book_1", author: "Author_1", price: 500 },
    { id: 2, title: "Book_2", author: "Author_2", price: 1200 },
    { id: 3, title: "Book_3", author: "Author_3", price: null },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBook: dataBook,
            items: []
        };
        this.updateBooks = this.updateBooks.bind(this);
        this.addBasket = this.addBasket.bind(this);
        this.removeItemFromBasket = this.removeItemFromBasket.bind(this);
    }
    
    updateBooks(newBook) {
        let tmp = this.state.dataBook;
        tmp.push(newBook);
        this.setState({ dataBook: tmp });
    }
    
    addBasket(id) {
        let items = this.state.items.slice(0);
        items[id] = id in items ? ++items[id] : 1;
        this.setState({ items: items });
        console.log(items, id);
    }

    removeItemFromBasket(id) {
        let items = this.state.items.slice(0), result = [];
        items[id] = 0;
        this.setState({items: items});
    }

    render() {
        const books = dataBook.map(item => {
            return item.price ?
                <Book
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                    key={item.id}
                    handleAddBasket={this.addBasket}
                /> :
                <BookWithoutPrice title={item.title} author={item.author} price={item.price} key={item.id} />
        });

        return <div>
            <Basket 
            items = {this.state.items}
            dataBook = {this.state.dataBook}
            handleRemoveBasket = {this.removeItemFromBasket}
            />
            <AddBookForm onSubmit={this.updateBooks} />
            {books}
        </div>
    }
}

render(<App />, document.querySelector('#root'));

