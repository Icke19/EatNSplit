import Friend from "./Friend.jsx";

// eslint-disable-next-line react/prop-types
function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
