"use client";
import { Label } from "../../UI/Components/label";
import React, { useState } from "react";
import { Input } from "../../UI/Components/input";
import { LabelInputContainer } from "../../UI/Components/BottomGradient";
import Logo from "../Reuseable/Logo/Logo";
import AdvanceButton from "../Reuseable/Button/AdvanceButton";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Registor() {
  let [formData, setFormData] = useState({
    login: '',
    password: '',
    mail: '',
    first_name: '',
    last_name: ''
  });

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("");
  const navigate = useNavigate();
  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } =
      event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  // Submit 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/registration', formData);
      const { token: authToken, refresh_token } = response.data;
      sessionStorage.setItem('token',authToken);
      sessionStorage.setItem('refreshToken',refresh_token);
      toast.success('Register successful!');
      navigate('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Register failed. Please check your credentials.');
        toast.error('Register failed. Please check your credentials.');
      } else {
        setError('An unknown error occurred.');
        toast.error('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full m-2 mx-auto mt-7  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-pink-100  ">
      <ToastContainer />
      <Logo />
      <div className="flex items-center justify-center">
        <h1 className="text-pink-800 font-mono text-2xl font-bold">REGISTER</h1>

      </div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" >First name</Label>
            <Input
              placeholder="kiranjeet"
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange} 
              />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input 
              placeholder="kour"
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange} 
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Username</Label>
          <Input
            id="login"
            name="login"
            type="text"
            value={formData.login}
            placeholder="Kiranjeetkour"
            onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mail">Email Address</Label>
          <Input id="mail" name="mail" value={formData.mail} placeholder="kiranjeetkour144.com" type="mail" onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" value={formData.password} placeholder="••••••••" type="password" onChange={handleChange} />
        </LabelInputContainer>

        <AdvanceButton
          text="Sign up"
          disabled={loading} />

      </form>
      <p className="text-pink-800 cursor-pointer" onClick={()=> {navigate('/login')}}>Already have account?</p>
      <p className="text-pink-950 ">{error}</p>
    </div>
  );
}


