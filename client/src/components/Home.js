import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const generateId = (e) => {
    e.preventDefault();
    const Id = uuidv4(); // Generate a unique ID
    setRoomId(Id);
    toast.success("Room Id Generated");
  };

  const handleJoin = () => {
    if (!roomId || !username) {
      toast.error("Fields cannot be empty!");
      return;
    }
    navigate(`/home/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Room Created");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="border border-4 border-white rounded-3 p-4 bg-dark d-flex flex-column align-items-center justify-content-center"
        style={{
          height: "50%",
          width: "28%",
          maxWidth: "100%",
        }}
      >
        <h3 className="text-white mb-3">Enter Room Id</h3>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room Id"
          className="form-control mb-3 rounded-3"
          style={{ width: "95%" }}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-control mb-3 rounded-3"
          style={{ width: "95%" }}
        />
        <button
          type="button"
          onClick={handleJoin}
          className="btn btn-outline-light mb-3"
        >
          Join
        </button>
        <p className="text-white">
          Don't have a room Id?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={generateId}
          >
            Create Room
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
