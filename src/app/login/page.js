'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import InputWithTitle from '../components/organisms/InputWithTitle';
import Button from '../components/atoms/Button';
import { Alert, AlertTitle } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email === 'admin' && password === 'admin') {
      window.location.href = '/';
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen space-y-5"
      style={{
        backgroundImage: "url('/hero-login.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {showAlert && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Email atau Password tidak valid
        </Alert>
      )}
      <div className="w-1/2 p-2 bg-white border-2 rounded shadow-md h-1/2">
        <div className="flex justify-center">
          <Image
            src={'/dafema-logo.png'}
            width={200}
            height={20}
            alt="dafema"
          />
        </div>
        <form className="flex flex-col px-20 space-y-8" onSubmit={handleSignUp}>
          <InputWithTitle
            title={'Email'}
            onChange={(e) => setEmail(e.target.value)}
            type={'text'}
          />
          <InputWithTitle
            title={'Password'}
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
          />
          <Button title={'Sign In'} variant={'biru'} />
        </form>
      </div>
    </div>
  );
};

export default Login;
