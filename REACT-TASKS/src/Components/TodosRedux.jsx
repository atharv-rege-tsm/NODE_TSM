import { useSelector } from 'react-redux'
const TodosRedux = () => {
    const todos = useSelector((state) => state.todos);


    return (
        <div className="flex flex-col gap-2 mt-4">
            {todos.map((todo, index) => (
                <div
                    key={index}
                    className="bg-white px-4 py-2 rounded shadow"
                >
                    {todo.text}
                </div>
            ))}
        </div>
    );
};

export default TodosRedux;