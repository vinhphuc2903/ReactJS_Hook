function logger(reducer){
    return(prevStave, action) =>{
        console.group(action.type)
        console.log('prevState:',prevStave)
        console.log('Action:',action)
        const newState = reducer(prevStave, action)
        console.log('Next state:', newState)
        console.groupEnd()
        return newState
    }
}
export default logger