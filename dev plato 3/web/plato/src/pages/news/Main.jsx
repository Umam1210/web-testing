import Marquee from 'react-fast-marquee'
import NewsHeadlines from '../../components/news/NewsHeadlines';
import NewsRight from '../../components/news/NewsRightbar';
import NewsRightBarMainPage from '../../components/news/NewsRightBarMainPage';
import NewsRightBar from '../../components/news/NewsRightBarMainPage';

const rightNewsList = [
  {
    newsTitle: 'Marie Kondo Takes On a New Role: Life Coach',
    newsDate: '2019-01-01',
    newsContent: `There’s a big difference between the way most of us wish we lived and how we actually do. The tidying guru is back with a new book to help fix that.`,
    newsLink: 'https://www.google.com',
    newsImage: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg'
  }
].reduce((a, i) => a.concat(Array(8).fill(i)), []);

export default function Home() {
  return (
    <>
      <div className='col-span-8 '>
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={25}
          gradient={false}
          className="bg-[#0369A1] mb-3 py-2"
        >
          <span className="text-white px-2">
            Selamat datang di Plato! Klik di sini untuk info lebih lanjut.
          </span>

          <span className="text-white">
            Mahasiswa semester baru, silahkan menyelesaikan pembayaran SPP. Klik di sini untuk info lebih
            lanjut.
          </span>
        </Marquee>
        <div className="col-span-8  h-screen ">
          <NewsHeadlines />
        </div>
      </div>
      <div className="col-span-4  h-screen ">
        <NewsRightBarMainPage />
      </div>
    </>
  );
}
