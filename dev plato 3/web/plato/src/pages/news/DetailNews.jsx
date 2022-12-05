import React from 'react';
import NewsRightbar from '../../components/news/NewsRightbar';

const DetailNews = () => {
  const datas = [
    {
      title_news: 'Title News',
      description:
        'TRIBUNNEWS.COM, MAKASSAR  Hingga Jumat (3/6/2022) malam, Tim Basarnas Sulsel telah berhasil menemukan sebanyak 31 korban KM Ladang Pertiwi dalam keadaan selamat. Sementara jumlah korban yang meninggal total 4 orang setelah kemarin tim kembali menemukan satu korban tewas di sekitar Pulau Pamantuang, Jumat (3/6/2022). Mayat berjenis kelamin perempuan itu ditemukan oleh nelayan sekira pukul 17.15 wita. Tim Basarnas Sulsel di Pelabuhan Paotere masih menunggu hasil identifikasi. Sebab mayat tersebut dievakuasi ke Pulau Pamantuang setelah ditemukan. "Saat ini mayat berada di puskesmas," kata Kepala Operasi Basarnas Sulsel, Muh Rizal saat diwawancarai di Posko Terpadu Potere, Jumat malam. "Pihak keluarga yang merasa kehilangan anggota keluarganya masih sedang mengidentifikasi mayat tersebut," sambungnya. Hingga tadi malam, total korban yang ditemukan sebanyak 35 orang. Baca juga: Satu Penumpang Kapal KM Ladang Pertiwi yang Tenggelam Kembali Ditemukan Meninggal Hari Ini 31 ditemukan dalam keadaan selamat. Sementara empat lainnya ditemukan meninggal.',
      images:
        'https://plus.unsplash.com/premium_photo-1661340951205-edb74128baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2385&q=80'
    },
    {
      title_news: 'Title News',
      description:
        'TRIBUNNEWS.COM, MAKASSAR  Hingga Jumat (3/6/2022) malam, Tim Basarnas Sulsel telah berhasil menemukan sebanyak 31 korban KM Ladang Pertiwi dalam keadaan selamat. Sementara jumlah korban yang meninggal total 4 orang setelah kemarin tim kembali menemukan satu korban tewas di sekitar Pulau Pamantuang, Jumat (3/6/2022). Mayat berjenis kelamin perempuan itu ditemukan oleh nelayan sekira pukul 17.15 wita. Tim Basarnas Sulsel di Pelabuhan Paotere masih menunggu hasil identifikasi. Sebab mayat tersebut dievakuasi ke Pulau Pamantuang setelah ditemukan. "Saat ini mayat berada di puskesmas," kata Kepala Operasi Basarnas Sulsel, Muh Rizal saat diwawancarai di Posko Terpadu Potere, Jumat malam. "Pihak keluarga yang merasa kehilangan anggota keluarganya masih sedang mengidentifikasi mayat tersebut," sambungnya. Hingga tadi malam, total korban yang ditemukan sebanyak 35 orang. Baca juga: Satu Penumpang Kapal KM Ladang Pertiwi yang Tenggelam Kembali Ditemukan Meninggal Hari Ini 31 ditemukan dalam keadaan selamat. Sementara empat lainnya ditemukan meninggal.',
      images:
        'https://plus.unsplash.com/premium_photo-1661340951205-edb74128baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2385&q=80'
    }
  ];

  return (
    <>
      <div className="col-span-8 flex h-full w-full flex-col">
        <div className="flex flex-col ">
          <span className="font-sans text-[12px]">Rabu, 16 November 2022</span>
          <span className="mt-2 font-sans text-[12px]">Editor : Hermansyah Putra</span>
        </div>
        <div className="mt-10 h-[650px]">
          <img src="https://images.unsplash.com/photo-1668525834119-bd0860fa8e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="images" className=" h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center">
          {datas.map((news) => (
            <div key={news.title_news} className="mt-10 flex w-[60%]">
              <div className="">
                <h1 className="mb-10 text-xl font-semibold">{news.title_news}</h1>
                <p className="text-justify indent-5 font-sans text-base">{news.description}</p>
                <div className="my-6 flex w-[60%]">
                  <img src={news.images} alt="thumbnail" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4 h-full w-full">
        {/* <div className="grid w-full grid-cols-6 bg-teal-100">
          <div className="col-span-2  bg-blue-100">
            
          </div>
          <div className="col-span-4 bg-yellow-100 text-right">
          </div>
        </div> */}
        <div className="h-full w-full ">
          <NewsRightbar />
        </div>
      </div>
    </>
  );
};

export default DetailNews;
