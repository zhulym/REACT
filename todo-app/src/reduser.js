// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    const date = new Date().toLocaleDateString('ru-RU', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

    switch (action.type) {
        case 'add-edit':
            if (action.edited) {
                return state.map((todo) => {
                    if (todo.title === action.titleBefore) {
                        todo.title = action.title;
                        todo.date = `Edited ${date}`
                    }
                    return todo;
                })
            }
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.title,
                    completed: false,
                    date: date,
                    deadLineTime: new Date().getTime(),
                    className: ''
                }
            ]
        // case 'toggle':
        //     return state.map((todo) => {
        //         if (todo.title === action.title) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     })
        case 'toggle':
            return state.map((todo) => {
                if (todo.title === action.title) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }

                return todo;
            });
        case 'remove':
            return state.filter((todo) => todo.title !== action.title);
        default:
            return state;
    }
}