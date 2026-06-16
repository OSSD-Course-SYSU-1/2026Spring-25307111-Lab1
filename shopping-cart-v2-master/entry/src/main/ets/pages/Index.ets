/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { util } from '@kit.ArkTS';

@ObservedV2
class ProductItem {
  id: string = util.generateRandomUUID();
  image: Resource = $r('app.media.1');
  @Trace name: ResourceStr = ''; // 商品名称
  @Trace checked: boolean = false; // 选中状态
  @Trace price: number = 0; // 商品价格
  @Trace count: number = 0; // 商品数量

  constructor(image: Resource, name: ResourceStr, price: number) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
}

@ComponentV2
struct TitleView {
  @Event deleteProduct: () => void = () => {
  };
  @Event addProduct: () => void = () => {
  };

  build() {
    Row() {
      Row() {

        Text('购物车')
          .fontSize(26) // 字体大小
          .fontWeight(700) // 字体粗细

        Row({ space: 8 }) {
          Button() {
            SymbolGlyph($r('sys.symbol.plus'))
              .fontSize(24)
              .fontColor([Color.Black])
          }
          .width(40)
          .height(40)
          .borderRadius(20)
          .backgroundColor('rgba(0,0,0,0.05)')
          .onClick(() => this.addProduct())

          Button() {
            // $r('资源路径') 静态资源引用语法。 应用资源：$r('app.type.name')  系统资源：$r('sys.type.resource_id')
            // SymbolGlyph显示图标小符号的组件
            SymbolGlyph($r('sys.symbol.trash'))
              .fontSize(24)
              .fontColor([Color.Black]) // 字体颜色
          }
          .width(40)
          .height(40)
          .borderRadius(20) // 边框圆角
          .backgroundColor('rgba(0,0,0,0.05)')
          .onClick(() => this.deleteProduct())
        }
      }
      .width('100%')
      .height(56)
      // justifyContent用于设置子组件在垂直方向上的对齐格式
      // FlexAlign.SpaceBetween相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐
      .justifyContent(FlexAlign.SpaceBetween)
    }
    .backgroundColor('rgba(241,243,245,0.8)')
    .backdropBlur(80) // 背景模糊效果,越大越模糊
    .padding({
      // 内边距
      top: 36,
      left: 16,
      right: 16,
      bottom: 14
    })
  }
}

@ComponentV2
struct ProductItemView {
  @Param productItem: ProductItem = new ProductItem($r('app.media.1'), '', 0);
  @Consumer('countChange') countChange: (id: string, operation: string) => void = () => {
  };

  build() {
    Row() {
      Column() {
        Row() {
          Checkbox()
            .select(this.productItem.checked!!)
            .width(20)
            .height(20)
            .margin(2) // 外边距

          Image(this.productItem.image)
            .width(76)
            .height(76)
            .borderRadius(16)
            .margin({ left: 12 })
        }
      }
      .width(112)

      Column() {
        Row() {
          Column() {
            Text(this.productItem.name)
              .height(21)
              .fontColor('rgba(0,0,0,0.9)')
              .fontSize(16)
              .fontWeight(500)

            Text('旅行')
              .height(16)
              .fontColor('rgba(0,0,0,0.4)')
              .fontSize(12)
              .fontWeight(400)
          }
          // alignItems设置子组件在水平方向上的对齐格式
          // HorizontalAlign.Start 左对齐
          .alignItems(HorizontalAlign.Start)
        }

        Row() {
          Row() {
            Text('￥')
              .fontColor('rgba(0,0,0,0.9)')
              .fontWeight(700)
              .fontSize(12)
              .margin({ top: 4 })
            Text(this.productItem.price.toString())
              .fontColor('rgba(0,0,0,0.9)')
              .fontWeight(700)
              .fontSize(16)
          }
          // 设置组件的布局权重
          // 父容器尺寸确定时，不设置的先占位，剩余部分根据设置值占比分配
          .layoutWeight(1)

          Row() {
            Button() {
              SymbolGlyph($r('sys.symbol.minus_circle'))
                .fontSize(26)
                .fontColor(['rgba(10,89,247,1)'])
            }
            .width(30)
            .height(30)
            .borderRadius(15)
            .backgroundColor(Color.White)
            // 按钮禁用设置，当 商品的count大于0时可以点击，否则禁用按钮
            .enabled(this.productItem.count > 0 ? true : false)
            .onClick(() => {
              this.countChange(this.productItem.id, 'subtract');
            })

            Text(this.productItem.count.toString())
              .width(30)
              .height(30)
              // textAlign设置文本段落在水平方向的对齐方式。
              // TextAlign.Center水平居中对齐。
              .textAlign(TextAlign.Center)

            Button() {
              SymbolGlyph($r('sys.symbol.plus_circle'))
                .fontSize(26)
                .fontColor(['rgba(10,89,247,1)'])
            }
            .width(30)
            .height(30)
            .borderRadius(15)
            .backgroundColor(Color.White)
            .onClick(() => this.countChange(this.productItem.id, 'add'))
          }
        }
        .height(24)
        .margin({ top: 19, right: 0 })
        // justifyContent用于设置子组件在垂直方向上的对齐格式
        // FlexAlign.SpaceBetween相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐
        .justifyContent(FlexAlign.SpaceBetween)
      }
      .layoutWeight(1)
      .margin({ left: 12 })
      // alignItems设置子组件在水平方向上的对齐格式
      // HorizontalAlign.Start 左对齐
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .height(104)
    .borderRadius(16)
    .padding(12)
    .backgroundColor(Color.White)
  }
}

@ComponentV2
struct ProductListView {
  @Param productList: ProductItem[] = [];
  @Monitor('productList') onProductListChange() {
    // 监听productList变化，触发UI刷新
  }

  // @Builder装饰器用于封装可复用的UI结构
  @Builder
  itemHead() {
    Blank() // 空白填充组件
      .margin({ top: 106 })
  }

  // @Builder装饰器用于封装可复用的UI结构
  @Builder
  itemFooter() {
    Blank() // 空白填充组件
      .margin({ top: 84 })
  }

  build() {
    Column() {
      // space用于设置列表子项之间的距离
      List({ space: 12 }) {
        ListItemGroup({
          // ListItemGroup用来展示列表item分组
          header: this.itemHead(),
          footer: this.itemFooter()
        }) {
          // 对商品列表进行循环渲染
          ForEach(this.productList, (productItem: ProductItem) => {
            ListItem() {
              ProductItemView({
                productItem: productItem
              })
            }
          }, (productItem: ProductItem) => productItem.id) // 以商品的id做为ListItem的key
        }
        // divider 设置ListItem分割线样式，默认无分割线。strokeWidth为分割线大小
        .divider({ strokeWidth: 12, color: '#F1F3F5' })
      }
      .width('100%')
      .height('100%')
      .scrollBar(BarState.Off) // 滚动条组件ScrollBar，BarState.Off为不显示滚动条
      .sticky(StickyStyle.Header) // sticky属性用于实现组件吸顶或吸底效果，StickyStyle.Header设置吸顶
    }
    .margin({
      left: 16,
      right: 16
    })
  }
}

@ComponentV2
struct StatisticsView {
  @Require @Param buyCount: number = 0;
  @Require @Param money: number = 0;
  @Local isAllChecked: boolean = false;
  @Event allCheckedChange: (isAllChecked: boolean) => void = () => {
  };

  build() {
    Row() {
      Row() {
        Checkbox()
          .select(this.isAllChecked!!)
          .width(20)
          .height(20)
          .margin({
            left: 2,
            top: 2,
            right: 5,
            bottom: 2
          })
          .onChange(() => this.allCheckedChange(this.isAllChecked))

        Text('全选')
          .fontSize(16)
          .fontWeight(400)
      }
      .width(80)
      .height(24)
      .onClick(() => {
        this.isAllChecked = !this.isAllChecked;
      })

      Row() {
        Text('总计')
          .fontSize(14)
          .fontWeight(400)

        Text('￥')
          .fontSize(14)
          .fontWeight(500)
          .fontColor('rgba(10,89,247,1)')

        Text(this.money.toString())
          .fontSize(18)
          .fontWeight(500)
          .fontColor('rgba(10,89,247,1)')
          .margin({ right: 9 })

        Button(`结算 (${this.buyCount})`)
          .width(120)
          .height(40)
          .fontSize(18)
          .fontWeight(500)
      }
    }
    .width('100%')
    // justifyContent 设置子组件在水平方向上的对齐格式
    // FlexAlign.SpaceBetween 第一个元素与行首对齐，最后一个元素与行尾对齐
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('rgba(241,243,245,0.8)')
    .backdropBlur(80) // 背景模糊效果,越大越模糊
    .padding({
      left: 16,
      right: 16,
      top: 8,
      bottom: 36
    })
  }
}

@Entry
@ComponentV2
struct ShoppingCart {
  @Local money: number = 0;
  @Local productList: ProductItem[] = [
    new ProductItem($r('app.media.1'), 'Matterhorn', 28898),
    new ProductItem($r('app.media.2'), '珠峰日照金山', 8888),
    new ProductItem($r('app.media.3'), '瑞士滑雪', 16666),
    new ProductItem($r('app.media.4'), 'Emerald Lake', 28898),
    new ProductItem($r('app.media.5'), 'Cliffs of Moher', 16666),
    new ProductItem($r('app.media.1'), 'Matterhorn', 28898),
    new ProductItem($r('app.media.2'), '珠峰日照金山', 8888),
    new ProductItem($r('app.media.3'), '瑞士滑雪', 16666),
    new ProductItem($r('app.media.4'), 'Emerald Lake', 28898),
    new ProductItem($r('app.media.5'), 'Cliffs of Moher', 16666)
  ];

  // 对选中商品的数量进行累计求和
  @Computed
  get buyCount(): number {
    // reduce对数组内中的每个元素执行归约函数，并返回最终的归约结果
    return this.productList.reduce((sum, productItem) => productItem.checked ? (sum + productItem.count) : sum, 0);
  }

  // 商品数量变化操作
  @Provider('countChange') countChange: (id: string, operation: string) => void = (id, operation) => {
    // 遍历商品列表
    for (let i = 0; i < this.productList.length; i++) {
      // 找到与传入商品id相同的商品
      if (this.productList[i].id === id) {
        // 如果传入操作符为“add”将其数量加一，否则减一
        if (operation === 'add') {
          this.productList[i].count++;
        } else {
          if (this.productList[i].count > 0) {
            this.productList[i].count--;
          }
        }
      }
    }
  }

  // 删除选中的商品
  deleteProduct(): void {
    // filter筛选器
    // 根据条件筛选未被选中的商品，只保留未被选中的商品
    this.productList = this.productList.filter(productItem => !productItem.checked);
  }

  // 添加新商品
  addProduct(): void {
    const images = [
      $r('app.media.1'),
      $r('app.media.2'),
      $r('app.media.3'),
      $r('app.media.4'),
      $r('app.media.5')
    ];
    const names = ['Matterhorn', '珠峰日照金山', '瑞士滑雪', 'Emerald Lake', 'Cliffs of Moher'];
    const prices = [28898, 8888, 16666, 28898, 16666];
    
    // 随机选择一个商品
    const randomIndex = Math.floor(Math.random() * images.length);
    const newProduct = new ProductItem(images[randomIndex], names[randomIndex], prices[randomIndex]);
    newProduct.count = 1; // 设置初始数量为1
    
    // 创建新数组引用，触发UI更新
    this.productList = [...this.productList, newProduct];
    
    // 强制触发状态更新
    console.info(`添加商品成功，当前商品数量: ${this.productList.length}`);
  }

  // 监听选中商品的总数量变化，发生变化时重新计算总金额
  @Monitor('buyCount')
  buyCountChange() {
    // reduce对数组内中的每个元素执行归约函数，并返回最终的归约结果
    this.money = this.productList.reduce((sum, productItem) => productItem.checked ?
      (sum + productItem.count * productItem.price) : sum, 0);
  }

  // 全选按钮操作
  allCheckedChange(isAllChecked: boolean): void {
    for (let index = 0; index < this.productList.length; index++) {
      this.productList[index].checked = isAllChecked;
    }
  };

  build() {
    Column() {
      // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
      Stack() {
        // 中间 商品列表
        ProductListView({ productList: this.productList })

        // 顶部 标题栏
        Row() {
          TitleView({ 
            deleteProduct: () => this.deleteProduct(),
            addProduct: () => this.addProduct()
          })
        }
        // LocalizedAlignment.TOP设置该组件在Stack容器内顶部对齐
        .layoutGravity(LocalizedAlignment.TOP)

        // 底部 总计栏
        Row() {
          StatisticsView({
            buyCount: this.buyCount,
            money: this.money,
            allCheckedChange: isAllChecked => this.allCheckedChange(isAllChecked)
          })
        }
        // LocalizedAlignment.BOTTOM设置该组件在Stack容器内底部对齐
        .layoutGravity(LocalizedAlignment.BOTTOM)
      }
      .height(LayoutPolicy.matchParent) // LayoutPolicy.matchParent当前组件自适应父组件布局时，其大小与父组件内容区相等
      .backgroundColor($r('app.color.background_color'))
      .ignoreLayoutSafeArea() // 扩展组件布局时的安全区，参数为空默认扩展到所有安全区域，比如：状态栏、导航栏等
    }
    .width('100%')
    .height('100%')
  }
}