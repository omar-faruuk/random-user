import './App.css';
import userData from './user.json';
import { useState } from 'react';
import User from './Components/User/User';
import Cart from './Components/Cart/Cart';

function App() {
  const [users, setUser] = useState(userData);
  const [userInfo, setUserInfo] = useState([]);

  const handleAddUser = (person) => {
    const newPerson = [...userInfo, person];
    setUserInfo(newPerson)
  }

  return (
    <div className="App">

      <div className="user">
        {users.map(user => <User user={user} handleAddUser={handleAddUser}></User>)}
      </div>

      <div className="cart">
        <Cart cartInfo={userInfo}></Cart>
      </div>

    </div>
  );
}

export default App;
