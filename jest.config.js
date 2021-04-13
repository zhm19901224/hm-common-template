module.exports = {
  roots: ['<rootDir>/src'],
  // 分析src下这四类文件生成代码覆盖率报告，忽略ts的类型定义文件
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // 测试之前，用jsdom做补偿
  setupFiles: ['react-app-polyfill/jsdom'],
  // 在这个文件内可以做一些额外配置
  setupFilesAfterEnv: ['<rootDir>/jestConfig/setupTests.js'],
  // npm run test时，会被认为是测试文件的文件名
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',

  testRunner:
    '/Users/zhanghaomin/Desktop/jest-test-tdd/node_modules/jest-circus/runner.js',
  // 用babel-jest对脚本文件做转化，对css做忽略操作, 对静态资源，就当作字符串静态资源处理
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/jestConfig/babelTransform.js',
    '^.+\\.css$': '<rootDir>/jestConfig/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/jestConfig/fileTransform.js',
  },

  // transform忽略文件配置，node_modules的无需转化，因为都是打包好转化过的内容
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  // 测试文件引入的模块默认在node_module中找，如果需要在其他文件夹中找，在此配置
  modulePaths: [],
  // css使用css module时，类名有映射，方便测试
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  // jest测试时，模式的插件
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
