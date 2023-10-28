import type {Config} from 'jest';

const config: Config = {
    testEnvironment: "node",
    verbose: true,
    transform: {
        "\\.[jt]sx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

export default config;