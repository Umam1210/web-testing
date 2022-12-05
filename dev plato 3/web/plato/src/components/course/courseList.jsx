import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// saya import  baseURL saya buat di dalam folder api
import { API } from '../../api/testFileQuery';
import { storeCart } from '../../store/storeCart';

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '/course/view',
//     price: '300.000',
//     description: 'Jonathan karongkong',
//     options: 'Black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
//     imageAlt: 'Front of plain black t-shirt.'
//   }
// ].reduce((a, i) => a.concat(Array(5).fill(i)), []);

export default function CourseList() {
  // FOR MVP
  const cartListState = storeCart((state) => state.cartList);

  // ini return dari react-query, contohnya saya mau return isLoading, saya tinggal masukkan return yg udah disediakan dari react-query,
  const { data: product, isLoading } = useQuery(
    // bagian ini option nya, option ini juga sudah di sediakan dari react-query, contohnya disini saya pakai "refetchOnWindowFocus : Boolean" saya langsung pakai option yg disediakan, dan default value dari option ini adalah true, jika saya tidak menginnginkan nya saya hanya perlu ubah ke false.
    ['products'],
    async () => {
      const res = await API.get('/products').then((res) => res.data);
      return res?.products;
    },
    { staleTime: 3000 },
    {
      refetchOnWindowFocus: false
    }
  );

  //  implementasi dari isLoading react-query
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="grid grid-cols-5 gap-y-4 gap-x-4">
        {/* Dan disini saya Mapping return object yg saya masukkan. */}
        {cartListState?.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="aspect-square overflow-hidden bg-gray-200 group-hover:opacity-75">
              <img
                src={item?.imageSrc}
                alt={item?.imageAlt}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <Link to={'/course/view'}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {item.name}
                </Link>
              </h3>
              <p className="text-xs text-gray-500">
                {/* {item.description} */}
                {`By ${item.by}`}
              </p>
              <div className="mt-6 h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-1 w-[45%] rounded-full bg-blue-600"></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">45% Complete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
