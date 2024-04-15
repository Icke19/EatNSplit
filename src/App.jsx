import FriendsList from "./components/FriendsList.jsx";
import FormAddFriend from "./components/FormAddFriend.jsx";
import Button from "./components/Button.jsx";
import FormSplitBill from "./components/FormSplitBill.jsx";
import { useState } from "react";
import { initialfriends } from "./data/data.json";

function App() {
  const [friend, setFriends] = useState(initialfriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((selected) => (selected.id === friend.id ? "" : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friend}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend === false ? "Add friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
