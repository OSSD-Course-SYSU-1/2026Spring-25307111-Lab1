if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import util from "@ohos:util";
@ObservedV2
class ProductItem {
    id: string = util.generateRandomUUID();
    image: Resource = { "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" };
    @Trace
    name: ResourceStr = ''; // 商品名称
    @Trace
    checked: boolean = false; // 选中状态
    @Trace
    price: number = 0; // 商品价格
    @Trace
    count: number = 0; // 商品数量
    constructor(image: Resource, name: ResourceStr, price: number) {
        this.image = image;
        this.name = name;
        this.price = price;
    }
}
class TitleView extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.deleteProduct = "deleteProduct" in params ? params.deleteProduct : () => {
        };
        this.addProduct = "addProduct" in params ? params.addProduct : () => {
        };
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.deleteProduct = "deleteProduct" in params ? params.deleteProduct : () => {
        };
        this.addProduct = "addProduct" in params ? params.addProduct : () => {
        };
    }
    @Event
    deleteProduct: () => void;
    @Event
    addProduct: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(42:5)", "entry");
            Row.backgroundColor('rgba(241,243,245,0.8)');
            Row.backdropBlur(80);
            Row.padding({
                // 内边距
                top: 36,
                left: 16,
                right: 16,
                bottom: 14
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(43:7)", "entry");
            Row.width('100%');
            Row.height(56);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('购物车');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(45:9)", "entry");
            Text.fontSize(26);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(49:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("entry/src/main/ets/pages/Index.ets(50:11)", "entry");
            Button.width(40);
            Button.height(40);
            Button.borderRadius(20);
            Button.backgroundColor('rgba(0,0,0,0.05)');
            Button.onClick(() => this.addProduct());
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831481, "type": 40000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(51:13)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([Color.Black]);
        }, SymbolGlyph);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("entry/src/main/ets/pages/Index.ets(61:11)", "entry");
            Button.width(40);
            Button.height(40);
            Button.borderRadius(20);
            Button.backgroundColor('rgba(0,0,0,0.05)');
            Button.onClick(() => this.deleteProduct());
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // $r('资源路径') 静态资源引用语法。 应用资源：$r('app.type.name')  系统资源：$r('sys.type.resource_id')
            // SymbolGlyph显示图标小符号的组件
            SymbolGlyph.create({ "id": 125831542, "type": 40000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(64:13)", "entry");
            // $r('资源路径') 静态资源引用语法。 应用资源：$r('app.type.name')  系统资源：$r('sys.type.resource_id')
            // SymbolGlyph显示图标小符号的组件
            SymbolGlyph.fontSize(24);
            // $r('资源路径') 静态资源引用语法。 应用资源：$r('app.type.name')  系统资源：$r('sys.type.resource_id')
            // SymbolGlyph显示图标小符号的组件
            SymbolGlyph.fontColor([Color.Black]);
        }, SymbolGlyph);
        Button.pop();
        Row.pop();
        Row.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ProductItemView extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("productItem", (params && "productItem" in params) ? params.productItem : new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '', 0));
        this.countChange = () => {
        };
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("productItem", (params && "productItem" in params) ? params.productItem : new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '', 0));
        this.resetConsumer("countChange", () => {
        });
    }
    @Param
    readonly productItem: ProductItem;
    @Consumer('countChange')
    countChange: (id: string, operation: string) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(100:5)", "entry");
            Row.width('100%');
            Row.height(104);
            Row.borderRadius(16);
            Row.padding(12);
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(101:7)", "entry");
            Column.width(112);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(102:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create();
            Checkbox.debugLine("entry/src/main/ets/pages/Index.ets(103:11)", "entry");
            Checkbox.select({ value: this.productItem.checked, $value: newValue => { this.productItem.checked = newValue; } });
            Checkbox.width(20);
            Checkbox.height(20);
            Checkbox.margin(2);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.productItem.image);
            Image.debugLine("entry/src/main/ets/pages/Index.ets(109:11)", "entry");
            Image.width(76);
            Image.height(76);
            Image.borderRadius(16);
            Image.margin({ left: 12 });
        }, Image);
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(118:7)", "entry");
            Column.layoutWeight(1);
            Column.margin({ left: 12 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(119:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(120:11)", "entry");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productItem.name);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(121:13)", "entry");
            Text.height(21);
            Text.fontColor('rgba(0,0,0,0.9)');
            Text.fontSize(16);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('旅行');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(127:13)", "entry");
            Text.height(16);
            Text.fontColor('rgba(0,0,0,0.4)');
            Text.fontSize(12);
            Text.fontWeight(400);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(138:9)", "entry");
            Row.height(24);
            Row.margin({ top: 19, right: 0 });
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(139:11)", "entry");
            Row.layoutWeight(1);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('￥');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(140:13)", "entry");
            Text.fontColor('rgba(0,0,0,0.9)');
            Text.fontWeight(700);
            Text.fontSize(12);
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productItem.price.toString());
            Text.debugLine("entry/src/main/ets/pages/Index.ets(145:13)", "entry");
            Text.fontColor('rgba(0,0,0,0.9)');
            Text.fontWeight(700);
            Text.fontSize(16);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(154:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("entry/src/main/ets/pages/Index.ets(155:13)", "entry");
            Button.width(30);
            Button.height(30);
            Button.borderRadius(15);
            Button.backgroundColor(Color.White);
            Button.enabled(this.productItem.count > 0 ? true : false);
            Button.onClick(() => {
                this.countChange(this.productItem.id, 'subtract');
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831485, "type": 40000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(156:15)", "entry");
            SymbolGlyph.fontSize(26);
            SymbolGlyph.fontColor(['rgba(10,89,247,1)']);
        }, SymbolGlyph);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.productItem.count.toString());
            Text.debugLine("entry/src/main/ets/pages/Index.ets(170:13)", "entry");
            Text.width(30);
            Text.height(30);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("entry/src/main/ets/pages/Index.ets(177:13)", "entry");
            Button.width(30);
            Button.height(30);
            Button.borderRadius(15);
            Button.backgroundColor(Color.White);
            Button.onClick(() => this.countChange(this.productItem.id, 'add'));
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831482, "type": 40000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(178:15)", "entry");
            SymbolGlyph.fontSize(26);
            SymbolGlyph.fontColor(['rgba(10,89,247,1)']);
        }, SymbolGlyph);
        Button.pop();
        Row.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("productItem" in params) {
            this.updateParam("productItem", params.productItem);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ProductListView extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("productList", (params && "productList" in params) ? params.productList : []);
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("productList", (params && "productList" in params) ? params.productList : []);
        this.resetMonitorsOnReuse();
    }
    @Param
    readonly productList: ProductItem[];
    @Monitor('productList')
    onProductListChange() {
        // 监听productList变化，触发UI刷新
    }
    // @Builder装饰器用于封装可复用的UI结构
    itemHead(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(219:5)", "entry");
            Blank.margin({ top: 106 });
        }, Blank);
        Blank.pop();
    }
    // @Builder装饰器用于封装可复用的UI结构
    itemFooter(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/Index.ets(226:5)", "entry");
            Blank.margin({ top: 84 });
        }, Blank);
        Blank.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(231:5)", "entry");
            Column.margin({
                left: 16,
                right: 16
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // space用于设置列表子项之间的距离
            List.create({ space: 12 });
            List.debugLine("entry/src/main/ets/pages/Index.ets(233:7)", "entry");
            // space用于设置列表子项之间的距离
            List.width('100%');
            // space用于设置列表子项之间的距离
            List.height('100%');
            // space用于设置列表子项之间的距离
            List.scrollBar(BarState.Off);
            // space用于设置列表子项之间的距离
            List.sticky(StickyStyle.Header);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ListItemGroup.create({
                // ListItemGroup用来展示列表item分组
                header: this.itemHead.bind(this),
                footer: this.itemFooter.bind(this)
            });
            ListItemGroup.debugLine("entry/src/main/ets/pages/Index.ets(234:9)", "entry");
            ListItemGroup.divider({ strokeWidth: 12, color: '#F1F3F5' });
        }, ListItemGroup);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 对商品列表进行循环渲染
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const productItem = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("entry/src/main/ets/pages/Index.ets(241:13)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ProductItemView(this, {
                                        productItem: productItem
                                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 242, col: 15 });
                                    ViewV2.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            productItem: productItem
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        productItem: productItem
                                    });
                                }
                            }, { name: "ProductItemView" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.productList, forEachItemGenFunction, (productItem: ProductItem) => productItem.id, false, false);
        }, ForEach);
        // 对商品列表进行循环渲染
        ForEach.pop();
        ListItemGroup.pop();
        // space用于设置列表子项之间的距离
        List.pop();
        Column.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("productList" in params) {
            this.updateParam("productList", params.productList);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class StatisticsView extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("buyCount", (params && "buyCount" in params) ? params.buyCount : 0);
        this.initParam("money", (params && "money" in params) ? params.money : 0);
        this.isAllChecked = false;
        this.allCheckedChange = "allCheckedChange" in params ? params.allCheckedChange : () => {
        };
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("buyCount", (params && "buyCount" in params) ? params.buyCount : 0);
        this.resetParam("money", (params && "money" in params) ? params.money : 0);
        this.isAllChecked = false;
        this.allCheckedChange = "allCheckedChange" in params ? params.allCheckedChange : () => {
        };
    }
    @Param
    readonly buyCount: number;
    @Param
    readonly money: number;
    @Local
    isAllChecked: boolean;
    @Event
    allCheckedChange: (isAllChecked: boolean) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(272:5)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.backgroundColor('rgba(241,243,245,0.8)');
            Row.backdropBlur(80);
            Row.padding({
                left: 16,
                right: 16,
                top: 8,
                bottom: 36
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(273:7)", "entry");
            Row.width(80);
            Row.height(24);
            Row.onClick(() => {
                this.isAllChecked = !this.isAllChecked;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create();
            Checkbox.debugLine("entry/src/main/ets/pages/Index.ets(274:9)", "entry");
            Checkbox.select({ value: this.isAllChecked, $value: newValue => { this.isAllChecked = newValue; } });
            Checkbox.width(20);
            Checkbox.height(20);
            Checkbox.margin({
                left: 2,
                top: 2,
                right: 5,
                bottom: 2
            });
            Checkbox.onChange(() => this.allCheckedChange(this.isAllChecked));
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全选');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(286:9)", "entry");
            Text.fontSize(16);
            Text.fontWeight(400);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(296:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('总计');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(297:9)", "entry");
            Text.fontSize(14);
            Text.fontWeight(400);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('￥');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(301:9)", "entry");
            Text.fontSize(14);
            Text.fontWeight(500);
            Text.fontColor('rgba(10,89,247,1)');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.money.toString());
            Text.debugLine("entry/src/main/ets/pages/Index.ets(306:9)", "entry");
            Text.fontSize(18);
            Text.fontWeight(500);
            Text.fontColor('rgba(10,89,247,1)');
            Text.margin({ right: 9 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(`结算 (${this.buyCount})`);
            Button.debugLine("entry/src/main/ets/pages/Index.ets(312:9)", "entry");
            Button.width(120);
            Button.height(40);
            Button.fontSize(18);
            Button.fontWeight(500);
        }, Button);
        Button.pop();
        Row.pop();
        Row.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("buyCount" in params) {
            this.updateParam("buyCount", params.buyCount);
        }
        if ("money" in params) {
            this.updateParam("money", params.money);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ShoppingCart extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.money = 0;
        this.productList = [
            new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Matterhorn', 28898),
            new ProductItem({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '珠峰日照金山', 8888),
            new ProductItem({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '瑞士滑雪', 16666),
            new ProductItem({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Emerald Lake', 28898),
            new ProductItem({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Cliffs of Moher', 16666),
            new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Matterhorn', 28898),
            new ProductItem({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '珠峰日照金山', 8888),
            new ProductItem({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '瑞士滑雪', 16666),
            new ProductItem({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Emerald Lake', 28898),
            new ProductItem({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Cliffs of Moher', 16666)
        ];
        this.countChange = (id, operation) => {
            // 遍历商品列表
            for (let i = 0; i < this.productList.length; i++) {
                // 找到与传入商品id相同的商品
                if (this.productList[i].id === id) {
                    // 如果传入操作符为“add”将其数量加一，否则减一
                    if (operation === 'add') {
                        this.productList[i].count++;
                    }
                    else {
                        if (this.productList[i].count > 0) {
                            this.productList[i].count--;
                        }
                    }
                }
            }
        };
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.money = 0;
        this.productList = [
            new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Matterhorn', 28898),
            new ProductItem({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '珠峰日照金山', 8888),
            new ProductItem({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '瑞士滑雪', 16666),
            new ProductItem({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Emerald Lake', 28898),
            new ProductItem({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Cliffs of Moher', 16666),
            new ProductItem({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Matterhorn', 28898),
            new ProductItem({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '珠峰日照金山', 8888),
            new ProductItem({ "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, '瑞士滑雪', 16666),
            new ProductItem({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Emerald Lake', 28898),
            new ProductItem({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }, 'Cliffs of Moher', 16666)
        ];
        this.resetComputed("buyCount");
        this.countChange = (id, operation) => {
            // 遍历商品列表
            for (let i = 0; i < this.productList.length; i++) {
                // 找到与传入商品id相同的商品
                if (this.productList[i].id === id) {
                    // 如果传入操作符为“add”将其数量加一，否则减一
                    if (operation === 'add') {
                        this.productList[i].count++;
                    }
                    else {
                        if (this.productList[i].count > 0) {
                            this.productList[i].count--;
                        }
                    }
                }
            }
        };
        this.resetMonitorsOnReuse();
    }
    @Local
    money: number;
    @Local
    productList: ProductItem[];
    // 对选中商品的数量进行累计求和
    @Computed
    get buyCount(): number {
        // reduce对数组内中的每个元素执行归约函数，并返回最终的归约结果
        return this.productList.reduce((sum, productItem) => productItem.checked ? (sum + productItem.count) : sum, 0);
    }
    // 商品数量变化操作
    @Provider('countChange')
    countChange: (id: string, operation: string) => void;
    // 删除选中的商品
    deleteProduct(): void {
        // filter筛选器
        // 根据条件筛选未被选中的商品，只保留未被选中的商品
        this.productList = this.productList.filter(productItem => !productItem.checked);
    }
    // 添加新商品
    addProduct(): void {
        const images = [
            { "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" },
            { "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" },
            { "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" },
            { "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" },
            { "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" }
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
    }
    ;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(423:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(425:7)", "entry");
            // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
            Stack.height(LayoutPolicy.matchParent);
            // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
            Stack.backgroundColor({ "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.shoppingcartv2", "moduleName": "entry" });
            // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
            Stack.ignoreLayoutSafeArea();
        }, Stack);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 中间 商品列表
                    ProductListView(this, { productList: this.productList }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 427, col: 9 });
                    ViewV2.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            productList: this.productList
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        productList: this.productList
                    });
                }
            }, { name: "ProductListView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部 标题栏
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(430:9)", "entry");
            // 顶部 标题栏
            Row.layoutGravity(LocalizedAlignment.TOP);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleView(this, {
                        deleteProduct: () => this.deleteProduct(),
                        addProduct: () => this.addProduct()
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 431, col: 11 });
                    ViewV2.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            deleteProduct: () => this.deleteProduct(),
                            addProduct: () => this.addProduct()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleView" });
        }
        // 顶部 标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 底部 总计栏
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(440:9)", "entry");
            // 底部 总计栏
            Row.layoutGravity(LocalizedAlignment.BOTTOM);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new StatisticsView(this, {
                        buyCount: this.buyCount,
                        money: this.money,
                        allCheckedChange: isAllChecked => this.allCheckedChange(isAllChecked)
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 441, col: 11 });
                    ViewV2.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            buyCount: this.buyCount,
                            money: this.money,
                            allCheckedChange: isAllChecked => this.allCheckedChange(isAllChecked)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        buyCount: this.buyCount,
                        money: this.money
                    });
                }
            }, { name: "StatisticsView" });
        }
        // 底部 总计栏
        Row.pop();
        // Stack为堆叠容器，可以使标题栏和总计栏堆叠在商品列表上方
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ShoppingCart";
    }
}
registerNamedRoute(() => new ShoppingCart(undefined, {}), "", { bundleName: "com.example.shoppingcartv2", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
