import './index.css'

const TodoItem = props => {
  const {eachListItem, onDelete} = props
  const {id, title} = eachListItem
  const onchange = () => {
    onDelete(id)
  }
  return (
    <div className="flexContainer">
      <p>{title}</p>
      <button type="button" onClick={onchange}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
