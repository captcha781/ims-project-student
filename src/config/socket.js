import { io } from "socket.io-client";
import Store from "../redux/store"
import config from "../config"

const socketFun = () => {

    let auth = Store.getState().auth
    if (auth.isAuth) {
        return io(config.SOCKET, {
            autoConnect: true,
        });
    } else {
        return io(config.SOCKET, {
            autoConnect: true,
        });
    }
}

let socket = socketFun()

socket.on("connection",data => {
    console.log("runner");
    let auth = Store.getState().auth
    console.log(data);
    if(auth.isAuth){
        socket.emit("userUpdater",auth.user._id)
    }
})

export { socket }