import { combineReducers, legacy_createStore } from "redux";
import {currentUserReducer,initialCurrentuser} from '../features/CurrentUser/CuttentUserSlice'
 import {inputUserReducer,initialInputUser} from '../features/InputUser/InputUserSlice'
import { todosReduser,initialTodosUser } from "../features/Todos/TodosSlice";



const store=legacy_createStore(combineReducers({
todos:todosReduser,
inputUser:inputUserReducer,
currentUser:currentUserReducer,

}),
    
{
    todos:initialTodosUser,
currentUser:initialCurrentuser,
inputUser:initialInputUser,

})


export default store