function FAQ() {
    try {
        return (
            <section data-name="faq" className="py-24 bg-white" id="faq">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12" data-aos="fade-down">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">What areas do you serve?</h3>
                            <p className="text-gray-700">We provide landscaping services throughout Calgary and the surrounding areas.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does landscaping cost?</h3>
                            <p className="text-gray-700">The cost of landscaping varies depending on the scope of the project. Contact us for a free estimate.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does a landscaping project take?</h3>
                            <p className="text-gray-700">The duration of a project depends on its complexity. We will provide a timeline during the consultation.</p>
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
