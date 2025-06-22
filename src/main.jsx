import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const clerkPubKey="pk_test_Y2VudHJhbC1iaXJkLTcxLmNsZXJrLmFjY291bnRzLmRldiQ";
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
