import * as Yup from "yup";
const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/[a-zA-Z]+ [a-zA-Z]+$/, "Please provide a valid full name")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
class User {
  constructor(id, name, email, orders) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = orders;
  }
  validate() {
    return userSchema.validate(this, { abortEarly: false });
  }
}

export default User;
