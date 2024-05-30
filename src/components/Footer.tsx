import Logo from '@/assets/logo.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import TikTokIcon from '@/assets/icons/tiktok.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-gray-dark px-10 py-5">
            <div className='flex flex-col gap-8'>
                <div className='flex items-center justify-between'>
                    <Logo width={520} className='text-white'/>
                    <div className='flex flex-col gap-6'>
                        <p className='font-solway-medium text-xl text-white'>Terms &amp; Condition</p>
                        <p className='font-inter-bold text-white'>Copyright &copy; 2024</p>
                    </div>
                </div>
                <hr className='h-px w-full text-white' />
                <div className='flex items-start justify-start gap-20'>
                    <div className='flex flex-col gap-6'>
                        <Link to={'#'} className='font-solway-medium text-xl text-white'>Follow us</Link>
                        <div className='flex gap-3'>
                            <Link to={'#'}><FacebookIcon /></Link>
                            <Link to={'#'}><TikTokIcon /></Link>
                            <Link to={'#'}><InstagramIcon /></Link>

                        </div>
                    </div>
                    <Link to={'#'} className='font-solway-medium text-xl text-white'>Home</Link>
                    <Link to={'#'} className='font-solway-medium text-xl text-white'>Community List</Link>
                    <Link to={'#'} className='font-solway-medium text-xl text-white'>Add New</Link>
                    <Link to={'#'} className='font-solway-medium text-xl text-white'>Approval List</Link>
                    <Link to={'/login'} className='font-solway-medium text-xl text-white'>Log in</Link>
                </div>
            </div>
        </div>
    );
}