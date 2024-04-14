import FriendsList from "./components/FriendsList.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";
import { useState } from "react";
import { initialfriends } from "./data/data.json";

function App() {
  const [friend, setFriends] = useState(initialfriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend === false ? "Add friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
