export const createOrder = (order) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const author = getState().firebase.auth.uid;
        console.log(order);
        firestore.collection('orders').add({
            ...order,
            authorFirstName: profile.name,
            authorLastName: profile.surname,
            authorId: author,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_ORDER', order});
        }).catch((err)=>{
            dispatch({type:'CREATE_ORDER_ERROR', err});
        })
    }
}