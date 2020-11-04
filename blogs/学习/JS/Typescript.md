---
title: typescript
date: 2020-10-13
categories:
  - 学习
tags:
  - ts
---

## 学习
[ts入门](https://github.com/xujiongx/typescriptStuding)

## 为什么要学习Typescript?

- 程序更容易理解
  - 参数类型，外部条件透明化
- 效率更高
  - 提供api接口提示
- 更少的错误
  - 编译期间能够发现绝大部分错误
  - 杜绝一些常见的错误
- 非常好的包容性
  - 完全兼容javascript
  - 第三方库可以单独编写类型文件 
- 小缺点
  - 增加了学习的成本
  - 短时间内增加了开发成本

## 怎么安装使用

安装

- npm i -g typescript

使用

- 使用tsc编译成js文件后再使用node运行：`tsc test.ts`  `node test.js`

- 安装ts-node后直接运行：`npm i ts-node -g`  `ts-node test.ts`

## 类型

js类型（8种）：

- 原始类型（不可变）：String,Number,Boolean,Null,Undefined,Symbol,BigInt
- Object

数组和元组

- 数组是同一个类型的集合：`let a: number[] = [1, 2, 3];`
- 元组可以是不同类型的集合：`let b: [number, string, number] = [1, "hello", 3];`

interface接口（object类型）

- 描述对象的类型，对象推断
- 不会被翻译成js,只是用来做类型的动态检查（重要的是类型推断，而不是类型本身）