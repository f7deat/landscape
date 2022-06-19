import Logo from '../../imgs/logo'
import ListMenu from '../../data/menu'
import Link from 'next/link'

const Header: React.FC = () => {

    function toggleClass() {
        const element = document.querySelector('body');
        if (element?.classList.contains('nav-active')) element.classList.remove('nav-active'); else element?.classList.add('nav-active');
    };

    return (
        <div>
            <header className='container mx-auto px-4'>
                <div className='py-4 flex gap-4 items-center justify-between'>
                    <Logo />
                    <div className="nav-but-wrap" onClick={() => toggleClass()}>
                        <div className="menu-icon hover-target">
                            <span className="menu-icon__line menu-icon__line-left"></span>
                            <span className="menu-icon__line"></span>
                            <span className="menu-icon__line menu-icon__line-right"></span>
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