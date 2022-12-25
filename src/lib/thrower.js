import { message } from "antd"

const thrower = (errors) => {
    let keys = Object.keys(errors)
    for (let i = 0; i < keys.length ; i++){
        message.error(errors[keys[i]])
    }
    return true
}

export default thrower