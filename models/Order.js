import React from "react";
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
}
export default Order;
