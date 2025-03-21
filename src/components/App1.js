import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "users";


const App1 = () => {


  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    description: ""
});
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject) {
      alert("Please fill in all required fields.");
      return;
    }
    if (editIndex !== null) {
      const updatedUsers = users.map((user, index) => (index === editIndex ? formData : user));
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", description: "" });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  };

  return (
    <Container maxWidth="sm" className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <br></br>
      <Typography variant="h4" align="center" gutterBottom className="text-blue-600 font-bold">CRUD App with LocalStorage</Typography>
      <br></br>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
          <Grid item xs={6}><TextField fullWidth required label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="bg-white rounded-md"  color="secondary"/></Grid>
          <Grid item xs={6}><TextField fullWidth required label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="bg-white rounded-md" color="secondary"/></Grid>
          <Grid item xs={12}><TextField fullWidth required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-white rounded-md" color="success"/></Grid>
          <Grid item xs={12}><TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} className="bg-white rounded-md" color="success"/></Grid>
          <Grid item xs={12}><TextField fullWidth required label="Subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-white rounded-md" /></Grid>
          <Grid item xs={12}><TextField fullWidth multiline rows={3} label="Description" name="description" value={formData.description} onChange={handleChange} className="bg-white rounded-md" /></Grid>
          
        </Grid>
        <br></br>
        <Button fullWidth type="submit"  size="large" variant="contained" color="primary" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">{editIndex !== null ? "Update" : "Submit"}</Button>
      </form>
      <Grid container spacing={2} mt={2}>
        {users.map((user, index) => (
          <Grid item xs={12} key={index}>
            <Card className="bg-white shadow-md rounded-lg p-4">
              <CardContent>
                <Typography variant="h6" className="font-bold text-gray-700">{user.firstName} {user.lastName}</Typography>
                <Typography variant="body2" className="text-gray-500">Email: {user.email}</Typography>
                {user.phone && <Typography variant="body2" className="text-gray-500">Phone: {user.phone}</Typography>}
                <Typography variant="body2" className="text-gray-500">Subject: {user.subject}</Typography>
                {user.description && <Typography variant="body2" className="text-gray-500">Description: {user.description}</Typography>}
                {user.gender && <Typography variant="body2" className="text-gray-500">Gender: {user.gender}</Typography>}
                
                <Button size="large" color="secondary" onClick={() => handleEdit(index)} className="text-blue-500" variant="contained">Edit</Button>
                <Button size="large" color="error" onClick={() => handleDelete(index)} className="text-red-500" variant="contained">Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App1;
