import Logo from '../../imgs/logo'
import ListMenu from '../../data/menu'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header className='container mx-auto'>
            <div className='py-4 flex gap-4'>
                <Logo />
                {
                    ListMenu.map(x => (
                        <Link key={x.id} href={x.url}>
                            <a className='px-4 py-6 uppercase font-medium text-gray-700 hover:text-red-500'>{x.name}</a>
                        </Link>
                    ))
                }
            </div>
        </header>
    )
}

export default Header