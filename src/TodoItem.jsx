export default function TodoItem({
    title,
    done,
    toggleTodoDone,
    deleteTodo,
    id,
}) {
    return (
        <div className={"todo " + done}>
            <h2>{title}</h2>
            <div className="buttons">
                <button onClick={() => toggleTodoDone(id)}>
                    {done ? "undone" : "done"}
                </button>
                <button onClick={() => deleteTodo(id)}>Delete</button>
            </div>
        </div>
    );
}
