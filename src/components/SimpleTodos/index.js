import {Component} from 'react'

import './index.css'

import TodoItems from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosListitem: initialTodosList}

  onDelete = id => {
    const {initialTodosListitem} = this.state
    const newList = initialTodosListitem.filter(each => each.id !== id)
    this.setState({
      initialTodosListitem: newList,
    })
  }

  render() {
    const {initialTodosListitem} = this.state
    return (
      <div className="mainContainer">
        <div className="container">
          <h1>Simple Todos</h1>
          <ul>
            {initialTodosListitem.map(eachitem => (
              <TodoItems
                onDelete={this.onDelete}
                eachListItem={eachitem}
                key={eachitem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
