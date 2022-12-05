import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { storeCart } from '../../store/storeCart';

// const cartListState = [
//   {
//     id: 1,
//     name: 'Socket.IO (with websockets) - the details. (socket io v2)',
//     href: '#',
//     price: 'Rp800.000',
//     discountPrice: 'Rp300.000',
//     color: 'Created by Jonathan Karongkong',
//     size: 'Managed by ET Asia',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in sienna."
//   }
// ].reduce((a, i) => a.concat(Array(10).fill(i)), []);

export default function Home() {
  const navigate = useNavigate()
  const cartListState = storeCart((state) => state.cartList);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(10000);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubTotal(cartListState.reduce((acc, curr) => (acc += parseInt(curr.price)), 0));
  }, [cartListState]);

  useEffect(() => {
    setTotal(tax + subTotal);
  }, [subTotal]);

  const formatPrice = (value) => {
    let number_string = value.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    return rupiah;
  };

  return (
    <>
      <div className="col-span-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your knowledge cart
        </h1>
      </div>

      <div className="col-span-7">
        <section aria-labelledby="cart-heading">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cartListState.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative flex">
                    <div className="flex-1 pr-8">
                      <div className="flex justify-between">
                        <h3 className="text-md">
                          <a
                            href={product.href}
                            className="font-bold text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      <div className="mt-4 text-sm">
                        <p className="text-gray-500">{`Created by ${product.by}`}</p>
                        {/* <p className=" border-gray-200 text-gray-500">{product.size}</p> */}
                      </div>

                      <div className="mt-4 flex w-full items-center text-sm font-medium">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Recommended
                        </span>

                        <StarIcon className="ml-4 mr-2 h-6 w-6 text-yellow-300" />
                        <span className="mr-4">4.8 / 5</span>
                      </div>

                      <p className="mt-4 text-xs font-medium text-gray-900 line-through">
                        {formatPrice(product.price)}
                      </p>
                      <p className="text-md font-bold text-gray-900">{product.discountPrice}</p>
                    </div>

                    <div className="">
                      <button
                        type="button"
                        className="-m-2 inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Remove</span>
                        <span className="mr-2 -mt-0.5 text-sm">Remove</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="sticky top-24 col-span-5 h-fit">
        <section
          aria-labelledby="summary-heading"
          className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">{`Rp ${formatPrice(subTotal)}`}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">{`Rp ${formatPrice(tax)}`}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">Order total</dt>
              <dd className="text-base font-medium text-gray-900">{`Rp ${formatPrice(total)}`}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <button
              onClick={() => {
                navigate('/payment')
              }}
              // type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Checkout
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
