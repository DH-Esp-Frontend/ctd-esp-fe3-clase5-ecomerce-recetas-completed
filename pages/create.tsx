import Router from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form'

const Create = () => {
   const {register, handleSubmit, getValues} = useForm() 

   const onSubmit = async()=> {
      const values = getValues()  
      await fetch("http://localhost:3000/api/create", {
      method: "POST",
      body: JSON.stringify(values)
    })
      Router.push("/products")
    };
   const onError = ()=> alert("Por favor, verifica la informacion") 

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <label>Title</label>
            <input type="text" {...register('title')} />
            <label>Name</label>
            <input type="text" {...register('name')} />
            <label>Author</label>
            <input type="text" {...register('author')} />
            <label>Publish date</label>
            <input type="text" {...register('date')} />
            <label>Price</label>
            <input type="text" {...register('price')} />
            <label>Image</label>
            <input type="text" {...register('image')} />
            
            <button type="submit" >submit</button>
        </form>

    </div>
  )
}

export default Create