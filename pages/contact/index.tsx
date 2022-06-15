import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/footer"
import Header from "../../components/header"

const Contact: NextPage = () => {
    return (
        <div>
            <Head>
                <title>DLiTi Landscape</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            </Head>
            <Header />
            <main className="container mx-auto px-4">
                <div className="font-semibold py-6" style={{fontSize: 30}}>Contact us</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.8027198204068!2d147.3134858!3d-42.9824292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6dd9dda40e919b%3A0xc01f31b32dab72f7!2s58%20Hutchins%20St%2C%20Kingston%20TAS%207050%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1655215440446!5m2!1svi!2s" width="100%" height="450" className="border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="mt-10">
                    <div className="md:flex gap-10">
                        <div className="md:w-2/3">
                            <div className="mb-10">
                                Please be as detailed as possible, stating all relevant information you already have, including any contacts, to help us understand your enquiry and help us find the right person to handle your request.
                            </div>
                            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your Name" />
                            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your E-mail" />
                            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your Subject" />
                            <textarea className="h-32 border rounded mb-3 w-full"></textarea>
                            <button className="px-6 py-2 bg-slate-800 font-medium text-white rounded">Send message</button>
                        </div>
                        <div className="md:w-1/3">
                            <div className="text-red-500 font-medium mb-4">CORPORATE HEADQUARTERS</div>
                            <div className="py-2">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            58 Hutchin Street, Kingston Hobart, TAS, Australia 7050
                        </div>
                        <div className="py-2">
                            <i className="fas fa-phone mr-2"></i>
                            <a href="telto:+61 412 969 160">+61 412 969 160</a>
                        </div>
                        <div className="py-2">
                            <i className="fas fa-envelope mr-2"></i>
                            <a href="mailto:dlititimberbuild@gmail.com">dlititimberbuild@gmail.com</a>
                        </div>
                        <div className="text-sm font-bold text-pink-600 mt-4">Follow us</div>
                        <div className="flex py-4 gap-4">
                            <button className="h-8 w-8 rounded-full bg-slate-800 text-white">
                                <i className="fab fa-facebook"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-slate-800 text-white">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-slate-800 text-white">
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button className="h-8 w-8 rounded-full bg-slate-800 text-white">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Contact