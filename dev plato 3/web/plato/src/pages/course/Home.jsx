import { Link } from 'react-router-dom';
import CourseList from '../../components/course/courseList';
import MenuItem from '../../components/buttons/MenuItem';
import FloatButton from '../../components/buttons/FloatButton';
import { storeCart } from '../../store/storeCart';

export default function Home() {
  const cartListState = storeCart((state) => state.cartList);
  return (
    <>
    {
      cartListState.length === 0 ? 
      <div className="h0full col-span-full h-screen flex-col">
      <div className=" flex h-full items-center justify-center text-2xl font-semibold text-gray-400">
        <div>Tidak ada course</div>
      </div>
    </div>
      : 
      <div className="col-span-12">
        <p className="mb-8 text-xl font-bold">Progress your courses!</p>
        {/* <Link to={'/add-article'}> */}
        {/* <button className='bg-red-500 text-white rounded-md w-[8rem] my-2'>add article</button> */}
        {/* </Link> */}
        <CourseList />
        <p className="mb-8 mt-12 text-xl font-bold">Finished Courses</p>
        <CourseList />
      </div>
    }
    </>
  );
}
