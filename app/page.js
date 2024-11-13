'use client'
import { useAuth } from '@clerk/nextjs';

import { useEffect, useState } from "react";

export default function Home() {
  const { isSignedIn } = useAuth()
  useEffect(() => {
    const fetchUser = async () => {
      await fetch('/api/syncuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        console.log(res.json())
      }).catch((err) => {
        console.log(err)
      })


    }
    if (isSignedIn) {
      fetchUser()
    }


  }, [])


  return (
    <div className="text-4xl"  ></div>
  );
}
