import { useNavigate } from 'react-router-dom';

const Home= ()=> {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate('/user/102');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold justify-center items-center">Welcome to our Home Page</h1>
      <button onClick={goToUser} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go to User 102
      </button>
    </div>
  );
}

export default Home;
