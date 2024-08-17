import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2">
        <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
}
