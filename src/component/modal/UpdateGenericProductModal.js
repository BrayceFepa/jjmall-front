import React, { useState, useEffect } from "react";

//internal import
import Common from "@component/login/Common";
import MainModal from "@component/modal/MainModal";
import Label from "@component/form/Label";
import Uploader from "@component/image-uploader/Uploader";
import Error from "@component/form/Error";
import { InputPerso } from "@component/form/InputCustomField";
import ShopServices from "@services/ShopServices";
import GenericProductServices from "@services/GenericProductServices";
import { useForm } from "react-hook-form";
import { notifyError, notifySuccess } from "@utils/toast";

const UpdateGenericProductModal = ({
  modalOpen,
  setModalOpen,
  data,
  setData,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [valueStatus, setValueStatus] = useState("open");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [dataGenericProduct, setDataGenericProduct] = useState(data);

  const getGenericProduct = () => {
    GenericProductServices.getGenericProduct({
      page: 1,
      limit: 8,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // setError(err.message);
      });
  };
  const onSubmit = (data) => {
    const genericProductData = {
      data: {
        name: data.name ? data.name : "",
        price: data.price ? data.price : "",
        picture: imageUrl ? imageUrl : "",
      },
    };

    GenericProductServices.updateGenericProduct(
      dataGenericProduct?.id,
      genericProductData
    )
      .then((res) => {
        if (res) {
          setLoading(false);
          getGenericProduct();
          notifySuccess("Generic Product Update Successfully!");
          setModalOpen(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err.message ? err.message : err.response.data.message);
      });
  };
  useEffect(() => {
    if (dataGenericProduct) {
      setValue("name", data.attributes ? data.attributes.name : "");
      setValue("price", data.attributes ? data.attributes.price : 0);
      setImageUrl(data.attributes ? data.attributes.picture : "");
    }
  }, []);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <div className="overflow-hidden bg-white mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold font-serif">
              Update Generic Product
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              Update Generic Product
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-5">
              <div className="form-group">
                <div className="bg-white space-y-6">
                  <div>
                    <Label label="Picture" />
                    <div className="mt-1 flex items-center">
                      <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <InputPerso
                  register={register}
                  label="Name"
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
                <Error errorName={errors.name} />
              </div>

              <div className="form-group">
                <InputPerso
                  register={register}
                  label="Price"
                  name="price"
                  type="number"
                  id="price"
                  placeholder="Price"
                />
                <Error errorName={errors.price} />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainModal>
  );
};

export default React.memo(UpdateGenericProductModal);
