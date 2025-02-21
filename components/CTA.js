function CTA() {
    try {
        return (
            <section data-name="cta" className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8" data-aos="fade-down">
                        Ready to Transform Your Landscape?
                    </h2>
                    <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                        Contact us today for a free consultation and let us bring your vision to life.
                    </p>
                    <div data-aos="fade-in" data-aos-delay="200">
                        <a href="#contact" className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-colors duration-300">
                            Get Started Now
                        </a>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
