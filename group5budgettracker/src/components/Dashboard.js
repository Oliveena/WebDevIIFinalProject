import { Button } from '@mui/material';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-primary-600">Hello ((username))</h1>
      <p className="text-gray-700 mt-4 p-3">Welcome to your budget app.</p>
      <p>OPTION: Add a "What are you saving up for? with categories "house", "car", "travel", "family", etc.</p>
      <p>That way, we can also update user of you're X$ close to your goal of Y$ savings for ((selectedOnjective)). Congrats!</p>
      <Button p-5>Financial/Economic Newletter will go here</Button>
    </div>
  );
}
