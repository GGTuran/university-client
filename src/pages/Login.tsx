/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UniForm from "../components/form/UniForm";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    // const toastId = toast.loading("Logging in!");

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   console.log(user);
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged in", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <UniForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </UniForm>
  );
};

export default Login;
