import { useParams } from 'react-router-dom';

const User=()=> {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Page</h1>
      <p className="mt-2">User ID: <span className="font-mono">{id}</span></p>
    </div>
  );
}

export default User;
