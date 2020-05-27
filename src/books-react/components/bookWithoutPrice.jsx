import * as React from 'react/cjs/react.development.js';

import {Like} from './like.jsx';

export class BookWithoutPrice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;

        return <div className={"book book_default"}>
            <h3>{this.props.title}</h3>
            <img src={`https://placehold.it/100x120? text= ${this.props.title}`} alt='' />
            <p> Author: {this.props.author}</p>
            <p> Price: {price}</p>
            <Like />
        </div>;
    }
}