import Friend from "./Friend.jsx";

// eslint-disable-next-line react/prop-types
function FriendsList({ friends, onSelection }) {
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} />
      ))}
    </ul>
  );
}

export default FriendsList;
