import { notifications } from '@syncfusion/ej2';
import React, { createContext,useContext,
    useState } from 'react';

    const StateContext = createContext();

    //initially these states of chat,cart,userProfile,notification etc are closed
    //we will click and open up
    const initialState ={
        chat: false,
        cart: false,
        userProfile:false,
        notification:false,
    }

//ContextProvider is basic react arrow fxn component having children props
export const ContextProvider = ({children}) => {

    //adding all the states/logic we'll have
    const [activeMenu,setActiveMenu] = useState(true);
    //for Navbar nothing clicked at start
    const [isClicked,setIsClicked] = useState(initialState);

    //this state will take care of screen size to handle our webpage on small devices
    const [screenSize,setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] :true});
        //to handle this we spread the initialState i.e. everything is false 
        //and then change the value to be True
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }} 
            //all the values passed will be passed throughout the app
        >
        {children}
        {/* always returned  children in Context */}
        </StateContext.Provider>
    )
}

//to use the StateContext in our app exporting it to our app
export const useStateContext = () => useContext(StateContext);