module.exports = {
    presets: ['@babel/react', '@babel/env'], // instruct babel to use these presest to transform jsx (react) and to use modern javascript  (env)
    plugins: ['@babel/plugin-proposal-class-properties'], // enables new class syntax
};