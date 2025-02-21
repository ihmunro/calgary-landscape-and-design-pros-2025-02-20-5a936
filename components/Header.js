function Header() {
    try {
        return (
            <header data-name="header" className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="/" className="text-2xl font-semibold text-gray-900">
                        Calgary Landscape and Design Pros
                    </a>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="/" className="hover:text-gray-500 transition-colors duration-300">Home</a>
                        <a href="#services" className="hover:text-gray-500 transition-colors duration-300">Services</a>
                        <a href="#benefits" className="hover:text-gray-500 transition-colors duration-300">Benefits</a>
                        <a href="#testimonials" className="hover:text-gray-500 transition-colors duration-300">Testimonials</a>
                        <a href="#about" className="hover:text-gray-500 transition-colors duration-300">About Us</a>
                        <a href="#faq" className="hover:text-gray-500 transition-colors duration-300">FAQ</a>
                        <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full transition-colors duration-300">
                            Get a Quote
                        </a>
                    </nav>
                    <button className="mobile-menu-button md:hidden">
                        <i className="fa fa-bars text-gray-900 text-2xl"></i>
                    </button>
                    <div className="mobile-menu hidden absolute top-full right-0 bg-white shadow-md rounded-md mt-2 py-2 w-48">
                        <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Home</a>
                        <a href="#services" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Services</a>
                        <a href="#benefits" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Benefits</a>
                        <a href="#testimonials" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Testimonials</a>
                        <a href="#about" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">About Us</a>
                        <a href="#faq" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">FAQ</a>
                        <a href="#contact" className="block px-4 py-2 text-green-500 hover:bg-gray-100">Get a Quote</a>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
