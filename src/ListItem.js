import React from "react";
import "./ListItem.css";
import FlipMove from 'react-flip-move';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaTrash} from "react-icons/fa";


function ListItem(props){
    const items = props.items;
    const ListItem = items.map(item => 
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value = {item.text} 
                    onChange={(e) => {
                        props.setUpdate(e.target.value, item.key)
                    }}/> 
                <span>
                    <button type="button"  onClick={ () => props.deleteItem(item.key)}><FaTrash /></button>
              
                   
                </span>
                </p>
            </div>
        })
    return(
      <div>
          <FlipMove duration={500} easing="ease-in-out">
              {ListItem}
          </FlipMove>
          </div>
    )
}

export default ListItem;