# React Native Shopping Cart Application

## Description
This is a React Native shopping cart application that allows users to browse products, view product details, and manage a shopping cart. The application features a responsive UI, integrates with an external API for product data, and uses local storage to persist cart data.

## Features
- **Product List**: Browse a list of products on the HomeScreen.
- **Product Details**: View detailed information about a product on the ProductDetailScreen.
- **Shopping Cart**: Add and remove items from the cart, view selected items on the CartScreen.
- **Drawer Navigation**: Navigate between screens using a drawer menu.
- **Data Fetching**: Fetch product data from an external API.
- **Local Storage**: Persist cart data using AsyncStorage.
- **Responsive UI**: A user-friendly interface with a header and footer.

## Components

### HomeScreen
Displays a list of products fetched from the external API. Each product item is clickable and navigates to the ProductDetailScreen.

### ProductDetailScreen
Shows detailed information about a selected product, including its name, price, and description. Users can add the product to their cart from this screen.

### CartScreen
Lists items added to the cart, showing the name, quantity, and price of each item. Users can remove items from the cart, and the total cost is calculated and displayed.

### Header
The header component displays the application title and includes navigation options.

### Footer
The footer component shows the total sum of items in the cart, calculated using the `useCart` context.

## Functionalities

### Drawer Navigation
The application uses a drawer navigation menu to allow users to switch between the HomeScreen, ProductDetailScreen, and CartScreen.

### Data Fetching
The application fetches product data from an external API. Replace the placeholder URL with your API endpoint in the `fetchData` function.

### Local Storage
The cart data is persisted using AsyncStorage to ensure the cart state is maintained across sessions.

### Asynchronous Operations
The application manages asynchronous operations using async/await syntax to handle data fetching and local storage interactions.

### Building Components
1. **HomeScreen**: Implement the component to fetch and display a list of products.
2. **ProductDetailScreen**: Implement the component to display detailed information about a selected product.
3. **CartScreen**: Implement the component to display items in the cart and manage their quantities and total cost.
4. **Header and Footer**: Implement reusable components for consistent UI across screens.

### Managing State
1. **useCart Context**: Create a context to manage the cart state across the application.
2. **AsyncStorage**: Use AsyncStorage to persist cart data.

### Screenshots

## Sidebar
![photo_10_2024-07-12_16-04-04](https://github.com/user-attachments/assets/b004923c-0b43-48e8-a296-33ccf875161d)

## Homepage
![photo_7_2024-07-12_16-00-40](https://github.com/user-attachments/assets/407bdd84-8872-4192-89a6-17e4a2b248af)

## Product Description Page
![photo_9_2024-07-12_16-00-40](https://github.com/user-attachments/assets/1bf9bdc6-a3e3-4c05-b5f2-4bb54d59b2ae)
![photo_10_2024-07-12_16-02-23](https://github.com/user-attachments/assets/05864b2b-1d14-4f65-821c-7301edf319d0)

## Cart Page
![photo_13_2024-07-12_16-00-40](https://github.com/user-attachments/assets/f740fcd3-80c0-45e8-828c-983d58e4febd)

