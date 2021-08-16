let store = {
    _state: {
        postsData: [
            { id: 1, message: 'Hi, it is my first post', likes: 15 },
            { id: 2, message: 'And I love React', likes: 20 }
        ],

        newPostText: "Что у нас нового?",

        dialogsData: [
            { id: 1, name: 'Ivan' },
            { id: 2, name: 'Petr' },
            { id: 3, name: 'Nikolai' },
            { id: 4, name: 'Victor' },
            { id: 5, name: 'Alex' },
            { id: 6, name: 'Fedot' },
            { id: 7, name: 'Yury' },
            { id: 8, name: 'Serge' },
            { id: 9, name: 'JanClod' },
            { id: 10, name: 'Vasya' }
        ],

        messagesData: [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'How are you?' },
            { id: 4, message: 'Fine, thx, and you?' },
            { id: 5, message: 'I am OK.' }
        ]
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.newPostText,
                likes: 0
            };
            this._state.postsData.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
