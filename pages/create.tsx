import Router from 'next/router';
import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

interface IForm{
  name: string,
  image: string
}

const Create = () => {
   const {register, handleSubmit, getValues, reset, formState: { errors }} = useForm<IForm>() 

   const onSubmit: SubmitHandler<IForm> = async()=> {
      const values = getValues()  
      console.log(values);
      await fetch("http://localhost:3000/api/create", {
      method: "POST",
      body: JSON.stringify(values)
    })
      reset()
      Router.push("/products")
    };
   const onError: SubmitErrorHandler<IForm> = ()=> alert("Por favor, verifica la informacion") 


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <label htmlFor="name" >Name</label>
            <input id="name" type="text" {...register('name', { required: "Name is required", maxLength: 30 })} />
            <p role="alert">{errors.name?.message}</p>

            <label htmlFor="image">Image</label>
            <input id='image' type="text" {...register('image', { required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })  } />
            {errors.image && <p role="alert">Image is required</p>}
            <button type="submit" >submit</button>
        </form>

    </div>
  )
}

export default Create