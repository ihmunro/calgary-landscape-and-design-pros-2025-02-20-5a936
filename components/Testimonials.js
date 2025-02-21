function Testimonials() {
    try {
        return (
            <section data-name="testimonials" className="py-24 bg-white" id="testimonials">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12" data-aos="fade-down">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up">
                            <p className="text-gray-700 italic mb-4">"Calgary Landscape transformed our backyard into a beautiful oasis. We couldn't be happier with the results!"</p>
                            <p className="text-gray-900 font-semibold">- John Smith</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-gray-700 italic mb-4">"The team at Calgary Landscape was professional, efficient, and delivered exactly what we wanted. Highly recommended!"</p>
                            <p className="text-gray-900 font-semibold">- Emily Johnson</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="200">
                            <p className="text-gray-700 italic mb-4">"We hired Calgary Landscape for a complete overhaul of our front yard, and the transformation was amazing. Great job!"</p>
                            <p className="text-gray-900 font-semibold">- Michael Brown</p>
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
