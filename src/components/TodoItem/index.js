// Write your code here
const TodoItem = props => {
  const {todoUsers, deleteTodo} = props
  const {title, id} = todoUsers

  const onDeleteUser = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <li>
        <h1>{title}</h1>
        <button onClick={onDeleteUser} type="button">
          Delete
        </button>
      </li>
    </div>
  )
}
export default TodoItem
