export const createProject = (project) => {
  return (dispatch,getState, {getFirebase, getFirestore}) => {
      //synchronizacja z DataBase
      const firestore = getFirestore();
      firestore.collection('projects').add({
          ...project,
          authorFirstName: 'Net',
          authorLastName: 'ninjaaa',
          authorId: 1234,
          createdAt: new Date()
      }).then(()=>{
          dispatch({type: 'CREATE_PROJECT', project});
      }).catch((err)=>{
          dispatch({type:'CREATE_PROJECT_ERROR', err});
      })
     
  }
};