import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "react-google-login";

//internal import

import UserServices from "@services/OnboardingServices";
import { UserContext } from "@context/UserContext";
import { notifyError, notifySuccess } from "@utils/toast";
import { ColorSwatchIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";

const useLoginSubmit = (setModalOpen) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    state: { phoneNumber },
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = ({
    name,
    email,
    registerEmail,
    verifyEmail,
    password,
    identifier,
    confirm_password,
    mobile_phone,
    first_name,
    last_name,
    verifyPhone,
    security_question1,
  }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;
    console.log("form recup:", {
      email,
      password,
      confirm_password,
      name,
      phoneNumber,
    });
    if (registerEmail && password && identifier) {
      console.log("value rest data:", { registerEmail, password, identifier });
      // UserServices.userLogin({
      //   password,
      //   identifier,
      // })
      signIn("credentials", {
        password: password,
        identifier: identifier,
        redirect: false,
      })
        .then((res) => {
          console.log("signIn response", res);
          if (res.status === 401) {
            notifyError("Error");
            console.log("error 401");
          } else {
            setLoading(false);
            setModalOpen(false);
            router.push(redirect || "/");
            notifySuccess("Login Success!");
            console.log("Login Success!");
          }
        })
        .catch((err) => {
          notifyError(err);
          console.log("notify error", err);
          setLoading(false);
        });
    }
    if (name && email && password) {
      UserServices.verifyEmailAddress({ name, email, password })
        .then((res) => {
          setLoading(false);
          setModalOpen(false);
          notifySuccess(res.message);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err.response.data.message);
        });
    }
    if (verifyEmail) {
      UserServices.forgetPassword({ verifyEmail })
        .then((res) => {
          setLoading(false);
          notifySuccess(res.message);
          setValue("verifyEmail");
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    }
    if (last_name && phoneNumber && email && password) {
      const data = {
        username: last_name,
        email: email,
        phone_number: phoneNumber,
        password: password,
      };
      console.log("valeur data:", data);
      // UserServices.userRegister(data)
      //   .then((res) => {
      //     setLoading(false);
      //     notifySuccess('Register Success!');
      //     setModalOpen(false);
      //   })
      //   .catch((err) => {
      //     setLoading(false);
      //     notifyError(err ? err.response.data.message : err.message);
      //   });
    }
  };

  const handleGoogleSignIn = (user) => {
    console.log("google sign in", user);
    // if (user.profileObj.name) {
    //   UserServices.signUpWithProvider({
    //     name: user.profileObj.name,
    //     email: user.profileObj.email,
    //     image: user.profileObj.imageUrl,
    //   })
    //     .then((res) => {
    //       setModalOpen(false);
    //       notifySuccess('Login success!');
    //       router.push(redirect || '/');
    //       dispatch({ type: 'USER_LOGIN', payload: res });
    //       Cookies.set('userInfo', JSON.stringify(res), {
    //         expires: cookieTimeOut,
    //       });
    //     })

    //     .catch((err) => {
    //       notifyError(err.message);
    //       setModalOpen(false);
    //     });
    // }
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    GoogleLogin,
    loading,
  };
};

export default useLoginSubmit;
