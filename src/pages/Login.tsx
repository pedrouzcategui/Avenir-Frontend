import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2">
        <h2 className="text-2xl text-center font-bold">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
