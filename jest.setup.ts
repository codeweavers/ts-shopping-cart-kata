['error', 'warn'].forEach((key) => {
    // eslint-disable-next-line no-console
    const originalImplementation = console[key];
    // eslint-disable-next-line no-console
    console[key] = function (message: any): void {
        originalImplementation.apply(console, arguments);
        throw (message instanceof Error ? message : new Error(message));
    };
});
