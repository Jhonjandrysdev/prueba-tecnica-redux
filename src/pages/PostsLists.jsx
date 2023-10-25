import { useEffect, useRef } from "react";
import OutProfile from '../pages/ButtonOut';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SeePosts, AddPosts } from "../features/publicSlice";



const PostList = () => {
  
  const dispatch = useDispatch();
  const publications = useSelector((state) => state.publications);

  const ref = useRef(null);


  useEffect(() => {

    const fetchPosts = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const dataPosts = data.data;
      dispatch(SeePosts(dataPosts));
    };
    fetchPosts();
  }, [dispatch]);





  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(ref.current);
    const title = form.get("title");
    const message = form.get("message");

    const newPost = {
      id: publications.length + 1,
      title,
      message,
    };
      {/* Intento para almacenar nuevo post y luego guardarlo en el LS / Fallido*/}
      // // const newPostData =  async() => {
      // //   const newData =  await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
      // //   const res = newData.data;
      // //   dispatch(AddPosts(res));
      // }
      // newPostData()

      dispatch(AddPosts(newPost))

      
  };

  return (
    <>
      <div className="flex">
        <div className=" container w-2/4 bg-red-400">
          <div className="container w-2/4 my-60 flex flex-col items-center h-auto fixed">
            <h1 className="font-bold text-3xl text-white">Formulario para Publicación</h1>
            <form onSubmit={handleSubmit} ref={ref} className=" w-4/5 flex flex-col my-auto">
              <input
                type="text"
                placeholder="Titulo"
                name="title"
                className="w-3/5 mx-[100px] my-4 " />

              <input type="text" placeholder="Mensaje" name="message" className="w-3/5 my-4 mx-[100px]"/> <br />
              <button type="submit" className="border bg-black text-white p-5 rounded-xl w-2/5 mx-auto hover:bg-blue-600">
                Enviar Mensaje
              </button>
            </form>
            <OutProfile/>
          </div>
        </div>

        <div className="w-2/4 my-5 mx-5">
          <h1 className="text-center text-2xl font-bold">
            Lista de Publicaciones
          </h1>
          {publications.map((item) => {
            return (
                     <li key={item.id} className="list-none my-6 border-2 border-blue-500 text-justify text-lg">
                    <h1 className="text-center font-bold">{item.id} - {item.title} </h1>
                    <p className="text-justify text-lg mx-6">{item.body}.</p>
                    </li>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PostList;
