import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const currentUser = {
        image: "./user-images/image-elijah.jpg",
        name: "Elijah Moss", 
        username: "hexagon.bestagon"
    }

    return(
        <Context.Provider value={currentUser}>
            {children}
        </Context.Provider>
    )
}




