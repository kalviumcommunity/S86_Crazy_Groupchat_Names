import { useEffect, useState } from "react";
import axios from "axios";

export default function GroupManager() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [groups, setGroups] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:3000/api/items";

  const fetchGroups = async () => {
    try {
      const response = await axios.get(API_URL);
      setGroups(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, { name: groupName, description });
      } else {
        await axios.post(API_URL, { name: groupName, description });
      }
      setGroupName("");
      setDescription("");
      setEditingId(null);
      fetchGroups();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (group) => {
    setGroupName(group.name);
    setDescription(group.description);
    setEditingId(group._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchGroups();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-blue-100 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">Group Chat Name Manager</h1>
      
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          {editingId ? "Update Group" : "Add Group"}
        </button>
      </form>

      <div className="grid gap-4">
        {groups.map((group) => (
          <div key={group._id} className="bg-blue-800 p-4 rounded-md shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{group.name}</h2>
              <p className="text-sm">{group.description}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(group)} className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-md text-black">Edit</button>
              <button onClick={() => handleDelete(group._id)} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
