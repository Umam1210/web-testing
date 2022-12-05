import React, { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const newsList = [
   
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c348",
        "source": "Manadopedia.com",
        "author": "Infan Kaleel",
        "title": "Genom kuno menjelaskan aspek evolusi manusia yang sebelumnya tidak diketahui - Manadopedia",
        "description": "Penggunaan DNA purba, termasuk sampel dari sisa-sisa manusia berusia sekitar 45.000 tahun, telah menjelaskan aspek evolusi manusia yang sebelumnya tidak",
        "externalNewsUrl": "https://www.manadopedia.com/genom-kuno-menjelaskan-aspek-evolusi-manusia-yang-sebelumnya-tidak-diketahui/",
        "imageUrl": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Genetics-620x480.jpg",
        "publishedAt": "2022-10-31T21:45:23.000Z",
        "content": "Penggunaan DNA purba, termasuk sampel dari sisa-sisa manusia berusia sekitar 45.000 tahun, telah menjelaskan aspek evolusi manusia yang sebelumnya tidak diketahui.\r\nDr Yasin Swelmi, pemimpin kelompok… [+2738 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c344",
        "source": "Grid.id",
        "author": null,
        "title": "Ilmuwan Lakukan Pemindaian Planet Bagian Dalam untuk Mencari Inti Mars - National Geographic",
        "description": "Seismolog telah mengembangkan metode baru untuk memindai bagian dalam planet di tata surya kita untuk memastikan keberadaan inti planet.",
        "externalNewsUrl": "https://nationalgeographic.grid.id/read/133548991/ilmuwan-lakukan-pemindaian-planet-bagian-dalam-untuk-mencari-inti-mars",
        "imageUrl": "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/10/31/mars-interior-1jpg-20221031023029.jpg",
        "publishedAt": "2022-11-01T00:00:00.000Z",
        "content": "Nationalgeographic.co.id - Seismolog dari The Australian National University (ANU) telah mengembangkan metode baru untuk memindai bagian dalam planet di tata surya kita untuk memastikan apakah mereka… [+2588 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c345",
        "source": "Balicitizen.com",
        "author": "Harley Chandler",
        "title": "Rudal paling kuat di dunia akhirnya kembali setelah 3 tahun menghilang - BALICITIZEN.COM",
        "description": "Perbesar / Falcon Heavy memindahkan menara selama penerbangan perdananya pada 6 Februari 2018.Trevor Mahelman Selasa pagi dini hari, Falcon Heavy akan",
        "externalNewsUrl": "https://balicitizen.com/rudal-paling-kuat-di-dunia-akhirnya-kembali-setelah-3-tahun-menghilang/",
        "imageUrl": "https://cdn.arstechnica.net/wp-content/uploads/2021/07/2-Europa-Clipper-Falcon-Heavy-Feb-6th-2017-9966-760x380.jpg",
        "publishedAt": "2022-10-31T22:50:59.000Z",
        "content": "Perbesar/ Falcon Heavy memindahkan menara selama penerbangan perdananya pada 6 Februari 2018.\r\nTrevor Mahelman\r\nSelasa pagi dini hari, Falcon Heavy akan melakukan penerbangan pertamanya sejak Juni 20… [+5992 chars]",
        "category": "technology"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c346",
        "source": "Detik.com",
        "author": "Rachmatunnisa",
        "title": "Predator Mata Tiga Intai Lautan 500 Juta Tahun Silam - detikInet",
        "description": "Seekor hewan bermata tiga dengan kemampuan persepsi visual yang tinggi, pernah berkeliaran dan mengintai lautan di zaman sekitar 500 juta tahun lalu.",
        "externalNewsUrl": "https://inet.detik.com/science/d-6380296/predator-mata-tiga-intai-lautan-500-juta-tahun-silam",
        "imageUrl": "https://awsimages.detik.net.id/api/wm/2022/10/31/hewan-mata-tiga_169.png?wid=54&w=650&v=1&t=jpeg",
        "publishedAt": "2022-10-31T22:40:19.000Z",
        "content": "Jakarta - Seekor hewan bermata tiga dengan sirip seperti sayap pernah berenang di laut dangkal. Ia punya kemampuan persepsi visual yang tinggi untuk berburu hewan laut yang lebih kecil.\r\nStanleycaris… [+2538 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c347",
        "source": "Okezone.com",
        "author": "Vivin Lizetha",
        "title": "Kenali 5 Sinyal Tubuh Tanda Terkena Penggumpalan Darah, Jangan Sampai Terlambat Terdeteksi! : Okezone health - Okezone.com",
        "description": "Ada beberapa tanda terjadi penggumpalan darah pada tubuh. Kenali sedini mungkin!",
        "externalNewsUrl": "https://health.okezone.com/read/2022/10/31/483/2698043/kenali-5-sinyal-tubuh-tanda-terkena-penggumpalan-darah-jangan-sampai-terlambat-terdeteksi",
        "imageUrl": "https://img.okezone.com/content/2022/10/31/483/2698043/kenali-5-sinyal-tubuh-tanda-terkena-penggumpalan-darah-jangan-sampai-terlambat-terdeteksi-irCnuQqLC5.jpeg",
        "publishedAt": "2022-10-31T22:00:00.000Z",
        "content": "MENJAGA kesehatan penting bagi semua orang. Hal ini karena begitu banyak penyakit yang diam-diam menyerang tubuh seseorang tanpa disadari.\r\nSalah satunya adalah penggumpalan darah. Kondisi bahayanya … [+1087 chars]",
        "category": "health"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c348",
        "source": "Manadopedia.com",
        "author": "Infan Kaleel",
        "title": "Genom kuno menjelaskan aspek evolusi manusia yang sebelumnya tidak diketahui - Manadopedia",
        "description": "Penggunaan DNA purba, termasuk sampel dari sisa-sisa manusia berusia sekitar 45.000 tahun, telah menjelaskan aspek evolusi manusia yang sebelumnya tidak",
        "externalNewsUrl": "https://www.manadopedia.com/genom-kuno-menjelaskan-aspek-evolusi-manusia-yang-sebelumnya-tidak-diketahui/",
        "imageUrl": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Genetics-620x480.jpg",
        "publishedAt": "2022-10-31T21:45:23.000Z",
        "content": "Penggunaan DNA purba, termasuk sampel dari sisa-sisa manusia berusia sekitar 45.000 tahun, telah menjelaskan aspek evolusi manusia yang sebelumnya tidak diketahui.\r\nDr Yasin Swelmi, pemimpin kelompok… [+2738 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c344",
        "source": "Grid.id",
        "author": null,
        "title": "Ilmuwan Lakukan Pemindaian Planet Bagian Dalam untuk Mencari Inti Mars - National Geographic",
        "description": "Seismolog telah mengembangkan metode baru untuk memindai bagian dalam planet di tata surya kita untuk memastikan keberadaan inti planet.",
        "externalNewsUrl": "https://nationalgeographic.grid.id/read/133548991/ilmuwan-lakukan-pemindaian-planet-bagian-dalam-untuk-mencari-inti-mars",
        "imageUrl": "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/10/31/mars-interior-1jpg-20221031023029.jpg",
        "publishedAt": "2022-11-01T00:00:00.000Z",
        "content": "Nationalgeographic.co.id - Seismolog dari The Australian National University (ANU) telah mengembangkan metode baru untuk memindai bagian dalam planet di tata surya kita untuk memastikan apakah mereka… [+2588 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c345",
        "source": "Balicitizen.com",
        "author": "Harley Chandler",
        "title": "Rudal paling kuat di dunia akhirnya kembali setelah 3 tahun menghilang - BALICITIZEN.COM",
        "description": "Perbesar / Falcon Heavy memindahkan menara selama penerbangan perdananya pada 6 Februari 2018.Trevor Mahelman Selasa pagi dini hari, Falcon Heavy akan",
        "externalNewsUrl": "https://balicitizen.com/rudal-paling-kuat-di-dunia-akhirnya-kembali-setelah-3-tahun-menghilang/",
        "imageUrl": "https://cdn.arstechnica.net/wp-content/uploads/2021/07/2-Europa-Clipper-Falcon-Heavy-Feb-6th-2017-9966-760x380.jpg",
        "publishedAt": "2022-10-31T22:50:59.000Z",
        "content": "Perbesar/ Falcon Heavy memindahkan menara selama penerbangan perdananya pada 6 Februari 2018.\r\nTrevor Mahelman\r\nSelasa pagi dini hari, Falcon Heavy akan melakukan penerbangan pertamanya sejak Juni 20… [+5992 chars]",
        "category": "technology"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c346",
        "source": "Detik.com",
        "author": "Rachmatunnisa",
        "title": "Predator Mata Tiga Intai Lautan 500 Juta Tahun Silam - detikInet",
        "description": "Seekor hewan bermata tiga dengan kemampuan persepsi visual yang tinggi, pernah berkeliaran dan mengintai lautan di zaman sekitar 500 juta tahun lalu.",
        "externalNewsUrl": "https://inet.detik.com/science/d-6380296/predator-mata-tiga-intai-lautan-500-juta-tahun-silam",
        "imageUrl": "https://awsimages.detik.net.id/api/wm/2022/10/31/hewan-mata-tiga_169.png?wid=54&w=650&v=1&t=jpeg",
        "publishedAt": "2022-10-31T22:40:19.000Z",
        "content": "Jakarta - Seekor hewan bermata tiga dengan sirip seperti sayap pernah berenang di laut dangkal. Ia punya kemampuan persepsi visual yang tinggi untuk berburu hewan laut yang lebih kecil.\r\nStanleycaris… [+2538 chars]",
        "category": "science"
    },
    {
        "flags": {
            "isDeleted": false
        },
        "level": "externalNews",
        "type": "news",
        "_id": "6360b346e346a66cdcb7c347",
        "source": "Okezone.com",
        "author": "Vivin Lizetha",
        "title": "Kenali 5 Sinyal Tubuh Tanda Terkena Penggumpalan Darah, Jangan Sampai Terlambat Terdeteksi! : Okezone health - Okezone.com",
        "description": "Ada beberapa tanda terjadi penggumpalan darah pada tubuh. Kenali sedini mungkin!",
        "externalNewsUrl": "https://health.okezone.com/read/2022/10/31/483/2698043/kenali-5-sinyal-tubuh-tanda-terkena-penggumpalan-darah-jangan-sampai-terlambat-terdeteksi",
        "imageUrl": "https://img.okezone.com/content/2022/10/31/483/2698043/kenali-5-sinyal-tubuh-tanda-terkena-penggumpalan-darah-jangan-sampai-terlambat-terdeteksi-irCnuQqLC5.jpeg",
        "publishedAt": "2022-10-31T22:00:00.000Z",
        "content": "MENJAGA kesehatan penting bagi semua orang. Hal ini karena begitu banyak penyakit yang diam-diam menyerang tubuh seseorang tanpa disadari.\r\nSalah satunya adalah penggumpalan darah. Kondisi bahayanya … [+1087 chars]",
        "category": "health"
    }
]
export default function NewsRightBar() {
    const [newsCategory, setNewsCategory] = useState([
        'Kelas',
        'Fakultas',
        'Universitas',
        'Komunitas',
        'Berita',
        'Dari Plato'
    ]);
// border-[1px] border-b-black
    return (
        <div className="">
            {newsCategory.map((cat, categoryIndex) => (
                <div className="" key={categoryIndex + cat}>
                    <div className="border-t-[1px] border-[#e5e7eb] bg-white pb-8 pt-1 flex justify-between" >
                        <span className="">{cat}</span>
                        <span className="text-[#2962ff] ">Lihat semua</span>
                    </div>
                    {newsList.map((item) => {
                        return (
                            <div onClick={() => {
                                navigate(`/berita/${news?._id}/baca`)
                                window.open(item.externalNewsUrl)
                            }} key={item._id}
                            className="grid grid-cols-6 gap-4 my-10"
                                >
                                <div className='flex flex-col col-start-1 col-end-5'>
                                    
                                    <span >{item.title}</span>
                                    <span className=' text-gray-500 text-[14px]'>
                                        {dayjs().to(dayjs(item.publishedAt))}
                                        <span className="mx-2">•</span>
                                        0 Suka
                                    </span>
                                </div>
                                    <div className='col-end-7 col-span-2' >
                                        <img src={item.imageUrl} alt={item.source}  className='w-40'/>
                                    </div>
                                {/* <div
                                        // alt="news image"
                                        className="w-40 h-10 object-cover"
                                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    /> */}
                            </div>
                        )
                    })}


                </div>
            ))}
        </div>
    )
};

