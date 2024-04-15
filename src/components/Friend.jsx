// eslint-disable-next-line react/prop-types
import Button from "./Button.jsx";

// eslint-disable-next-line react/prop-types
function Friend({ friend, onSelection }) {
  // eslint-disable-next-line react/prop-types
  return (
    <li>
        {/* eslint-disable-next-line react/prop-types */}
      <img src={friend.image} alt={friend.name} />
        {/* eslint-disable-next-line react/prop-types */}
      <h3>{friend.name}</h3>
        {/* eslint-disable-next-line react/prop-types */}
      {friend.balance < 0 && (
        <p className="red">
            {/* eslint-disable-next-line react/prop-types */}
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
        {/* eslint-disable-next-line react/prop-types */}
      {friend.balance > 0 && (
        <p className="green">
            {/* eslint-disable-next-line react/prop-types */}
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
        {/* eslint-disable-next-line react/prop-types */}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={()=>onSelection(friend)}>Select</Button>
    </li>
  );
}

export default Friend;
