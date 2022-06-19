import Link from "next/link"
import { useEffect, useState } from "react"
import { Popover } from "react-tiny-popover";
import Logo from "../../imgs/logo"
import ContactForm from "../contact-form";

declare var FB: any;

const Footer: React.FC = () => {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useEffect(() => {
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox?.setAttribute("page_id", "1690401924365208");
        chatbox?.setAttribute("attribution", "biz_inbox");
        (window as any).fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v14.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            (js as any).src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, [])

    return (
        <footer className="bg-slate-800 text-white mt-20 pt-10">
            <div className="container mx-auto px-4">
                <div className="md:flex gap-4 mb-6">
                    <div className="md:w-1/3 mb-4">
                        <div className="md:pr-10">
                            <div className="mb-6    ">
                                <Logo />
                            </div>
                            <div className="font-medium mb-4">
                                DLiTi is present in more than 30 countries around the world, including several of the world’s most important oil and gas provinces. We operate in North and South America, Africa, Asia, Europe, Oceania.
                            </div>
                            <button className="w-full py-2 rounded bg-white text-pink-600">Explore offices worldwide</button>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="mb-4 text-pink-600 font-bold">CORPORATE HEADQUARTERS</div>
                        <div className="py-2 text-gray-300">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            58 Hutchin Street, Kingston Hobart, TAS, Australia 7050
                        </div>
                        <div className="py-2">
                            <i className="fas fa-phone mr-2"></i>
                            <a href="telto:+61 412 969 160" className="text-gray-300">+61 412 969 160</a>
                        </div>
                        <div className="py-2">
                            <i className="fas fa-envelope mr-2"></i>
                            <a href="mailto:dlititimberbuild@gmail.com" className="text-gray-300">dlititimberbuild@gmail.com</a>
                        </div>
                    </div>
                    <div className="md:w-1/3">

                        <div className="mb-4 text-pink-600 font-bold">SOCIAL & NEWSLETTER</div>
                        <input type="text" className="px-4 py-2 rounded bg-slate-700 mb-4 w-72" placeholder="Your email address..." />

                        <div className="text-sm font-medium">Follow us</div>
                        <div className="flex py-4 gap-4">
                            <a href="https://www.facebook.com/DLiTiKingston" className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-900">
                                <i className="fab fa-linkedin"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="md:flex jusitfy-between items-center text-sm">
                    <div className="py-4 flex-1">2022 DLiTi Landscape</div>
                    <div className="flex gap-4">
                        <a href="/about">About</a>
                        <a href="/about">Services</a>
                        <a href="/about">Career</a>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="fb-root"></div>

            <div id="fb-customer-chat" className="fb-customerchat">
            </div>

            <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={
                    <div className="bg-white p-6 rounded shadow-lg w-96 mx-4 z-50">
                        <div className="font-bold mb-4 text-lg"><i className="fas fa-gift text-primary mr-2"></i> Get free quote</div>
                        <ContactForm />
                    </div>
                }
                onClickOutside={() => setIsPopoverOpen(false)}
            >
                <button className="get-free-quote h-16 w-16 fixed bottom-32 left-10 rounded-full flex items-center justify-center shadow-lg bg-white text-pink-600" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <i className="fas fa-bell fa-2x"></i>
                </button>
            </Popover>

            <a className="phone-call h-16 w-16 fixed bottom-10 left-10 rounded-full flex items-center justify-center shadow-lg bg-white text-pink-600" href="telto:+61 412 969 160">
                <i className="fas fa-phone fa-2x"></i>
            </a>

        </footer>
    )
}

export default Footer