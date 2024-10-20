import { createContext } from "react";
import { io } from "socket.io-client";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const socket = io("http://localhost:3000");

    const currentUser = { // for demo propuses, this works as a default, logged-in user
        image: "./user-images/image-elijah.jpg",
        name: "Elijah Moss", 
        username: "hexagon.bestagon"
    }

    return(
        <Context.Provider value={{currentUser: currentUser, socket: socket}}>
            {children}
        </Context.Provider>
    )
}




