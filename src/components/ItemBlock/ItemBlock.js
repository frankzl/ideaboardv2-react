import React from 'react'
import ItemHeader from "./ItemHeader/ItemHeader";

const ItemBlock = ( props ) => {
    return props.items.map(
        item => {return <ItemHeader upvotes={5} optValue={6} title={item.title} author={item.author} description={item.description}/>}
    )
}

export default ItemBlock