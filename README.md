# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




Redux
Actions, Reducer, Store


React Redux
Provider, useSelector, useDispatch
connect - mapStateToprops, mapDispatchToProps
middleware - api handling


Redux Toolkit
store - configurestore  | store - createstore
import { configureStore } from '@reduxjs/toolkit'
create slices and then combine in index.js | separate reducers and then combinereducer 


const slice1 = createSlice({
    name: 'slice1',
    initialStateCart = [],
    reducers : {
        list of functions
    }
})









# ###########################################################
Pages/Features List - 

Module 1 - End User Module
*HomePage - List - API 1
*Category Product List - API 10
*Product Details - API 2
*Cart
Checkout - API 3 and 7
Orders - API 9 and 10
Wishlist
*Registration - API 4
*Login - API 5


Module 2 - Admin/Employee Module
*Add Product - API 6
All Orders - API 8

# ###########################################################
List of APIs

1) http://localhost:4000/products - Products - Non-secure
2) http://localhost:4000/products/:id - Products - Non-secure
3) for order placement - Orders - Secure
4) Registration - Users - post api for users table - Non-secure
5) Login - Users - get api for user with specific details - Non-secure
6) http://localhost:4000/products(POST) - Products - **Secure
7) POST - Order Details - Order Details Table - **Secure
8) GET - All Orders - Orders - **Secure
9) GET - User Orders - Orders - Secure
10) GET - Category wise Products - Non-secure

# ###########################################################

List of Tables

Products
Users
--user details - address, gender, dob, profilepic
Orders - orderid, orderdate, deliverydate, amount, mobile, pincode, address, paymentmode, paymentstatus, orderstatus
order details - orderid, itemid, id, price, quantity
customer_address - userid, addresstype, name, flatnum, society/town/village, city, state, pincode, mobile





# ###########################################################


Login - 
Authentication
Authorization - Auth0, Passport, JWT Tokens



JWT - Json Web Token
Step 1 - Back End - Create Token and send on login
Step 2 - Front End - Receive token and save local - localStorage/Redux/Context
Step 2.1 - Check login using jwt token on front end
Step 3 - Front End - Send on secure api call in header
Step 4 - Back End - Verify token on api middleware

