import Logo from "../logo/Logo"
import Input from "../reusable/input/Input"
import EyeOn from '../../assets/icons/eye-on.svg'
import CheckBox from "../reusable/checkbox/CheckBox"
import Button from "../reusable/button/Button"
import { Controller, useForm } from 'react-hook-form'
import { REGEX } from "../../utils/constants"
import { useLoginMutation } from "../../redux/api/loginApi"
import { useDispatch } from "react-redux"
import { setAuth } from "../../redux/slices/userSlice"

const LoginLeft = () => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues: { username: '', password: '' } });

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (res.data) {
      dispatch(setAuth(res.data?.token))
    }
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      handleSubmit(onSubmit)()
    }} className="pt-5 lg:pl-40 lg:pr-30 h-full relative px-[15px]">
      <Logo />
      <h1 className="text-6xl font-bold text-grey-text mt-32 leading-20.5">Login</h1>
      <p className="text-sm text-grey-dark mt-4">Sign in with your data that you entered during your registration.</p>
      <div className="flex flex-col gap-7 mt-8">
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange }, fieldState: { error } }) => <Input value={value} onChange={e => onChange(e.target.value)} placeholder={"name@example.com"} label="Email" error={error?.message} />}
          rules={{
            required: 'Email is required',
            pattern: {
              value: REGEX.EMAIL,
              message: 'Enter a valid email',
            },
          }}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              rightIcon={EyeOn}
              placeholder="min. 8 characters"
              label="Password"
              type="password"
              error={error?.message}
            />
          )}
        />

      </div>
      <div className="flex gap-3 items-center mt-7 mb-10">
        <Controller
          name="keepLoggedIn"
          control={control}
          rules={{ required: 'You must agree to continue' }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className="flex gap-1 mt-7 mb-10 items-center">
              <div className="flex gap-3 items-center">
                <CheckBox checked={value} onChange={e => onChange(e.target.checked)} />
                <p className="text-sm leading-4 text-grey-text">Keep me logged in</p>
              </div>
              {error && <p className="text-red-500 text-xs">({error.message})</p>}
            </div>
          )}
        />
      </div>
      <Button disabled={isLoading} type="submit">{isLoading ? "Loading..." : "Login"}</Button>
      <div className="text-primary mt-7 text-center cursor-pointer text-sm leading-4 font-bold">Forgot password</div>
      <div className="absolute bottom-8 lg:bottom-10 flex justify-center w-full left-0">
        <p className="text-grey-dark text-sm leading-4 text-center">Don't have an account? <span className="font-bold text-primary cursor-pointer">Sign up</span></p>
      </div>
    </form>
  )
}

export default LoginLeft