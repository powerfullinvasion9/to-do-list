import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./ToDoList.css"


class ToDoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (items) {
      return (items.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  addItem(e){

    if(this._inputElement.value !== ""){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items:prevState.items.concat(newItem),
        };
      })

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }


  render(){
    return(
      <div className="todoListMain">
        <div className="header">
          <form onSubmit = {this.addItem}>
            <input  ref={(a) => this._inputElement = a}
                    placeholder="Privet student Ipoita pishi suda svoi plany">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                  delete={this.deleteItem}/>
      </div>
    )
  }
}

export default ToDoList;
