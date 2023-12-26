export type Item = {
listing_id: number,
url: string,
MainImage?: {url_570xN: string}, // ? уточняет что свойства может и не быть
title: string,
currency_code: string,
price: string,
quantity: number,
}

export type ItemProps = {
    item: Item,
}

export type ListItemsProps = {
    items: Array<Item>
}