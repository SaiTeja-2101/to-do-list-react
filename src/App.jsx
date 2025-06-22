import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/Auth/SignInPage";
import SignUpPage from "./components/Auth/SignUpPage";
import Todo from "./components/Todo";
import { SignedIn, SignedOut, RedirectToSignIn,ClerkProvider } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Todo /></ProtectedRoute>} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
    </Routes>
  );
}
