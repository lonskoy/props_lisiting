import { Item } from './Item';
import { ListItemsProps } from '../types/index'


export const ItemList = ({ items }: ListItemsProps) => {
    return (
        <>
            {items.map(item => <Item item={item} key={item.listing_id} />)}
        </>
    );
}
