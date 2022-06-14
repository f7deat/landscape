import Logo from '../../imgs/logo'
import ListMenu from '../../data/menu'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header className='container mx-auto px-4'>
            <div className='py-4 flex gap-4 items-center'>
                <Logo />
                <div className='md:block hidden px-10'>
                {
                    ListMenu.map(x => (
                        <Link key={x.id} href={x.url}>
                            <a className='px-4 py-6 uppercase font-medium text-gray-700 hover:text-pink-600'>{x.name}</a>
                        </Link>
                    ))
                }
                </div>
            </div>
        </header>
    )
}

export default Header