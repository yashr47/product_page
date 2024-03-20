export const productReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOOL': {
            const currTools = state.tools
            currTools.push(action.payload)
            return {...state, tools: currTools}
        }
        case 'REMOVE_TOOL': {
            const remTool = action.payload
            const currTools = state.tools.filter(tool => tool.value !== remTool.value)
            return {...state, tools: currTools}
        }
        default:
            break;
    }
}