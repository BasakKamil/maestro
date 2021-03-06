export const createProject = (project) => {
  return (dispatch,getState, {getFirebase, getFirestore}) => {
      //synchronizacja z DataBase
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const author = getState().firebase.auth.uid;
      firestore.collection('projects').add({
          ...project,
          authorFirstName: profile.name,
          authorLastName: profile.surname[0],
          authorId: author,
          createdAt: new Date()
      }).then(()=>{
          dispatch({type: 'CREATE_PROJECT', project});
      }).catch((err)=>{
          dispatch({type:'CREATE_PROJECT_ERROR', err});
      })
     
  }
};