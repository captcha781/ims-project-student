import isEmpty from "../lib/isEmpty";
import thrower from "../lib/thrower";

const validate = (value) => {
  let errors = {};
  if (isEmpty(value.studentRoll)) {
    errors.studentRoll = "Roll number cannot be empty";
  } else if (value.studentRoll.length < 11 || value.studentRoll.length > 12) {
    errors.studentRoll = "Roll number is in invalid format";
  }
  if(!isEmpty(errors)){
    thrower(errors)
    return false
  } else {
    return true
  }
  
};

export default validate;
