import React from 'react';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text+ ( props.item.done)}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={ this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
    const {onItemClick}=this.props;
    !item.done && onItemClick(item,event)
    
  }
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];


export const App = (props) => <TodoList
  items={props.items}
  onListClick={(event)=>event.target.innerText.match(/false/g) && console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

