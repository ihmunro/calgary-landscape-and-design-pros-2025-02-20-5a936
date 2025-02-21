function Hero() {
    try {
        return (
            <section data-name="hero" className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" data-aos="fade-down">
                        Transform Your Outdoor Space with Calgary's Leading Landscapers
                    </h1>
                    <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
                        Custom landscaping services designed to enhance your property's beauty and value.
                    </p>
                    <div data-aos="fade-in" data-aos-delay="200">
                        <a href="#contact" className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors duration-300">
                            Request a Free Consultation
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
