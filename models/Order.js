import * as Yup from "yup";

const orderSchema = Yup.object().shape({
  userId: Yup.string().required(),
  name: Yup.string()
    .matches(/^[^\d]+$/, "Name cannot contain digits")
    .required(),
  email: Yup.string().email().required(),
  street: Yup.string()
    .matches(/^[^\d]+(\d+)$/, "Street consists of letters and ends with digits")
    .required(),
  city: Yup.string()
    .matches(/^[^\d]+$/, "City name cannot contain digits")
    .required(),
  postalCode: Yup.string()
    .matches(
      /^(10[0-9][0-9]|1[1-9][0-9]{2}|[2-9][0-9]{3})$/,
      "Invalid Belgian postal code"
    )
    .required(),
  phoneNumber: Yup.string()
    .matches(
      /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/,
      "Invalid Belgian phone number"
    )
    .required(),
  orderDate: Yup.date().required(),
});

class Order {
  constructor(
    userId,
    name,
    email,
    street,
    city,
    postalCode,
    phoneNumber,
    products,
    orderDate
  ) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    this.phoneNumber = phoneNumber;
    this.products = products;
    this.total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    this.orderDate = orderDate;
  }

  validate() {
    return orderSchema.validate(this, { abortEarly: false });
  }
}

export default Order;
