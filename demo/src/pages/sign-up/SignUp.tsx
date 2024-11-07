import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const { project, manager } = data;
    window.localStorage.setItem("task", JSON.stringify({ project, manager }));
    navigate("/dashboard", { state: { project, manager } });
  });

  return (
    <>
      <h1 className="text-center font-bold text-xl mt-5">
        Estima tu proyecto de software
      </h1>
      <form
        onSubmit={onSubmit}
        className="w-1/2 mx-auto pt-5 grid justify-items-center gap-4"
      >
        <Input
          variant="bordered"
          color={errors?.project ? "danger" : "primary"}
          type="text"
          label="Proyecto"
          labelPlacement="outside"
          placeholder="Nombre del proyecto"
          {...register("project", { required: true })}
        />
        <Input
          variant="bordered"
          color={errors?.manager ? "danger" : "primary"}
          type="text"
          label="Gerente"
          labelPlacement="outside"
          placeholder="Nombre del gerente del proyecto"
          {...register("manager", { required: true })}
        />
        <Button
          className=""
          type="submit"
          size="sm"
          color="primary"
          variant="ghost"
        >
          Comenzar
        </Button>
      </form>
    </>
  );
}
