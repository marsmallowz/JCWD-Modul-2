export default function Input(props) {
  const handleTextChange = (event) => {
    props.todoHandler({
      todo: event.target.value,
      date: props.todoState.date,
    });
  };
  const handleDateChange = (event) => {
    console.log(event.target.value);
    console.log(typeof event.target.value);

    props.todoHandler({
      todo: props.todoState.todo,
      date: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    Object.assign(props.todoState, { status: false });
    props.todoListHandler([...props.todoListState, props.todoState]);
    event.preventDefault();
  };

  return (
    <div id="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTextChange}
          value={props.todoState.todo}
        />
        <input
          type="date"
          // type="datetime-local"
          onChange={handleDateChange}
          value={props.todoState.date}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
