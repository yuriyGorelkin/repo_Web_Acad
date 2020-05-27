import * as React from "react/cjs/react.development.js";

export class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likes: 0 };
        this.likeClick = this.likeClick.bind(this);
    }

    likeClick(e) {
        e.preventDefault();
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }));
    }

    render() {
        return (
            <a href="#" className="book_like" onClick={this.likeClick}>&#10084; Нравится {this.state.likes}</a>
        );
    }
}