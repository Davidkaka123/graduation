//function init() {
//    //��Դ����״̬�ж�
//    if (layer.loaded) {
//        buildLayerList(layer);
//    } else {
//        dojo.connect(layer, "onLoad", buildLayerList);
//    }
//}
////��ȡ��ͼ��ͼ��
//function getChildrenNodes(parentnodes, node){
//    for (var i = parentnodes.length - 1; i >= 0; i--) {
//        var pnode = parentnodes[i];
//        //����Ǹ��ӹ�ϵ��Ϊ���ڵ������ӽڵ㣬�˳�forѭ��
//        if (pnode.id==node.pid) {
//            pnode.state="closed" ;//�رն�����
//            pnode.children.push(node) ;
//            return ;
//        } else {
//            //������Ǹ��ӹ�ϵ��ɾ�����ڵ�ջ�ﵱǰ�Ľڵ㣬
//            //�����˴�ѭ����ֱ��ȷ�����ӹ�ϵ�򲻴����˳�forѭ��
//            parentnodes.pop() ;
//        }
//    }
//}
////����ͼ����״�ṹ
//function buildLayerList(layer) {
//    var treeList = [] ;//jquery-easyui��tree�õ�������
//    var parentnodes = [] ;//�������еĸ��׽ڵ�
//    var root = {"id":"rootnode","text":"����ͼ��","children":[]} ;//���Ӹ��ڵ�
//    if (layerinfos != null && layerinfos.length > 0) {
//        //��ͼ��㼶�ṹ˳�����ͼ��
//        for(var i=0,j=layerinfos.length;i<j;i++){
//            var info = layerinfos[i] ;
//            if (info.defaultVisibility) {
//                visible.push(info.id);
//            }
//            //�жϽڵ�״̬
//            if(info.parentLayerId==-1){
//                parentnodes.push(node) ;
//                root.children.push(node) ;
//            }else{
//                //����ͼ��㼶����
//                getChildrenNodes(parentnodes, node);
//                parentnodes.push(node) ;
//            }
//        }
//    }
//    treeList.push(root) ;
//    //����ͼ�����ҳ���jquery-easyui����
//    $('#toc').tree({
//        onCheck:function (node,checked){//������ʾѡ���ͼ��
//            var visible = [];
//            var nodes = $('#toc').tree("getChecked") ;
//            dojo.forEach(nodes, function(node) {
//                visible.push(node.id);
//            });
//            //����ͼ�㵱ǰ״̬
//            layer.setVisibleLayers(visible);
//        }
//    });
//    map.addLayer(layer);
//}
//
//<!-- Dojoģ���ESRI������-->
//require([
//        "dojo/parser",
//        "esri/map",
//        "esri/layers/ArcGISTiledMapServiceLayer",
//        "esri/layers/ArcGISDynamicMapServiceLayer",
//        "dijit/layout/BorderContainer",
//        "dijit/layout/ContentPane",
//        "dijit/layout/AccordionContainer",
//        "dojo/domReady!"],
//    //�ص��������
//    function (parser,Map, ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer) {
//        parser.parse();
//
//        //�����������������ͼ����
//        var map = new Map(
//            //��ȡ�����ϵ�ͼ�ؼ�����ʼ��
//            "mapDiv",
//            {
//                logo : false,
//                center: [116.442, 40.257],
//                zoom : 1,
//                sliderStyle : "large"
//            });
//        //���ػ���������Ϣ���ݲ����ɻ���������Ϣͼ��
//        var agoLayer = new ArcGISTiledMapServiceLayer(agoServiceURL, { displayLevels: [0, 1, 2, 3, 4] });
//        //����ͼ����ӵ���ͼ
//        map.addLayer(agoLayer);
//        //���ط����Ժ�������
//        var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer(dynamicUrl);
//        //����������ͼ����ӵ���ͼ
//        map.addLayer(dynamicMapServiceLayer);
//        //�����������Ӧ�¼�
//        map.on('mouse-move', showCoordinates);
//        map.on('mouse-drag', showCoordinates);
//        //��������Ӧ����
//        function showCoordinates(event) {
//            var level = map.getLevel();
//            var pres = Math.min(6, level);
//            var x = event.mapPoint.x.toFixed(pres);
//            var y = event.mapPoint.y.toFixed(pres);
//            //���½���ռ���ʾ����
//            document.getElementById('mapPosition').innerHTML = x + " "+y;
//        }
//    });
//
//<!-- Dojoģ���ESRI������ʡ��-->
//function (parser, Map, ArcGISDynamicMapServiceLayer, script, registry, json) {
//    parser.parse();
//    //���ط����Ժ�������ͼ��
//    agoLayer = new ArcGISDynamicMapServiceLayer(sedimentUrl);
//    map.addLayer(agoLayer);
//    //��ȡͼ����������
//    map.on('load', function () {
//        for (var i = 0; i < agoLayer.layerInfos.length; i++) {
//            getLayerJson(agoServiceURL, i);
//        }
//    });
//    //�󶨲�ѯ��Ӧ�¼�
//    var tb = new Draw(map);
//    tb.on("draw-end", doQuery);
//    //ִ�в�ѯ����
//    function doQuery(evt) {
//        //��ȡ�ռ��ѯ�ļ��ζ���
//        query.geometry = evt.geometry;
//        var taskName = document.getElementById("task").value;
//        //���ò�ѯ����Ͳ�ѯ����
//        if (taskName === "riversTask") {
//            queryTask = riversTask;
//            query.outFields = ["NAME", "SYSTEM", ��LENGTH��]
//            ;
//        }
//        else if (taskName === "sampleInfo") {
//            queryTask = radioTask;
//            query.outFields = ["*"];
//        }
//        queryTask.execute(query, showResults);
//    }
//
//    //��ʾ���صĽ������
//    function showLayerInfos() {
//        radioInfoTemplate = new esri.InfoTemplate("sampleInfo", radioInfoContent);
//        infoTemplate = radioInfoTemplate;
//        var resultFeatures = featureSet.features;
//        for (var i = 0, il = resultFeatures.length; i < il; i++) {
//            // ��featureSet�еõ���ǰ��������
//            var graphic = resultFeatures[i];
//            graphic.setSymbol(symbol);
//            // ������Ϣģ��
//            graphic.setInfoTemplate(infoTemplate);
//            // �ڵ�ͼ��ͼ��ͼ��������ͼ��                         map.graphics.add(graphic);
//        }
//    }
//}
//
//function idwcomputer($datas, $result) {
//    //���ݹ淶���ж�
//    if($datas.lenght < $minLength) return $result;
//    $m0 = $datas.length;
//    $m1 = $result.length;
//    //��������б�
//    for($i=0; $i < $m1; $i ++){
//        for($j = 0; $j < $m0; $j ++){
//            $tmpDis = Math.sqrt(Math.pow($result[$i].x - $datas[$j].$x, 2) + Math.pow($result[$i].$y - $datas[$j].y, 2));
//            $r.push($tmpDis); //�������ֵ
//        }
//    }
//    //�����ֵ����
//    for ($i = 0; $i < $m1; $i ++) {
//        //�����ظ����ж�
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
//        //�������������Ȩ��ֵ��ֵ
//        $numerator = 0;
//        $denominator = 0;
//        for ($j = $m0 * $i; $j < $m0 * $i + $m0; $j ++)
//        {
//            $numerator += $datas[$j - $m0 * $i].$v / ($r[$j] * $r[$j]);
//            $denominator += 1 / ($r[$j] * $r[$j]);
//        }
//        //���������
//        $result[$i].$v = $numerator / $denominator;
//    }
//    return result;
//}
//
////�����Ӧ�¼�
//registry.forEach(function (d) {
//    if (d.declaredClass === "dijit.form.Button") {
//        d.on("click", activateTool);
//    }
//});
//// ��ʼ����ѯ�������ѯ����
//var queryTask = new QueryTask(layer + index);
//query.returnGeometry = true;
//tb.on("draw-end", doBuffer);
//gsvc = new esri.tasks.Geoprocessor(gpUrl);
////ִ�л�������ѯ
//function doBuffer(evt) {
//    //���֮ǰ��ѯ���
//    map.graphics.clear();
//    var params = new BufferParameters();
//    //���û����ѯ����
//    params.geometries = [evt.geometry];
//    //��ȡ�����ѯ����
//    params.distances = [document.getElementById('bufferDistance').value];
//    params.unit = GeometryService.UNIT_KILOMETER;
//    params.outSpatialReference = map.spatialReference;//���û�������ѯ����
//    params.bufferSpatialReference = new SpatialReference({ wkid: curReference});
//    //����featureSet
//    features.push(graphic);
//    params.featureset = features;
//    gsvc.buffer(params, doQuery);
//}
////�ڻ�������ѯ
//function doQuery(polygon) {
//    var symbol = new SimpleFillSymbol("none", //��������ѯ�����ʶ
//        new SimpleLineSymbol("dashdot", new Color([255, 0, 0]), 2),
//        new Color([255, 255, 0, 0.25]));
//    var graphic = new Graphic(polygon[0], symbol);//������������ʾ��ͼ����
//    map.graphics.add(graphic);
//    query.geometry = graphic.geometry;
//    queryTask.execute(query, showResult);
//}
//
//
//
//������ͼ����
var toolBar = new Draw(map);
//��ʼ����ע����
lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([255, 0, 0]), 3);
polygonSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new Color([255, 0, 0, 0.25]));
//�����Ʊ�ע�İ�ť���¼�
query(".pbtn").on("click",function(event){
    //������ƶ����
    toolBar.activate(Draw.POLYGON, {
        showTooltips:true
    })
})
//����ͼ��ͼ��ť���¼�
on(dom.byId("Btn"),"click",function(){
    //������ͼ��ӡ����
    var printMap = new PrintTask(printTask);
    //������ͼ��ӡģ��
    var template = new PrintTemplate();
    //������ͼ�Ĵ�ӡ�������������������ģ��͵�ͼ
    var params = new PrintParameters();
    if (map.SpatialReference()) {
        printMap.outSpatialReference = map.SpatialReference;
    } else {
        printMap.alert(printFailed);
    }
    //���ò���ģ��
    params.template = template;
    //���н��
    printMap.execute(params, function(result){
        if (result != null) {
            //�����ɵĵ�ͼ
            window.open(result.url);
        }
    })
})