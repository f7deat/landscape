import ListMenu from '../../data/menu'
import Link from 'next/link'
import ContactForm from '../contact-form';
import { Popover } from 'react-tiny-popover';
import { useEffect, useState } from 'react';
import AOS from 'aos';

const Header: React.FC = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

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
                <div className='py-4 flex gap-4 items-center justify-between'>
                    <img src='https://i.imgur.com/rCxUGxB.png' alt="logo" />
                    <div className='flex items-center gap-10'>

                        <Popover
                            isOpen={isPopoverOpen}
                            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                            content={
                                <div className="bg-white p-6 rounded border border-green-300 mt-1 shadow-lg w-96 mx-4 z-50">
                                    <div className="font-bold mb-4 text-lg"><i className="fas fa-gift text-primary mr-2"></i> Get free quote</div>
                                    <ContactForm />
                                </div>
                            }
                            onClickOutside={() => setIsPopoverOpen(false)}
                        >
                            <div className="item button-jittery md:block hidden" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                                <button className='px-10 py-3 rounded-full border border-green-500 border-2 uppercase text-green-500'>Get free quote</button>
                            </div>
                        </Popover>
                        <div className="nav-but-wrap" onClick={() => toggleClass()}>
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