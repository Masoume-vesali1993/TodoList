import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addTtem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement !== "") {
            var newItem ={
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault(); //add part console text object
    }



    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTtem}>
                        <input ref={(a) => this._inputElement =a}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;