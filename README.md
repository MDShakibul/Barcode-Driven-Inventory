## Summary

- **Backend Logic:** Node.js and Express.js
- **Database:** MongoDB, Mongoose

## Important Note

> **Note:** The `.env` file has been attached to the email. Kindly ensure it is in place before running the project..

## Getting Started

First, clone or dowload this project:

```bash
git colne https://github.com/MDShakibul/Barcode-Driven-Inventory.git
```
or click download the button

then stat this commad for install all Package

```bash
npm install
```

last, run the development server:

```bash
npm start
```

## API Lists

### Authentication  Endpoints:
- Register a new user: [http://localhost:5000/api/v1/auth/signup](http://localhost:5000/api/v1/auth/signup) (POST)
- Login a registered user : [http://localhost:5000/api/v1/auth/login](http://localhost:5000/api/v1/auth/login) (POST)
- Logout a logedin user: [http://localhost:5000/api/v1/auth/logout](http://localhost:5000/api/v1/auth/logout) (GET)

### Products Endpoints:
- Retrieve all products: [http://localhost:5000/api/v1/products](http://localhost:5000/api/v1/products) (GET)
- Add product: [http://localhost:5000/api/v1/products/add-product](http://localhost:5000/api/v1/products/add-product) (PATCH)
- Get single product details: [http://localhost:5000/api/v1/products/product-details/:barcode](http://localhost:5000/api/v1/products/product-details/:barcode) (GET)
- Update an existing category: [http://localhost:5000/api/v1/products/:id](http://localhost:5000/api/v1/products/:id) (PATCH)

### Categories Endpoints:
- Retrieve all categories: [http://localhost:5000/api/v1/categories](http://localhost:5000/api/v1/categories) (GET)
- Add product: [http://localhost:5000/api/v1/categories/add-category](http://localhost:5000/api/v1/categories/add-category) (PATCH)



Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.


## Live site Link

[https://inventory-lac-seven.vercel.app/](https://inventory-lac-seven.vercel.app/)