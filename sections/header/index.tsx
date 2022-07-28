import ListMenu from '../../data/menu'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos';

const Header: React.FC = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    function toggleClass() {
        const element = document.querySelector('body');
        if (element?.classList.contains('nav-active')) element.classList.remove('nav-active'); else element?.classList.add('nav-active');
    };

    return (
        <div>
            <header className='container mx-auto px-4'>
                <div className='py-4 flex flex gap-4 items-center justify-between header'>
                    <Link href="/">
                        <img src='https://i.imgur.com/rCxUGxB.png' alt="logo" className='cursor-pointer logo' />
                    </Link>
                    <div className='flex items-center gap-10'>
                        <Link href="/get-free-quote">
                            <div className="item button-jittery">
                                <button className='btn-get-free-quote rounded-full bg-white border border-primary border-2 uppercase text-primary'>Get free quote</button>
                            </div>
                        </Link>
                        <div className="nav-but-wrap md:block hidden" onClick={() => toggleClass()}>
                            <div className="menu-icon hover-target">
                                <span className="menu-icon__line menu-icon__line-left"></span>
                                <span className="menu-icon__line"></span>
                                <span className="menu-icon__line menu-icon__line-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="nav">
                <div className="nav__content">
                    <ul className="nav__list">
                        {
                            ListMenu.map(x => (
                                <Link key={x.id} href={x.url}>
                                    <li className="nav__list-item hover-target" onClick={() => toggleClass()}><a>{x.name}</a></li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header