import { Button, Label, TextInput } from "flowbite-react";
import { useState, } from "react";
import { registerUser } from "../firebase/myapp";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (event) => {
      event.preventDefault();
      if (!email || !password) {
            return setMensaje("Escribe tu correo o contraseña")
      }
      else{
        registerUser(email, password);
        setMensaje("Bienvenido " + email);
        setTimeout(() => {
        navigate("/posts");
    }, 2000);
      }
     
  };

  return (
    <>
      <div
        className="bg-gradient-to-r from-sky-500 to-indigo-500 h-[680px] items-center flex justify-center">
        <div className="container mx-auto h-4/4 w-5/5 my-auto bg-gradient-to-r from-purple-500 to-pink-500">
          <h1 className="text-center font-mono text-4xl text-white h-min mt-11 mb-6 ">
            Bienvenido a la Prueba Tecnica
          </h1>

          <form className="flex max-w-md max-h-md flex-col gap-4 justify-center mx-auto" onClick={handleSubmit}>
            <div className="h-full">
              <div className="mb-2 text-center text-white">
                <Label
                  htmlFor="email1"
                  value="Your email"
                  className="text-lg text-white "
                  
                />
              </div>
              <TextInput
                id="email1"
                placeholder="Escribe tu correo"
                type="email"
                className="text-lg "
                required
                onChange={(event) => setEmail(event.target.value)}/> {" "}
            </div>
            <div>
              <div className="mb-2 text-center text-white">
                <Label
                  htmlFor="password1"
                  value="Your password"
                  className="text-lg text-white "
                />
              </div>
              <TextInput
                id="password1"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              /> {" "}
            </div>
            <Button type="submit">Ingresar</Button>
            <p className="text-white text-sm flex text-center items-center justify-center mt-1 ">
              {mensaje}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
