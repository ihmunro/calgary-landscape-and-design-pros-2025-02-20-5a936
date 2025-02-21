function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-700">
                        &copy; {new Date().getFullYear()} Calgary Landscape. All rights reserved.
                    </p>
                </div>
            </footer>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
