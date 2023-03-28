# Customer Fuel Rate MERN Stack App

---

### Description:
A partner of your company has requested to build a software application that will predict the rate of the fuel based on the following criteria:
- Client Location (in-state or out-of-state)
- Client history (existing customer with previous purchase or new)
- Gallons requested
- Company profit margin (%)

### Software must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management (after client registers they should login first to complete profile)
- Fuel Quote Form with Pricing module (Once user enters all required information pricing module calculates the rate provides total cost)
- Fuel Quote History

### Additional Details:
Front end must include following components:
- Login (Allow Client to register if not a client yet)
- Client Registration (Initially only username and Password)
- Client Profile Management. Following fields will be on Profile page / form:
	- Full Name (50 characters, required)
	- Address 1 (100 characters, required)
	- Address 2 (100 characters, optional)
	- City (100 characters, required)
	- State (Drop Down, selection required) DB will store 2 character state code
	- Zipcode (9 characters, at least 5 character code required)
	
- Fuel Quote Form with following fields:
	- Gallons Requested (numeric, required)
	- Delivery Address (Non-editable, comes from client profile)
	- Delivery Date (Calender, date picker)
	- Suggested Price / gallon (numeric non-editable, price will be calculated by Pricing Module)
	- Total Amount Due (numeric non-editable, calculated (gallons * price))
	
- Fuel Quote History
	- Tabular display of all client quotes in the past. All fields from Fuel Quote are displayed.

- You should have validations in place for required fields, field types, and field lengths. 

---

### Client (Frontend) Dependencies:
* "@fvilers/disable-react-devtools": "^1.3.0",
* "@reduxjs/toolkit": "^1.9.3",
* "bootstrap": "^5.2.3",
* "font-awesome": "^4.7.0",
* "jwt-decode": "^3.1.2",
* "react": "^18.2.0",
* "react-dom": "^18.2.0",
* "react-redux": "^8.0.5",
* "react-router-dom": "^6.9.0",
* "react-scripts": "5.0.1",
* "react-spinners": "^0.13.8"

### Server (Backend) Dependencies:
* "bcrypt": "^5.1.0",
* "cookie-parser": "^1.4.6",
* "cors": "^2.8.5",
* "date-fns": "^2.29.3",
* "dotenv": "^16.0.3",
* "express": "^4.18.2",
* "express-async-handler": "^1.2.0",
* "express-rate-limit": "^6.7.0",
* "jsonwebtoken": "^9.0.0",
* "mongoose": "^7.0.2",
* "mongoose-sequence": "^5.3.1",
* "uuid": "^9.0.0"
* "nodemon": "^2.0.22"

---

### To Install Client (Frontend) Dependencies:
- 'npm install' inside client directory

### To Install Server (Backend) Dependencies:
- 'npm install' inside server directory

---

### To Start Frontend (client directory):
- __Development:__ 'npm start'
- __Production:__
  - Build Command: 'npm run build'

### To Start Backend (server directory):
- __Development:__ 'npm run dev'
- __Production:__
  - Build Command: 'npm install'
  - Start Command: 'npm start'

---
