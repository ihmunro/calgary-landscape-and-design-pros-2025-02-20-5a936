function Services() {
    try {
        return (
            <section data-name="services" className="py-24 bg-white" id="services">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12" data-aos="fade-down">
                        Our Comprehensive Landscaping Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up">
                            <i className="fa fa-tree text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Landscape Design</h3>
                            <p className="text-gray-700">Custom landscape designs tailored to your property and lifestyle.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
                            <i className="fa fa-leaf text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Garden Installation</h3>
                            <p className="text-gray-700">Professional garden installation services, including planting and layout.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="200">
                            <i className="fa fa-cut text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lawn Care</h3>
                            <p className="text-gray-700">Comprehensive lawn care services, including mowing, fertilization, and weed control.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up">
                            <i className="fa fa-faucet text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Irrigation Systems</h3>
                            <p className="text-gray-700">Installation and maintenance of efficient irrigation systems.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
                            <i className="fa fa-road text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hardscaping</h3>
                            <p className="text-gray-700">Construction of patios, walkways, retaining walls, and other hardscape features.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="200">
                            <i className="fa fa-lightbulb text-4xl text-green-500 mb-4"></i>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Outdoor Lighting</h3>
                            <p className="text-gray-700">Design and installation of outdoor lighting systems to enhance your landscape.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
