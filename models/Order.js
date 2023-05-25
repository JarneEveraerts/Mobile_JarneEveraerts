import * as Yup from "yup";

const orderSchema = Yup.object().shape({
  userId: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  street: Yup.string().required(),
  city: Yup.string().required(),
  postalCode: Yup.string().required(),
  phoneNumber: Yup.string().required(),
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
