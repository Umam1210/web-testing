import { useEffect, useState } from 'react';
import CategoryLeftBar from '../../components/marketplace/categoryLeftBar';
import Header from '../../components/marketplace/header';
import ItemListCard from '../../components/marketplace/itemListCard';
import { storeSellCourses } from '../../store/storeSellCourses';
import { products } from '../../components/marketplace/staticProducts';

export default function Home() {
  const setterCourseState = storeSellCourses((state) => state.setCourseList);

  const [sortBy, setSortBy] = useState('terbaru');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setterCourseState(products);
    setSubjects(products);
  }, []);

  return (
    <>
      <div className="col-span-12">
        <Header subjects={subjects} setSubjects={setSubjects} setSortBy={setSortBy} />
      </div>
      <div className="col-span-3">
        <CategoryLeftBar setSubjects={setSubjects} setSortBy={setSortBy} />
      </div>
      <div className="col-span-9">
        <ItemListCard subjects={subjects} />
      </div>
    </>
  );
}
