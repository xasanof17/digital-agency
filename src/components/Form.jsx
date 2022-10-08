import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-[60px] bg-blue rounded-xl">
      <h2 className="text-white font-black text-lg">Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="" method="post" className="flex flex-col">
        {/* we use this react-hook-form and react-select  */}
      </form>
    </div>
  );
};

export default Form;
