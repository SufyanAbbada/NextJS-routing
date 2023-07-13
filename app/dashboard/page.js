'use client'
import {Suspense} from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/Navigation'
import LoadingState from "@/app/loadingState/LoadingState"
import Loading from './loading'

export default function Dashboard() {
  const router = useRouter()

  const navigateToHome = () => {
    // extreme calculation
    router.push('/aboutus')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button size="small" onClick={navigateToHome}>About Us Page</Button>

      <Suspense fallback={<Loading />}>
        <div style={{marginTop:'3em'}}>
          <LoadingState />
        </div>
      </Suspense>
    </div>
  );
}
