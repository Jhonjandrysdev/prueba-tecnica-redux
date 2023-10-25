import {useNavigate} from 'react-router-dom';
import Salir from '../assets/ingresar.png';
import {out} from '../firebase/myapp';

const OutProfile = () => {
    const navigate= useNavigate()

    const outProfile = (e) => {
        e.preventDefault()
        out();
        navigate("/");
      };

      return(
        <button onClick={outProfile} className="flex gap-3 text-center justify-center mt-5">
            <img src={Salir} className="w-8" />
            <p className="text-white mt-1 text-bold">Salir</p>
          </button>
      )
}
export default OutProfile