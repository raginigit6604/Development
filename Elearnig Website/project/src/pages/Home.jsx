import React from 'react'
// import { useTheme } from '../context/Usercontext'
import { UsethemeusingZustand } from '../store/UsethemeusingZustand';
const Home = () => {
  // const {darkTheme,setDarkTheme} = useTheme();
  const { darkTheme, setDarkTheme } = UsethemeusingZustand();
  console.log(darkTheme,'====dark theme====')
  return (
    <div className='p-6 text-center'>
      <p className='font-bold text-4xl'>Welcome to my Home Page</p>
      <p className='py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloribus. Iure totam aliquid odio reiciendis assumenda, velit repellat eveniet eaque nesciunt eligendi, sequi inventore aspernatur esse minima quas deleniti odit commodi ut necessitatibus quia maiores consequatur enim dolore. Numquam eligendi vel eum ipsa
         libero quos aliquid quo doloremque quidem nesciunt nihil, molestiae quia ad, necessitatibus laudantium temporibus obcaecati voluptate similique commodi nemo omnis. Nam laborum ipsa, ipsum facilis numquam architecto. Vitae earum harum aspernatur veritatis? Non magni beatae magnam. Voluptatem quasi minus laudantium quas aperiam illum distinctio ipsa odio quibusdam, at ea vero sed ratione facilis placeat expedita cum labore.</p>
      
      <button onClick={()=>setDarkTheme()} className='border-4 border-black bg-gray-800 py-2 px-4 m-2 my-6 text-1.5xl rounded-lg text-white font-bold cursor-pointer'>Change Theme</button>
    </div>
    
  )
}

export default Home