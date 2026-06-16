# 基于状态管理V2实现购物车场景

## 项目简介

本示例以状态管理V2所属装饰器来实现购物车的单个商品的数量的加减、选择、删除和统计总数量、总金额等功能。

## 效果预览

<img src="screenshots/device/result.png" width=320>

## 使用说明

1. 显示所有商品列表，显示选中的商品的总金额和总数量。
2. 点击商品数量左右的加减按钮，可以调整商品的数量。
3. 点击选择框可选中商品。
4. 点击删除将删除选中的商品。

## 工程目录

   ```  
   ├──AppScope
   │  ├──app.json5
   │  └──resources
   ├──build-profile.json5
   ├──entry
   │  ├──build-profile.json5
   │  ├──hvigorfile.ts
   │  ├──oh-package.json5
   │  └──src
   │     └──main
   │        ├──ets
   │        │  ├──entryability
   │        │  │  └──EntryAbility.ets  // 程序入口类
   │        │  └──pages
   │        │     └──Index.ets         // 应用首页(购物车列表页)
   │        ├──module.json5
   │        └──resources               // 应用静态资源目录  
   ├──hvigor
   │  └──hvigor-config.json5
   ├──hvigorfile.ts
   ├──LICENSE
   ├──oh-package.json5
   ├──README.md
   └──screenshots
      └──device
         ├──result.png
         └──result_en.png                                      
   ```

## 具体实现

1. 使用@ObservedV2装饰ProductItem类，使用@Trace装饰checked和count属性，当点击选择框时，触发商品选中状态的样式刷新。
2. 使用@ComponentV2装饰自定义的组件，以便于在组件内部使用全新的状态变量装饰器。
3. 使用@Require装饰参数，可以在构造时进行校验是否传入了参数。
4. 使用@Param装饰接收的参数buyCount，当选中的商品数量生变化时，刷新总数量统计的显示。
5. 使用@Local装饰组件内部变量，可以在该变量变化时，同步刷新使用该变量的组件。
6. 使用@Monitor监听buyCount，选中的商品数量生变化时，自动刷新总金额。
7. 使用@Computed装饰计算方法buyCount，避免相同的计算逻辑重复绑定在UI上时导致的重复计算。
8. 使用@Event装饰器装饰回调方法，可以实现更新数据源的变量，以此达到主动更新@Param装饰变量的效果。
9. 使用@Provider和@Consumer装饰父组件和子组件，可以在跨组件场景中进行数据双向同步。

## 相关权限

不涉及

## 约束与限制

1. 本示例仅支持标准系统上运行，支持设备：手机。
2. HarmonyOS系统：HarmonyOS 5.0.5 Release及以上。
3. DevEco Studio版本：DevEco Studio 6.0.2 Release及以上。
4. HarmonyOS SDK版本：HarmonyOS 6.0.2 Release SDK及以上。