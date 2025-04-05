const config = {
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    testEnvironment: "jsdom",
    transform: {"^.+\\.tsx?$": "ts-jest"},
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    },
}
export default config;