function HelloMessage() {
    try {
        return (
            <div data-name="hello-container" className="hello-container flex items-center justify-center">
                <h1 data-name="hello-text" className="hello-text font-bold">
                    Hello World!
                </h1>
            </div>
        );
    } catch (error) {
        reportError(error);
        return (
            <div data-name="error-message" className="text-red-500 p-4">
                An error occurred while rendering the message.
            </div>
        );
    }
}
