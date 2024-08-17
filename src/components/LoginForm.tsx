import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import FormControl from "./FormControl";
import Label from "./Label";

interface LoginFormState {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  function handleFormInputsChange(e: ChangeEvent<HTMLInputElement>) {
    const {
      target: { name, value },
    } = e;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO process this when we have a backend
    console.log(formData);
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <FormControl>
        <Label name={"email"}>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Eg: bruce@waynecorp.com"
          value={formData.email}
          onChangeFunction={handleFormInputsChange}
          className="w-full"
          required
        />
      </FormControl>
      <FormControl>
        <Label name={"password"}>Contraseña</Label>
        <Input
          type="password"
          name="password"
          placeholder="*******"
          value={formData.password}
          onChangeFunction={handleFormInputsChange}
          className="w-full"
          required
        />
      </FormControl>
      <FormControl>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </FormControl>
    </form>
  );
}
