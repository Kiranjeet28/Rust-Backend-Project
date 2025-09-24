"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label } from "../../UI/Components/label";
import { Input } from "../../UI/Components/input";
import Logo from "../Reuseable/Logo/Logo";
import { LabelInputContainer } from "../../UI/Components/BottomGradient";
import AdvanceButton from "../Reuseable/Button/AdvanceButton";
import { useNavigate } from "react-router-dom";

export function LoginCompnents() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login', formData);


      console.log("response",response)
      // Store token in session storage
      const { token: authToken, refresh_token } = response.data;
      sessionStorage.setItem('token',authToken);
      sessionStorage.setItem('refreshToken',refresh_token);

      toast.success('Login successful!');
      navigate(`/`);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Login failed. Please check your credentials.');
        toast.error('Login failed. Please check your credentials.');
      } else {
        setError('An unknown error occurred.');
        toast.error('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full m-2 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-pink-100">
      <ToastContainer />
      <Logo />
      <div className="flex items-center justify-center">
        <h1 className="text-pink-800 font-mono text-2xl font-bold">LOGIN</h1>
      </div>
      <form className="my-4" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="login">Username</Label>
          <Input 
            id="login" 
            name="login" 
            value={formData.login} 
            placeholder="kiranjeetkour144" 
            type="text" 
            onChange={handleChange} 
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            name="password" 
            value={formData.password} 
            placeholder="••••••••" 
            type="password" 
            onChange={handleChange} 
          />
        </LabelInputContainer>
        <AdvanceButton text="Login" disabled={loading} />
      </form>
      <p className="text-pink-800 cursor-pointer" onClick={()=>{navigate('/signup')}}>New User?</p>
      {error && <p className="text-pink-950">{error}</p>}
    </div>
  );
}
