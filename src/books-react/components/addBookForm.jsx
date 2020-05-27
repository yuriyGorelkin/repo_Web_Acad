import * as React from 'react/cjs/react.development.js';

export class AddBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            author: "",
            price: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValidBook(book) {
        return book.id && book.title && book.author && true;
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValidBook(this.state)) {
            this.props.onSubmit(this.state);
            this.setState({ id: "", title: "", author: "", price: "" });
        } else alert("Заполните все поля формы!")
    }

    render() {
        return <form action="" onSubmit={this.handleSubmit}>
            <div>id <input type="text" name="id" onChange={this.handleChange} value={this.state.id} /></div>
            <div>Название <input type="text" name="title" onChange={this.handleChange} value={this.state.title} /></div>
            <div>Авторы <input type="text" name="author" onChange={this.handleChange} value={this.state.author} /></div>
            <div>Цена <input type="text" name="price" onChange={this.handleChange} value={this.state.price} /></div>
            <div><input type="submit" value="Добавить" onChange={this.handleChange} /></div>
        </form>
    }
}