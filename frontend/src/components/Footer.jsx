import { Phone, Mail, MapPin, Shield, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Top Section */}
            <div className="bg-gray-800 text-white py-4">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <Shield size={32} className="mb-2" />
                        <h4 className="font-bold">100% ORIGINAL</h4>
                        <p>100% Original Products Guaranteed</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Package size={32} className="mb-2" />
                        <h4 className="font-bold">Quality Guarantee</h4>
                        <p>100% Guaranteed Products</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Clock size={32} className="mb-2" />
                        <h4 className="font-bold">SUPPORT 24/7</h4>
                        <p>Always available to answer your questions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Package size={32} className="mb-2" />
                        <h4 className="font-bold">FREE RETURNS</h4>
                        <p>Free return or exchange within 7 days</p>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Section */}
                    <div>
                        <h4 className="text-emerald-400 text-lg font-bold mb-4">French Arabians</h4>
                        <p>Pakistan's no. 1 place to buy 100% original discounted perfumes.</p>
                        <div className="mt-4 space-y-2">
                            <p className="flex items-center">
                                <Phone className="mr-2" size={18} /> +92 3059489539
                            </p>
                            <p className="flex items-center">
                                <Mail className="mr-2" size={18} /> sales@frencharabians.com.pk
                            </p>
                            <p className="flex items-center">
                                <MapPin className="mr-2" size={18} /> Minhas House Dhok Gangal, Rawalpindi
                            </p>
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h4 className="text-emerald-400 text-lg font-bold mb-4">Recent Posts</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">
                                    Tom Ford Perfumes in Pakistan: A Fragrant Journey
                                </Link>
                                <p className="text-sm text-gray-500">December 24, 2024</p>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">
                                    Best Winter Perfumes for Men
                                </Link>
                                <p className="text-sm text-gray-500">November 12, 2020</p>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">
                                    Perfumes as a Secret Weapon Against COVID-19
                                </Link>
                                <p className="text-sm text-gray-500">July 7, 2020</p>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="text-emerald-400 text-lg font-bold mb-4">Useful Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">Scholarship</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">Wholesale Program</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">Influencer Program</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">French Arabians Community</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-emerald-400 transition duration-300">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <p>&copy; 2024 FrenchArabians. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link to="#" className="hover:text-emerald-400">
                            <Shield size={20} />
                        </Link>
                        <Link to="#" className="hover:text-emerald-400">
                            <Package size={20} />
                        </Link>
                        <Link to="#" className="hover:text-emerald-400">
                            <Clock size={20} />
                        </Link>
                        <Link to="#" className="hover:text-emerald-400">
                            <Mail size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
