'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import InputWithTitle from '../components/organisms/InputWithTitle';
import Button from '../components/atoms/Button';
import { Alert, AlertTitle, LinearProgress } from '@mui/material';
import LoginApi from '@/api/auth/LoginApi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await LoginApi({ email, password });

      if (res.status) {
        console.log('sini');
        Cookies.set('token', res.data.token);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          window.location.href = '/';
        }, 2000);
      } else {
        console.log('sini2');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
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
      {isLoading ? (
        <div className="w-1/2 border border-green-500">
          <LinearProgress color="success" />
        </div>
      ) : null}

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
        <form className="flex flex-col px-20 space-y-8" onSubmit={handleSignIn}>
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
