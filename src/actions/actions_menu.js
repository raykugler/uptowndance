export default (state = false, action)=>{
    switch(action.type){
        case 'OPEN_MENU':
            return state: true
        case 'CLOSE_MENU'
            return state: false
        default:
            return state    
    
    }
}