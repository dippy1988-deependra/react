import {LoginWrapper,InputTag,InputButton,TextError} from './LoginStyle'
import { useForm } from 'react-hook-form';
const Login = () => {

    const {register,handleSubmit,errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <LoginWrapper>
           <form onSubmit={handleSubmit(onSubmit)}>

               <InputTag type="text" placeholder="email" name="email" ref={register}/>
               <br></br>
               <InputTag type="text" placeholder="password" name="password" ref={register({required:true,minLength:8})}/>
               {errors.password && <TextError>Password is not valid</TextError>}
               <br></br>
               <InputButton type="submit" />
           </form>
        </LoginWrapper>
    )
}

export default Login;