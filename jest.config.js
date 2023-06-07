module.exports = {
    cacheDirectory: '../../.cache/jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    clearMocks: true,
    transform: {
        '^.+\\.(ts|js|mjs)$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.spec.json',
            }
        ],
    }
};
