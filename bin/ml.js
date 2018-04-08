#!/usr/bin/env node

const program = require('commander')

program
  .usage('<command> [options]')
  .command('init [url]', '新建项目')
  .command('app [appName]', '创建新应用').alias('a')
  .command('module [name]', '创建新模块').alias('m')
  .command('page [name]', '创建新页面').alias('pa')
  .command('component [name]', '创建新组件').alias('c')
  .command('serve [modNames]', '开发预览').alias('s')
  .command('build [modNames]', '构建 production 环境').alias('b')
  .command('update [version]', '更新 mariks-lite-cli').alias('up')
  .command('publish', '发布项目').alias('pu')
  .parse(process.argv)
