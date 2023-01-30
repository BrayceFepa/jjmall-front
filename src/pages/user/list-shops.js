import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoAlertOutline, IoBagHandle } from 'react-icons/io5';
import ReactPaginate from 'react-paginate';
import Cookies from 'js-cookie';

//internal import
import useAsync from '@hooks/useAsync';
import Dashboard from '@pages/user/dashboard';
import ShopServices from '@services/ShopServices';
import Loading from '@component/preloader/Loading';
import { UserContext } from '@context/UserContext';
import OrderHistory from '@component/order/OrderHistory';
import { SidebarContext } from '@context/SidebarContext';
import { FiDelete, FiEdit3, FiTrash2 } from 'react-icons/fi';
import UpdateShopModal from '@component/modal/UpdateShopModal';
import DeleteShopModal from '@component/modal/DeleteShopModal';

const ListShops = () => {
  const router = useRouter();
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const { currentPage, handleChangePage, isLoading, setIsLoading } =
    useContext(SidebarContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [showUpdateShop, setShowUpdateShop] =useState(false);
  const [showDeleteShop, setShowDeleteShop] =useState(false);
  const [shopbyId, setShopbyId] = useState({});
  const [valConnect, setValConnect] = useState(false);

  const ConnectShop = (shop)=>{
    const cookieTimeOut = 0.5;
    if (!valConnect){
      setValConnect(!valConnect);
      dispatch({type:'SHOP_CONNECTED',payload:shop});
      Cookies.set('shopInfo', JSON.stringify(shop), {
        expires: cookieTimeOut,
      });
    }
    else{
      setValConnect(!valConnect)
      dispatch({type:'SHOP_CONNECTED',payload:null});
    }
  }
  useEffect(() => {
    ShopServices.getShopByUser({
      page: currentPage,
      limit: 8,
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [currentPage]);

  const pageCount = Math.ceil(data?.totalDoc / 8);

  useEffect(() => {
    setIsLoading(false);
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo]);

  return (
    <>
      {showUpdateShop && (
        <UpdateShopModal modalOpen={showUpdateShop} setModalOpen={setShowUpdateShop} data={shopbyId} setData={setData}/>
      )}
      {showDeleteShop && (
        <DeleteShopModal modalOpen={showDeleteShop} setModalOpen={setShowDeleteShop} data={shopbyId} setData={setData}/>
      )}
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Dashboard
          title="List Shops"
          description="This is user shops page"
        >
          <div className="overflow-hidden rounded-md font-serif">
            {loading ? (
              <Loading loading={loading} />
            ) : error ? (
              <h2 className="text-xl text-center my-10 mx-auto w-11/12 text-red-400">
                {error}
              </h2>
            ) : data?.orders?.length === 0 ? (
              <div className="text-center">
                <span className="flex justify-center my-30 pt-16 text-emerald-500 font-semibold text-6xl">
                  <IoBagHandle />
                </span>
                <h2 className="font-medium text-md my-4 text-gray-600">
                  You Have no shop Yet!
                </h2>
              </div>
            ) : (
              <div className="flex flex-col">
                <h2 className="text-xl font-serif font-semibold mb-5">
                  List Shops
                </h2>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                      <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="bg-gray-100">
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Name
                            </th>

                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Code
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Registration Code
                            </th>
                            <th
                              scope="col"
                              className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Update
                            </th>
                            <th
                              scope="col"
                              className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Delete
                            </th>
                            <th
                              scope="col"
                              className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                            >
                              Connect
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data?.data?.map((shop) => (
                            <tr key={shop.id} >
                              {/* <OrderHistory order={order} /> */}
                              {/* <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  {shop.id}
                                </span>
                              </td> */}
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  {shop.attributes?.name}
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  {shop.attributes?.code}
                                </span>
                              </td>

                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">{shop.attributes?.registration_number}</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                {shop.attributes?.status === 'open' && (
                                  <span className="text-emerald-500">{shop.attributes?.status}</span>
                                )}
                                {shop.attributes?.status === 'close' && (
                                  <span className="text-orange-500">{shop.attributes?.status}</span>
                                )}
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <button
                                  onClick={() => {setShopbyId(shop);setShowUpdateShop(!showUpdateShop)}}
                                >
                                  
                                  <span className="text-sm font-bold"><FiEdit3/></span>
                                </button>
                                
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <button
                                  onClick={() => {setShopbyId(shop);setShowDeleteShop(!showDeleteShop)}}
                                  className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                                >
                                  <FiTrash2 />
                                </button>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <button
                                  onClick={() => {ConnectShop(shop)}}
                                  className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                                >
                                
                                  <span className="text-sm font-bold">Open</span>
                                
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="paginationOrder">
                        {/* <ReactPaginate
                          breakLabel="..."
                          nextLabel="Next"
                          onPageChange={(e) => handleChangePage(e.selected + 1)}
                          pageRangeDisplayed={3}
                          pageCount={pageCount}
                          previousLabel="Previous"
                          renderOnZeroPageCount={null}
                          pageClassName="page--item"
                          pageLinkClassName="page--link"
                          previousClassName="page-item"
                          previousLinkClassName="page-previous-link"
                          nextClassName="page-item"
                          nextLinkClassName="page-next-link"
                          breakClassName="page--item"
                          breakLinkClassName="page--link"
                          containerClassName="pagination"
                          activeClassName="activePagination"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Dashboard>
      )}
    </>
  );
};

export default ListShops;
