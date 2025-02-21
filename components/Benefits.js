function Benefits() {
    try {
        return (
            <section data-name="benefits" className="py-24 bg-gray-50" id="benefits">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12" data-aos="fade-down">
                        Why Choose Calgary Landscape?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos="fade-right">
                            <img src="https://source.unsplash.com/600x400/?landscape,garden" alt="Beautiful Landscape" className="rounded-lg shadow-md" />
                        </div>
                        <div data-aos="fade-left">
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <i className="fa fa-check-circle text-green-500 mr-3 text-xl"></i>
                                    <p className="text-gray-700"><strong>Local Expertise:</strong> We understand Calgary's unique climate and soil conditions.</p>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-check-circle text-green-500 mr-3 text-xl"></i>
                                    <p className="text-gray-700"><strong>Custom Designs:</strong> Tailored solutions to fit your specific needs and preferences.</p>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-check-circle text-green-500 mr-3 text-xl"></i>
                                    <p className="text-gray-700"><strong>Quality Materials:</strong> We use only the best materials for lasting beauty and durability.</p>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-check-circle text-green-500 mr-3 text-xl"></i>
                                    <p className="text-gray-700"><strong>Professional Service:</strong> Experienced and dedicated team committed to your satisfaction.</p>
                                </li>
                            </ul>
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
