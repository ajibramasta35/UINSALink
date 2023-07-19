import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const datapekerjaan = [
  {
    pekerjaan: 'Visual Designer',
    lokasi: 'Semarang, Jawa Timur ',
    jenis_pekerjaan: 'Full-time',
    perusahaan: 'PT Pilih sejati',
    logoperusahaan:'https://i.pinimg.com/originals/13/5d/8f/135d8f906db1c97c28aa1bb92d85326c.gif',
    mode: 'On-Site',
    deskripsi:
      'PT Pilih Sejati adalah perusahaan teknologi informasi yang berfokus pada pengembangan solusi inovatif untuk memecahkan masalah kompleks dalam industri. Kami mencari seorang Software Engineer yang berbakat dan bersemangat untuk bergabung dengan tim kami dalam membangun dan menyempurnakan produk-produk berbasis teknologi yang mempengaruhi kehidupan jutaan orang.',
  },
  {
    pekerjaan: 'Digital Marketing Specialist',
    lokasi: 'Jakarta Selatan, DKI Jakarta',
    jenis_pekerjaan: 'Full-time',
    perusahaan: 'PT Pemasaran Digital Makmur',
    logoperusahaan: 'https://i.pinimg.com/736x/d3/1c/a9/d31ca9ec8b3d779cad9ff901322ad240.jpg',
    mode: 'Hybrid (On-Site and Remote)',
    deskripsi:
      'PT Pemasaran Digital Makmur adalah perusahaan di bidang pemasaran digital yang menghadirkan strategi dan kampanye inovatif untuk membantu klien mencapai tujuan pemasaran mereka. Kami sedang mencari Digital Marketing Specialist yang kreatif dan berpengetahuan luas tentang tren pemasaran digital untuk bergabung dengan tim kami.',
  },
  {
    pekerjaan: 'Front-end Developer',
    lokasi: 'Bandung, Jawa Barat',
    jenis_pekerjaan: 'Contract',
    perusahaan: 'PT Teknologi Maju Bersama',
    logoperusahaan: 'https://i.pinimg.com/564x/d6/97/d4/d697d48100b6371ce8bf7ec8f5a6f795.jpg',
    mode: 'Remote',
    deskripsi:
      'PT Teknologi Maju Bersama adalah perusahaan teknologi yang mengembangkan aplikasi berbasis web dan mobile untuk klien di seluruh dunia. Kami membutuhkan Front-end Developer yang handal dalam menciptakan antarmuka pengguna yang menarik dan responsif menggunakan teknologi terkini.',
  },
  {
    pekerjaan: 'Data Analyst',
    lokasi: 'Surabaya, Jawa Timur',
    jenis_pekerjaan: 'Part-time',
    perusahaan: 'PT Data Cemerlang Indonesia',
    logoperusahaan: 'https://i.pinimg.com/564x/c2/13/eb/c213eb8ece9a6905f16c22ed619a22a6.jpg',
    mode: 'On-Site',
    deskripsi:
      'PT Data Cemerlang Indonesia adalah perusahaan analitik data yang menyediakan layanan konsultasi dan solusi berbasis data bagi klien dari berbagai industri. Kami sedang mencari seorang Data Analyst yang berdedikasi untuk menganalisis data, mengidentifikasi tren, dan memberikan wawasan berharga bagi keputusan bisnis perusahaan.',
  },
];

export default function Home() {
  return (
    <div className=" container mx-auto pt-36">
      <div className="md:flex md:relative">
        <div className="mx-2 mb-8 text-lg px-10 py-10 bg-white rounded-lg max-h-[30em] md:w-[20rem] lg:w-[19rem] xl:w-[24rem] 2xl:w-[28rem] md:mx-3 lg:fixed ">
          <div className="text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            porro cumque commodi temporibus. Esse odio ipsum quo eius, quae
            illum porro voluptates ducimus eaque velit? Consequuntur officiis
            consectetur laboriosam magnam.
          </div>
        </div>
        <div className="pekerjaan mx-2 mb-2 md:mx-3 md:w-2/3 md:ml-auto">
          <div className="searchbar mb-4 flex">
            <input type="text" placeholder='cari pekerjaan di uinsalink' className='p-4 rounded-md w-3/4 mr-4 shadow-slate-500' />
            <button type="button" className='bg-green-500 w-1/4 text-white text-sm rounded-md md:text-lg'>Cari</button>

          </div>
          {datapekerjaan.map((item, index) => {
            return (
              <Link href="#">
              <div className="mb-6 text-lg px-10 py-10 transition-all ease-in-out bg-white rounded-lg hover:shadow-lg duration-500 cursor-pointer ">
                <div className="keterangan-kerja items-center min-h-[6em] md:flex">
                  <Image
                    src={item.logoperusahaan}
                    width={50}
                    height={50}
                    alt="logo perusahaan"
                    className="rounded-full md:w-20"
                  />
                  <div className="ketja md:ml-4">
                    <div className=" text-sm py-3 text-green-500 font-semibold md:text-xl lg:text-2xl md:py-1">
                      {item.pekerjaan}
                    </div>
                    <div className=" text-xs flex">
                      <div className='mr-3 font-medium'>{item.jenis_pekerjaan}</div>{item.lokasi}
                    </div>
                    <div className=" text-xs text-gray-500 opacity-80 mt-1">
                      {item.perusahaan} ({item.mode})
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-xs line-clamp-3 text-gray-500 md:text-md lg:text-lg">
                  {item.deskripsi} 
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
