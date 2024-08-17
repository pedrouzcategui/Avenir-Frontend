import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import FormControl from "./FormControl";
import Label from "./Label";
import { Link } from "react-router-dom";

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormState>({
    firstName: "",
    lastName: "",
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
      <div className="grid grid-cols-2 gap-2">
        <FormControl>
          <Label name={"firstName"}>Nombre</Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Bruce"
            value={formData.firstName}
            onChangeFunction={handleFormInputsChange}
            className="w-full"
            required
          />
        </FormControl>
        <FormControl>
          <Label name={"lastName"}>Apellido</Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Wayne"
            value={formData.lastName}
            onChangeFunction={handleFormInputsChange}
            className="w-full"
            required
          />
        </FormControl>
      </div>
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
          Create Account
        </Button>
      </FormControl>
      <hr />
      <div className="flex justify-center gap-1 mt-2">
        <p>Already have an account?</p>
        <Link to={"/login"}>Login instead!</Link>
      </div>
    </form>
  );
}
