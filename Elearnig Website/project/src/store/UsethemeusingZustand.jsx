import React from 'react'
import {create} from 'zustand' //create is a built in function 

export const UsethemeusingZustand = create((set) => ({  //usethemeusingZustand is a hook
    darkTheme : true,
    setDarkTheme : () => set((state) =>({darkTheme: !state.darkTheme})), //state is a function to set value
})
)
