// client/src/components/GridView.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/GridView.css";

const GridView = () => {
  const [cruds, setCruds] = useState([]);

  useEffect(() => {
    const fetchCruds = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cruds");
        setCruds(response.data);
      } catch (error) {
        console.error("Error fetching cruds: ", error.message);
      }
    };

    fetchCruds();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cruds/${id}`);
      setCruds(cruds.filter((crud) => crud._id !== id));
      alert("Crud deleted!");
    } catch (error) {
      console.error("Error deleting Crud: ", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Grid View</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Location</th>
            <th>Social Media Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cruds.map((crud) => (
            <tr key={crud._id}>
              <td>{crud.name}</td>
              <td>{crud.mobileNumber}</td>
              <td>{crud.email}</td>
              <td>{crud.location}</td>
              <td>{crud.socialMediaLink}</td>
              <td>
                <Link to={`/edit/${crud._id}`} className="btn btn-warning mr-2">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(crud._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridView;
