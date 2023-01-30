import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';


//internal import
// import UserServices from '@services/UserServices';
import UserServices from '@services/OnboardingServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';
import { ColorSwatchIcon } from '@heroicons/react/outline';

const useProductSubmit = (setModalOpen) => {
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
    price,
    name_product,
    status_product,
    product_description,
    barcode
  }) => {
    setLoading(true);
    const cookieTimeOut = 0.5;
    
    
      const data = {
        "data":{

          "status":status_product,
          "name":name_product,
          "description":product_description,
          "bar_code":barcode,
        }
        
      }
      console.log('valeur data:',data);
      UserServices.addProduct(data)
        .then((res) => {
          setLoading(false);
          notifySuccess('Save Product Success!');
          setModalOpen(false);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    
  };

  return {
    handleSubmit,
    submitHandler,
    register,
    errors,
    loading,
  };
};

export default useProductSubmit;
