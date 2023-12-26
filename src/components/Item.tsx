import {ItemProps} from '../types/index.ts'

export const Item = ({item}:ItemProps) => {
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN} />  {/*? уточняет что свойства url_570xN может и не быть*/}
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.currency_code}: {item.price}</p>
                <p className="item-quantity level-medium">{item.quantity} left</p>
            </div>
        </div>
        );
}