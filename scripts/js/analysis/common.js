//function init() {
//    //资源加载状态判断
//    if (layer.loaded) {
//        buildLayerList(layer);
//    } else {
//        dojo.connect(layer, "onLoad", buildLayerList);
//    }
//}
////获取地图子图层
//function getChildrenNodes(parentnodes, node){
//    for (var i = parentnodes.length - 1; i >= 0; i--) {
//        var pnode = parentnodes[i];
//        //如果是父子关系，为父节点增加子节点，退出for循环
//        if (pnode.id==node.pid) {
//            pnode.state="closed" ;//关闭二级树
//            pnode.children.push(node) ;
//            return ;
//        } else {
//            //如果不是父子关系，删除父节点栈里当前的节点，
//            //继续此次循环，直到确定父子关系或不存在退出for循环
//            parentnodes.pop() ;
//        }
//    }
//}
////构造图层树状结构
//function buildLayerList(layer) {
//    var treeList = [] ;//jquery-easyui的tree用到的数组
//    var parentnodes = [] ;//保存所有的父亲节点
//    var root = {"id":"rootnode","text":"所有图层","children":[]} ;//增加根节点
//    if (layerinfos != null && layerinfos.length > 0) {
//        //按图层层级结构顺序添加图层
//        for(var i=0,j=layerinfos.length;i<j;i++){
//            var info = layerinfos[i] ;
//            if (info.defaultVisibility) {
//                visible.push(info.id);
//            }
//            //判断节点状态
//            if(info.parentLayerId==-1){
//                parentnodes.push(node) ;
//                root.children.push(node) ;
//            }else{
//                //保存图层层级属性
//                getChildrenNodes(parentnodes, node);
//                parentnodes.push(node) ;
//            }
//        }
//    }
//    treeList.push(root) ;
//    //调用图层控制页面的jquery-easyui的树
//    $('#toc').tree({
//        onCheck:function (node,checked){//更新显示选择的图层
//            var visible = [];
//            var nodes = $('#toc').tree("getChecked") ;
//            dojo.forEach(nodes, function(node) {
//                visible.push(node.id);
//            });
//            //设置图层当前状态
//            layer.setVisibleLayers(visible);
//        }
//    });
//    map.addLayer(layer);
//}
//
//<!-- Dojo模块和ESRI包引用-->
//require([
//        "dojo/parser",
//        "esri/map",
//        "esri/layers/ArcGISTiledMapServiceLayer",
//        "esri/layers/ArcGISDynamicMapServiceLayer",
//        "dijit/layout/BorderContainer",
//        "dijit/layout/ContentPane",
//        "dijit/layout/AccordionContainer",
//        "dojo/domReady!"],
//    //回调函数设计
//    function (parser,Map, ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer) {
//        parser.parse();
//
//        //根据需求参数创建地图对象
//        var map = new Map(
//            //获取界面上地图控件并初始化
//            "mapDiv",
//            {
//                logo : false,
//                center: [116.442, 40.257],
//                zoom : 1,
//                sliderStyle : "large"
//            });
//        //加载基础地理信息数据并生成基础地理信息图层
//        var agoLayer = new ArcGISTiledMapServiceLayer(agoServiceURL, { displayLevels: [0, 1, 2, 3, 4] });
//        //将新图层叠加到地图
//        map.addLayer(agoLayer);
//        //加载放射性核素数据
//        var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer(dynamicUrl);
//        //将核素数据图层叠加到地图
//        map.addLayer(dynamicMapServiceLayer);
//        //添加鼠标操作响应事件
//        map.on('mouse-move', showCoordinates);
//        map.on('mouse-drag', showCoordinates);
//        //鼠标操作响应函数
//        function showCoordinates(event) {
//            var level = map.getLevel();
//            var pres = Math.min(6, level);
//            var x = event.mapPoint.x.toFixed(pres);
//            var y = event.mapPoint.y.toFixed(pres);
//            //更新界面空间显示内容
//            document.getElementById('mapPosition').innerHTML = x + " "+y;
//        }
//    });
//
//<!-- Dojo模块和ESRI包引用省略-->
//function (parser, Map, ArcGISDynamicMapServiceLayer, script, registry, json) {
//    parser.parse();
//    //加载放射性核素数据图层
//    agoLayer = new ArcGISDynamicMapServiceLayer(sedimentUrl);
//    map.addLayer(agoLayer);
//    //获取图层属性数据
//    map.on('load', function () {
//        for (var i = 0; i < agoLayer.layerInfos.length; i++) {
//            getLayerJson(agoServiceURL, i);
//        }
//    });
//    //绑定查询响应事件
//    var tb = new Draw(map);
//    tb.on("draw-end", doQuery);
//    //执行查询操作
//    function doQuery(evt) {
//        //获取空间查询的几何对象
//        query.geometry = evt.geometry;
//        var taskName = document.getElementById("task").value;
//        //设置查询任务和查询属性
//        if (taskName === "riversTask") {
//            queryTask = riversTask;
//            query.outFields = ["NAME", "SYSTEM", ”LENGTH”]
//            ;
//        }
//        else if (taskName === "sampleInfo") {
//            queryTask = radioTask;
//            query.outFields = ["*"];
//        }
//        queryTask.execute(query, showResults);
//    }
//
//    //显示返回的结果数据
//    function showLayerInfos() {
//        radioInfoTemplate = new esri.InfoTemplate("sampleInfo", radioInfoContent);
//        infoTemplate = radioInfoTemplate;
//        var resultFeatures = featureSet.features;
//        for (var i = 0, il = resultFeatures.length; i < il; i++) {
//            // 从featureSet中得到当前地理特征
//            var graphic = resultFeatures[i];
//            graphic.setSymbol(symbol);
//            // 设置信息模板
//            graphic.setInfoTemplate(infoTemplate);
//            // 在地图的图形图层中增加图形                         map.graphics.add(graphic);
//        }
//    }
//}
//
//function idwcomputer($datas, $result) {
//    //数据规范性判断
//    if($datas.lenght < $minLength) return $result;
//    $m0 = $datas.length;
//    $m1 = $result.length;
//    //计算距离列表
//    for($i=0; $i < $m1; $i ++){
//        for($j = 0; $j < $m0; $j ++){
//            $tmpDis = Math.sqrt(Math.pow($result[$i].x - $datas[$j].$x, 2) + Math.pow($result[$i].$y - $datas[$j].y, 2));
//            $r.push($tmpDis); //保存距离值
//        }
//    }
//    //计算插值过程
//    for ($i = 0; $i < $m1; $i ++) {
//        //计算重复性判断
//        $ifFind = false;
//        for ($j = $m0 * $i; $j < $m0 * $i + $m0; $j ++)
//        {
//            if (Math.abs($r[$j]) < $minDistance)
//            {
//                $result[$i].$v = $datas[$j - $m0 * $i].$v;
//                $ifFind = true;
//                break;
//            }
//        }
//        if ($ifFind) continue;
//        //计算各个点距离和权重值比值
//        $numerator = 0;
//        $denominator = 0;
//        for ($j = $m0 * $i; $j < $m0 * $i + $m0; $j ++)
//        {
//            $numerator += $datas[$j - $m0 * $i].$v / ($r[$j] * $r[$j]);
//            $denominator += 1 / ($r[$j] * $r[$j]);
//        }
//        //保存计算结果
//        $result[$i].$v = $numerator / $denominator;
//    }
//    return result;
//}
//
////添加响应事件
//registry.forEach(function (d) {
//    if (d.declaredClass === "dijit.form.Button") {
//        d.on("click", activateTool);
//    }
//});
//// 初始化查询任务与查询参数
//var queryTask = new QueryTask(layer + index);
//query.returnGeometry = true;
//tb.on("draw-end", doBuffer);
//gsvc = new esri.tasks.Geoprocessor(gpUrl);
////执行缓冲区查询
//function doBuffer(evt) {
//    //清除之前查询结果
//    map.graphics.clear();
//    var params = new BufferParameters();
//    //设置缓冲查询参数
//    params.geometries = [evt.geometry];
//    //获取缓冲查询距离
//    params.distances = [document.getElementById('bufferDistance').value];
//    params.unit = GeometryService.UNIT_KILOMETER;
//    params.outSpatialReference = map.spatialReference;//设置缓冲区查询参数
//    params.bufferSpatialReference = new SpatialReference({ wkid: curReference});
//    //创建featureSet
//    features.push(graphic);
//    params.featureset = features;
//    gsvc.buffer(params, doQuery);
//}
////在缓冲区查询
//function doQuery(polygon) {
//    var symbol = new SimpleFillSymbol("none", //缓冲区查询结果标识
//        new SimpleLineSymbol("dashdot", new Color([255, 0, 0]), 2),
//        new Color([255, 255, 0, 0.25]));
//    var graphic = new Graphic(polygon[0], symbol);//创建缓冲结果显示绘图对象
//    map.graphics.add(graphic);
//    query.geometry = graphic.geometry;
//    queryTask.execute(query, showResult);
//}
//
//
//
//创建绘图对象
var toolBar = new Draw(map);
//初始化标注对象
lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([255, 0, 0]), 3);
polygonSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new Color([255, 0, 0, 0.25]));
//给绘制标注的按钮绑定事件
query(".pbtn").on("click",function(event){
    //激活绘制多边形
    toolBar.activate(Draw.POLYGON, {
        showTooltips:true
    })
})
//给地图制图按钮绑定事件
on(dom.byId("Btn"),"click",function(){
    //创建地图打印对象
    var printMap = new PrintTask(printTask);
    //创建地图打印模版
    var template = new PrintTemplate();
    //创建地图的打印参数，参数里面包括：模版和地图
    var params = new PrintParameters();
    if (map.SpatialReference()) {
        printMap.outSpatialReference = map.SpatialReference;
    } else {
        printMap.alert(printFailed);
    }
    //设置参数模版
    params.template = template;
    //运行结果
    printMap.execute(params, function(result){
        if (result != null) {
            //打开生成的地图
            window.open(result.url);
        }
    })
})