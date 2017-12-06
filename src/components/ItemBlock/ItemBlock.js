import React from 'react'
import ItemHeader from "./ItemHeader/ItemHeader";
import AuxWrapper from "../../hoc/AuxWrap";
import ItemBody from "./ItemBody/ItemBody";

const ItemBlock = ( props ) => {
    return props.items.map(
        item => {
            return (
                <AuxWrapper
                    key={ item.title + item.date.getTime() }>
                    <ItemHeader
                        upvotes={ 5 }
                        optValue={ 6 }
                        title={ item.title }
                        author={ item.author }
                        description={ item.description }
                        date={ item.date }
                    />
                    <ItemBody/>
                </AuxWrapper>
            )
        }
    )
}

export default ItemBlock