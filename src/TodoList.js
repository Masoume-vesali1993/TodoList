import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addTtem = this.addTtem.bind(this);
    }

    addItem(e) {

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
            </div>
        );
    }
}

export default TodoList;