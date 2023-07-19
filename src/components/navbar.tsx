import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Uinsaicon from '@/assets/icons/uinsalinkicon.png';

const datalink = [
  {
    nama: 'CARI PEKERJAAN',
    href: '/',
  },
  {
    nama: 'ABOUT',
    href: '/about',
  },
];

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full h-25 px-4 bg-white items-center lg:px-12 py-6 md:px-6 z-50">
        <div className="container flex mx-auto items-center">
          <div className="kiri mr-auto">
            <Image
              src={Uinsaicon}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="kanan">
            <ul className="flex space-x-2">
              <li className="hidden md:block">
                {datalink.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="px-4 py-2 mx-1 font-medium text-gray-500 text-sm transition ease-in xl:text-lg hover:-translate-y-1 hover:border-b-4 hover:border-b-green-500 duration-300">
                      {item.nama}
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="kanan ml-auto flex">
            <Image
              src={
                'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
              }
              width={40}
              height={40}
              alt="Picture of the author"
              className="rounded-full lg:w-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}
