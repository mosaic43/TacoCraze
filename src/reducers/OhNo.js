const Content = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
        return state.map( viewContent =>
          viewContent.id === action.id ? { ...viewContent, completed: !ViewContent.completed } : viewContent
        )
      default:
        return state
    }
  }
  
  export default Content