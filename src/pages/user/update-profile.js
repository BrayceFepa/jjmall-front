import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect, useState } from 'react';

//internal import
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import Dashboard from '@pages/user/dashboard';
import InputArea from '@component/form/InputArea';
import UserServices from "@services/OnboardingServices";
import { UserContext } from '@context/UserContext';
import Uploader from '@component/image-uploader/Uploader';
import { notifySuccess, notifyError } from '@utils/toast';
import {InputPhoneNumber} from '@component/form/InputCustomField'

const UpdateProfile = () => {
  
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [valuePhone, setValuePhone] = useState('');
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if (!imageUrl) {
    //   notifyError('Image is required!');
    //   return;
    // }

    // setLoading(true);

    // notifySuccess('For demo this feature is disable!');

    const userData = {
      email: data.email ? data.email: '',
      phone_number: valuePhone ? "+"+valuePhone: '',
      // phone_number: data.phone ? data.phone: '',
      // image: imageUrl,
    };
    console.log('val data:',{userData,userInfo})
    const userPeople = {
      first_name: data.first_name ? data.first_name:'',
      last_name:data.last_name ? data.last_name:'',
      birthdate: data.birthdate? data.birthdate: ''
    }
    // console.log(userInfo)
    if (!userInfo) {
      notifyError('Aucun utilisateur connecté!');
      return;
    }
    UserServices.updateUser(userInfo?.user?.id, userData)
      .then((res) => {
        if (res) {
          setLoading(false);
          notifySuccess('Profile Update Successfully!');
          // Cookies.set('userInfo', JSON.stringify(res));
        }
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err?.response?.data?.message : err.message);
      });
  };

  useEffect(() => {
    if (Cookies.get('userInfo')) {
      const user = JSON.parse(Cookies.get('userInfo'));
      console.log('user:',user);
      // setValue('first_name', user.user.name);
      
      setValue('email', user.user? user.user.email:'');
      // setValue('address', user.address);
      setValue('phone', user.user ? user.user.phone_number:'');
      // setValuePhone('696535814')
      // setImageUrl(user.image);
    }
  }, []);

  return (
    <Dashboard title="Update-Profile" description="This is edit profile page">
      <div className="max-w-screen-2xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-serif font-semibold mb-5">
                Update Profile
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white space-y-6">
              <div>
                <Label label="Photo" />
                <div className="mt-1 flex items-center">
                  <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid-cols-6 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="lg:mt-6 mt-4 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="First Name"
                          name="first_name"
                          type="text"
                          placeholder="First Name"
                        />
                        <Error errorName={errors.first_name} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Last Name"
                          name="last_name"
                          type="text"
                          placeholder="Last Name"
                        />
                        <Error errorName={errors.last_name} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Label label={"gender"} />
                        <div className="relative">
                          <select {...register("gender")}
                            className={
                              'py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12'
                            }
                          >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            
                          </select>
                        </div>
                        <Error errorName={errors.gender} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Birthdate"
                          name="birthdate"
                          type="date"
                          placeholder="Your Birthdate"
                        />
                        <Error errorName={errors.birthdate} />
                      
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        
                        <InputPhoneNumber
                          register={register}
                          label="Mobile Phone"
                          name="phone"
                          type="text"
                          id="mobile_phoneRegister"
                          country='cm'
                          value={valuePhone}
                          setValue={setValuePhone}
                        />
                        
                        <Error errorName={errors.phone} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                        />
                        <Error errorName={errors.email} />
                      </div>
                      
                    </div>
                    
                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                      <button
                        disabled={loading}
                        type="submit"
                        className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default dynamic(() => Promise.resolve(UpdateProfile), { ssr: false });
