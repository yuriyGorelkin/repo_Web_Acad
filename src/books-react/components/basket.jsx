import * as React from 'react/cjs/react.development.js';

export class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBasketItem = this.deleteBasketItem.bind(this);
    }

    deleteBasketItem(e) {
        e.preventDefault();
        this.props.handleRemoveBasket(e.target.id);
    }

    getIndexById(id) {
        for (let p in this.props.dataBook)
            if (this.props.dataBook[p]['id'] == id)
                return p
    }


    render() {
        let items = [],
            j,
            sum = 0;
        for (let i in this.props.items) {
            if(!this.props.items[i]) continue;
            j = this.getIndexById(i);
            sum += this.props.items[i] * this.props.dataBook[j]['price'];
            items.push(
                <div className="basket-item" key={i}>
                    <a href="#">&#171; {this.props.dataBook[j]['title']} &#187;</a>
                    <span>{this.props.items[i]}шт.</span>
                    <span>{this.props.dataBook[j]['price']}руб.</span>
                    <a href="#" onClick={this.deleteBasketItem} id={i}> Удалить </a>
                </div>
            );
        }

        return <div className="basket">
            <h3>Корзина</h3>
            {items}
            <div className="basket-item">
                <span>Всего <b>{sum}</b> руб.</span>
            </div>
        </div>;
    }
}