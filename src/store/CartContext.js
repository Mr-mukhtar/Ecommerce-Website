import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Define your CartContext
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const newState = [...state];
        newState[existingItemIndex].quantity += 1;
        return newState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload.id);

    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

const updateCartAPI = async (cart) => {
    try {
      const userEmail = 'aa@g.com'; 
      await axios.post(`https://crudcrud.com/api/b74544cf6bc4472dab9002639b7a3949/cart${userEmail}`, cart);
      console.log('Cart updated in API');
    } catch (error) {
      console.error('Error updating cart in API:', error);
    }
  };


export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    updateLocalStorage(cartItems);
    updateCartAPI(cartItems); // Update API whenever cart changes
  }, [cartItems]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const incrementQuantityAction = (item) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };

  const decrementQuantityAction = (item) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems || [],
        totalQuantity,
        totalAmount,
        addToCart,
        removeFromCart,
        incrementQuantityAction,
        decrementQuantityAction,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);

  return cart;
};
// const todoForm = document.getElementById('my-Form');
// const todoList = document.getElementById('todoList');

// // Load tasks from API when the page loads
// loadTasks();

// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.getElementById('todoName').value.trim();
//     const description = document.getElementById('todoDescription').value.trim();

//     if (name !== '' && description !== '') {
//         addTask(name, description);
//         document.getElementById('todoName').value = '';
//         document.getElementById('todoDescription').value = '';
//     }
// });

// function addTask(name, description) {
//     const newTask = {
//         title: name,
//         description: description,
//         completed: false
//     };

//     // Save the new task to the API
//     axios.post("https://crudcrud.com/api/10e142c7a027485e92625067a8c1fe4e/sellingprice", newTask)
//         .then((res) => {
//             console.log(res.data);
//             loadTasks(); // Reload the tasks after adding
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// function loadTasks() {
//     // Fetch data from the API and display the tasks
//     axios.get("https://crudcrud.com/api/10e142c7a027485e92625067a8c1fe4e/sellingprice")
//         .then((response) => {
//             const tasks = response.data;
//             todoList.innerHTML = ''; // Clear the task list
//             tasks.forEach(task => {
//                 const taskItem = createTaskItem(task);
//                 todoList.appendChild(taskItem);
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

// function createTaskItem(task) {
//     const li = document.createElement('li');
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = task.completed;
//     checkbox.addEventListener('change', () => {
//         updateTaskStatus(task.id, checkbox.checked);
//     });

//     const label = document.createElement('label');
//     label.textContent = `${task.title} - ${task.description}`;

//     li.appendChild(checkbox);
//     li.appendChild(label);

//     return li;
// }

// function updateTaskStatus(taskId, completed) {
//     const updatedTask = {
//         completed: completed
//     };

//     // Update the task in the API
//     axios.put(`https://crudcrud.com/api/10e142c7a027485e92625067a8c1fe4e/sellingprice/${taskId}`, updatedTask)
//         .then((res) => {
//             console.log(res.data);
//             loadTasks(); // Reload the tasks after updating
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }
// its old woking app 
