#!/bin/bash

echo "开始清理项目..."

# 删除构建缓存
rm -rf .next
rm -rf .cache
rm -rf node_modules/.cache

# 删除测试和文档文件夹
find node_modules -type d -name "test" -exec rm -rf {} +
find node_modules -type d -name "docs" -exec rm -rf {} +
find node_modules -type d -name "examples" -exec rm -rf {} +
find node_modules -type d -name "coverage" -exec rm -rf {} +
find node_modules -type d -name "__tests__" -exec rm -rf {} +

# 删除源代码映射文件
find node_modules -name "*.map" -type f -delete

# 删除不必要的类型定义
find node_modules -type d -name "@types" -not -path "*/@types/*" -exec rm -rf {} +

# 删除开发工具配置文件
find node_modules -name ".eslintrc*" -type f -delete
find node_modules -name ".prettierrc*" -type f -delete
find node_modules -name "tsconfig.json" -type f -delete
find node_modules -name "jest.config.js" -type f -delete

# 删除许可证和变更日志
find node_modules -name "LICENSE*" -type f -delete
find node_modules -name "CHANGELOG*" -type f -delete
find node_modules -name "README*" -type f -delete

# 删除不必要的语言文件
find node_modules -type d -name "locales" -exec rm -rf {} +
find node_modules -type d -name "i18n" -exec rm -rf {} +

# 删除开发依赖
npm prune --production

# 删除重复的依赖
npm dedupe

# 删除不必要的二进制文件
find node_modules -type f -name "*.node" -delete
find node_modules -type f -name "*.dylib" -delete
find node_modules -type f -name "*.so" -delete

# 删除不必要的字体文件
find node_modules -type f -name "*.ttf" -delete
find node_modules -type f -name "*.woff" -delete
find node_modules -type f -name "*.woff2" -delete

# 删除不必要的图片文件
find node_modules -type f -name "*.png" -delete
find node_modules -type f -name "*.jpg" -delete
find node_modules -type f -name "*.jpeg" -delete
find node_modules -type f -name "*.gif" -delete
find node_modules -type f -name "*.svg" -delete

# 删除不必要的样式文件
find node_modules -type f -name "*.css" -not -name "*.min.css" -delete
find node_modules -type f -name "*.scss" -delete
find node_modules -type f -name "*.sass" -delete
find node_modules -type f -name "*.less" -delete

# 删除不必要的脚本文件
find node_modules -type f -name "*.sh" -delete
find node_modules -type f -name "*.bat" -delete
find node_modules -type f -name "*.cmd" -delete

# 删除不必要的配置文件
find node_modules -type f -name "*.config.js" -delete
find node_modules -type f -name "*.config.json" -delete
find node_modules -type f -name "*.config.ts" -delete

# 删除不必要的文档文件
find node_modules -type f -name "*.md" -delete
find node_modules -type f -name "*.txt" -delete
find node_modules -type f -name "*.pdf" -delete

# 删除不必要的源代码文件
find node_modules -type f -name "*.ts" -not -name "*.d.ts" -delete
find node_modules -type f -name "*.jsx" -delete
find node_modules -type f -name "*.tsx" -delete

echo "清理完成！" 