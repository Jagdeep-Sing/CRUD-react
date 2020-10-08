const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state.concat([action.data]);
        case 'DELETE_USER':
            return state.filter((user)=>user.id !== action.id);
        case 'EDIT_POST':
            return state.map((user)=>user.id === action.id ? {...user,editing:!user.editing}:user);
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        title:action.data.newTitle,
                        message:action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}
export default userReducer;