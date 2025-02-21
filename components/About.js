function About() {
    try {
        return (
            <section data-name="about" className="py-24 bg-gray-50" id="about">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12" data-aos="fade-down">
                        About Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos="fade-right">
                            <p className="text-gray-700 mb-4">Calgary Landscape is a leading landscaping company in Calgary, dedicated to providing high-quality landscaping services to residential and commercial clients. With years of experience, our team of skilled professionals is committed to creating beautiful and functional outdoor spaces that enhance your property's value and appeal.</p>
                            <p className="text-gray-700">We pride ourselves on our attention to detail, exceptional customer service, and commitment to using sustainable practices. Whether you need a complete landscape design, garden installation, or ongoing lawn care, we have the expertise and resources to meet your needs.</p>
                        </div>
                        <div data-aos="fade-left">
                            <img src="https://source.unsplash.com/600x400/?team,landscaping" alt="Our Team" className="rounded-lg shadow-md" />
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
