/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindSimilarLocations.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\n        \x3ctable class\x3d"esriFormTable" \x3e \n          \x3ctr\x3e\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findSimilarLocationsIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n            \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.findSimilarLocations}\x3c/td\x3e\n            \x3ctd\x3e\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                  \x3c/div\x3e\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                  \x3c/div\x3e              \n              \x3c/div\x3e                \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/table\x3e\n      \x3c/div\x3e\n      \x3cdiv style\x3d"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \n         \x3ctbody\x3e\n          \x3ctr\x3e\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e${i18n.toolDefine}\x3c/td\x3e\n          \x3c/tr\x3e      \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\n              \x3clabel\x3e${i18n.labelOneText}\x3c/label\x3e\n              \x3cdiv class\x3d"esriLeadingMargin1 esriFloatTrailing"\x3e\n                \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.selectLabel}\',iconClass:\'esriAnalysisSelectFilterIcon\',showLabel:false" data-dojo-attach-point\x3d"_selectBtn" data-dojo-attach-event\x3d"onClick:_handleSelectionButtonClick"\x3e\x3c/div\x3e\n                \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.queryLabel}\',iconClass:\'esriAnalysisAttributeFiltercon\',showLabel:false" data-dojo-attach-point\x3d"_queryBtn" data-dojo-attach-event\x3d"onClick:_handleQueryButtonClick"\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriLeadingMargin2" data-dojo-attach-point\x3d"_filterLabel"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n              \x3clabel\x3e${i18n.labelTwoText}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"searchLayer"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"height:100%;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_candidateSelect" data-dojo-attach-event\x3d"onChange:_handleCandidateChange"\x3e\n                \x3coption value\x3d"-1"\x3e${i18n.selectSearchLayer}\x3c/option\x3e\n              \x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\n              \x3clabel\x3e${i18n.labelThreeText}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"analysisFields"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3ctable style\x3d"width:100%;table-layout:fixed;"\x3e\n                \x3ctbody\x3e\n                  \x3ctr\x3e\n                    \x3ctd\x3e\n                      \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_attrSelect"\x3e\x3c/select\x3e        \n                    \x3c/td\x3e\n                  \x3c/tr\x3e\n                \x3c/tbody\x3e\n              \x3c/table\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\n              \x3clabel\x3e${i18n.labelFourText}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"numberOfResults"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cdiv class\x3d"esriLeadingMargin1" style\x3d"width:100%;"\x3e\n                \x3clabel class\x3d"esriSelectLabel"\x3e\n                  \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_allRadioBtn" data-dojo-attach-event\x3d"onChange:_handleAllRankRadioChange" data-dojo-props\x3d"\'class\':\'esriSelectLabel\',checked:true" name\x3d"features"/\x3e\n                  ${i18n.allResults}\n                \x3c/label\x3e\n                \x3cbr/\x3e\n                \x3clabel class\x3d"esriSelectLabel"\x3e\n                  \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_toprankRadioBtn" data-dojo-attach-event\x3d"onChange:_handleTopRankRadioChange" data-dojo-props\x3d"\'class\':\'esriSelectLabel\'" name\x3d"features"/\x3e \n                  ${i18n.justShowTop}\n                  \x3cinput type\x3d"text" class\x3d"" style\x3d"width:20%" data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-attach-event\x3d"onChange:_handleTopRankInputChange" data-dojo-props\x3d"disabled:true,intermediateChanges:true,value:1, smallDelta:1, constraints:{min:1,places:0}, required:true" data-dojo-attach-point\x3d"_ranksInput"\x3e\x3c/input\x3e\n                \x3c/label\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true"\x3e\x3c/input\x3e\n               \x3c/div\x3e              \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/tbody\x3e         \n       \x3c/table\x3e\n     \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n      \x3cdiv style\x3d"width:100%;padding:0.5em 0 0.5em 0"\x3e\n       \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel" style\x3d"font-size:smaller;"\x3e\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n           ${i18n.useMapExtent}\n       \x3c/label\x3e\n      \x3c/div\x3e\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n          ${i18n.runAnalysis}\n      \x3c/button\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.expression}" data-dojo-props\x3d"closable:false" data-dojo-attach-point\x3d"_expDialog" style\x3d"width:65em;"\x3e\n      \x3c!--\x3cdiv data-dojo-attach-point\x3d"_testdiv"\x3etesting\x3c/div\x3e--\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_expressionForm" data-dojo-type\x3d"esri/dijit/analysis/ExpressionForm" data-dojo-props\x3d"showFirstRow:false,primaryActionButttonClass:\'${primaryActionButttonClass}\'"\x3e\x3c/div\x3e\n    \x3c/div\x3e   \n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\n      \x3c!--\x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\'  data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\n      \x3c/a\x3e--\x3e\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\n    \x3c/div\x3e         \n  \x3c/div\x3e\n'}});
define("esri/dijit/analysis/FindSimilarLocations","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/i18n dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/fx/easing dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dijit/form/NumberSpinner dijit/Dialog dojox/form/CheckedMultiSelect esri/kernel esri/lang esri/layers/FeatureLayer esri/dijit/analysis/AnalysisBase esri/dijit/analysis/utils esri/dijit/analysis/CreditEstimator esri/dijit/analysis/ExpressionForm esri/geometry/Extent esri/geometry/ScreenPoint esri/symbols/CartographicLineSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/tasks/query esri/renderers/jsonUtils dojo/text!esri/dijit/analysis/templates/FindSimilarLocations.html".split(" "),
function(r,C,d,e,m,u,f,v,D,w,P,h,k,n,Q,R,x,E,F,G,H,I,J,S,T,U,V,W,X,Y,Z,$,aa,ba,ca,da,K,y,l,L,p,ea,fa,M,z,t,A,q,B,s,N,O){r=C([F,G,H,I,J,L],{declaredClass:"esri.dijit.analysis.FindSimilarLocations",templateString:O,basePath:r.toUrl("esri/dijit/analysis"),widgetsInTemplate:!0,showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,i18n:null,toolName:"FindSimilarLocations",helpFileName:"FindSimilarLocations",resultParameter:"similarResultLayer",inputLayer:null,searchLayer:null,
inputQuery:null,searchLayers:[],analysisFields:[],numberOfResults:0,enableInputSelection:!0,selectionLayer:null,_isAttrFlag:!1,constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);this._expression=null},destroy:function(){this.inherited(arguments);e.forEach(this._pbConnects,u.disconnect);delete this._pbConnects;delete this._mapClickHandle},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,w.getLocalization("esri","jsapi").findSimilarLocations);
d.mixin(this.i18n,w.getLocalization("esri","jsapi").expressionGrid)},postCreate:function(){this.inherited(arguments);E.add(this._form.domNode,"esriSimpleForm");k.set(this._attrSelect.selectNode,"width","80%");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a});this.selectionLayer&&(this.selectionLayer.clearSelection(),this.map.removeLayer(this.selectionLayer),
this.selectionLayer=null);this._mapClickHandle&&delete this._mapClickHandle},clear:function(){this.selectionLayer&&(this.selectionLayer.clearSelection(),this.map.removeLayer(this.selectionLayer),this.selectionLayer=null);this._mapClickHandle&&delete this._mapClickHandle},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c;a.inputLayer=f.toJson(p.constructAnalysisInputLyrObj(this.inputLayer));this.get("InputQuery")&&(a.inputQuery=this.inputQuery);
a.searchLayer=f.toJson(p.constructAnalysisInputLyrObj(this.get("searchLayer")));a.analysisFields=this.get("analysisFields");a.numberOfResults=this.get("numberOfResults");this.returnFeatureCollection||(a.OutputName=f.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&(c.extent=
this.map.extent._normalize(!0)),a.context=f.toJson(c));console.log(a);b.jobParams=a;b.itemParams={description:void 0,tags:h.substitute(this.i18n.itemTags,{analysisLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(b)}},_handleShowCreditsClick:function(a){a.preventDefault();a={};var b;this._form.validate()&&(a.inputLayer=f.toJson(p.constructAnalysisInputLyrObj(this.inputLayer)),
this.get("InputQuery")&&(a.inputQuery=this.inputQuery),a.searchLayer=f.toJson(p.constructAnalysisInputLyrObj(this.get("searchLayer"))),a.analysisFields=this.get("analysisFields"),a.numberOfResults=this.get("numberOfResults"),this.returnFeatureCollection||(a.OutputName=f.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},
this.showChooseExtent&&(b.extent=this.map.extent._normalize(!0)),a.context=f.toJson(b)),console.log(a),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_save:function(){},_buildUI:function(){this._loadConnections();this.signInPromise.then(d.hitch(this,p.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));n.set(this._toolDescription,"innerHTML",h.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name}));
this.outputLayerName?this._outputLayerInput.set("value",this.outputLayerName):this._outputLayerInput.set("value",h.substitute(this.i18n.outputLayerName,{analysisLayerName:this.inputLayer.name}));k.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",a);this._webMapFolderSelect.set("value",this.portalUser.username)}));k.set(this._chooseExtentDiv,
"display",!0===this.showChooseExtent?"block":"none");k.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.searchLayers&&e.forEach(this.searchLayers,function(a,b){this._candidateSelect.addOption({value:b+1,label:a.name})},this);this._selectBtn.set("disabled",!this.enableInputSelection);this._queryBtn.set("disabled",!this.enableInputSelection);this.set("analysisFields");this._expressionForm.set("showFirstRow",!1);this._expressionForm.set("firstOperands",[this.inputLayer]);
this._expressionForm.set("inputOperands",[this.inputLayer]);this._expressionForm.set("selectedFirstOperand",this.inputLayer);this._expressionForm.init();this._expressionForm.on("add-expression",d.hitch(this,this._handleExpressionFormAdd));this._expressionForm.on("cancel-expression",d.hitch(this,this._handleExpressionFormCancel))},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(a){a&&
(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setSearchLayersAttr:function(a){this.searchLayers=a},_getSearchLayersAttr:function(){return this.searchLayers},_setSearchLayerAttr:function(a){this.searchLayers=a},_getSearchLayerAttr:function(){this._candidateSelect&&
"-1"!==this._candidateSelect.get("value")?this.searchLayer=this.searchLayers[this._candidateSelect.get("value")-1]:"-1"===this._candidateSelect.get("value")&&(this.searchLayer=null);return this.searchLayer},_setInputLayerAttr:function(a){this.inputLayer=a;this.set("selectionLayer")},_getInputLayerAttr:function(){return this.inputLayer},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setEnableInputSelectionAttr:function(a){this.enableInputSelection=
a},_getEnableInputSelectionAttr:function(){return this.enableInputSelection},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},
_setAnalysisFieldsAttr:function(){var a,b;if(this.get("inputLayer")&&this.get("searchLayer")&&!(0===this.inputLayer.fields.length||0===this.searchLayer.fields.length))b=this.inputLayer.fields,a=e.map(this.searchLayer.fields,function(a){return a.name}),b=e.filter(b,function(b){if(-1!==e.indexOf(a,b.name)&&-1!==e.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],b.type)&&(b.name!==this.inputLayer.objectIdField||b.name!==this.searchLayer.objectIdField))return!0},
this),b=e.map(b,function(a){return{value:a.name,label:y.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}}),this._attrSelect&&(this._attrSelect.removeOption(this._attrSelect.get("options")),this._attrSelect.addOption(b)),this.analysisFields=b},_getAnalysisFieldsAttr:function(){this._attrSelect&&(this.analysisFields=this._attrSelect.get("value"));return this.analysisFields},_setInputQueryAttr:function(a){this.inputQuery=a},_getInputQueryAttr:function(){return this.inputQuery},_setNumberOfResultsAttr:function(a){this.numberOfResults=
a},_getNumberOfResultsAttr:function(){return this.numberOfResults},_getInputQueryObjAttr:function(){var a=null;this.get("InputQuery")&&(a={operator:"",layer:0},a.where=this.inputQuery);return this.inputQueryObj=a},_setSelectionLayerAttr:function(){this.selectionLayer=new l(this.inputLayer.url?this.inputLayer.url:this.inputLayer.toJson(),{outFields:["*"],mode:this.inputLayer.url?l.MODE_SELECTION:l.MODE_SNAPSHOT});this.selectionLayer.setRenderer(null);this.selectionLayer.on("selection-complete",d.hitch(this,
this._handleInputLayerSelectionComplete));if(this.selectionLayer.loaded)this._onSelectionLayerLoad(this.inputLayer,this.selectionLayer);else this.selectionLayer.on("load",d.hitch(this,this._onSelectionLayerLoad,this.inputLayer,this.selectionLayer))},_onSelectionLayerLoad:function(a,b){var c;a.renderer&&(b.setRenderer(N.fromJson(a.renderer.toJson())),y.isDefined(a.renderer.isMaxInclusive)&&(b.renderer.isMaxInclusive=a.renderer.isMaxInclusive));b.setScaleRange(a.minScale,a.maxScale);this._connect(a,
"onScaleRangeChange",d.hitch(this,function(a,b){a.setScaleRange(b.minScale,b.maxScale)},b,a));this.map.addLayer(b);"esriGeometryPoint"===b.geometryType||"esriGeometryMultPoint"===b.geometryType?(c=new A,c.setStyle(A.STYLE_TARGET),c._setDim(16,16,7),c.setOutline(new t(q.STYLE_SOLID,new m([0,255,255]),2,t.CAP_ROUND,t.JOIN_ROUND)),c.setColor(new m([0,0,0,0])),b.setSelectionSymbol(c)):"esriGeometryPolyline"===b.geometryType?b.setSelectionSymbol(new q(q.STYLE_SOLID,new m([0,255,255]),2)):"esriGeometryPolygon"===
b.geometryType&&b.setSelectionSymbol(new B(B.STYLE_NULL,new q(q.STYLE_SOLID,new m([0,255,255]),2),new m([0,0,0,0])))},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===a.length||0===h.trim(a).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<a.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),!1):!0},_setPrimaryActionButttonClassAttr:function(a){this.primaryActionButttonClass=
a},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_connect:function(a,b,c){this._pbConnects.push(u.connect(a,b,c))},validate:function(){this.get("searchLayer")&&this.get("inputLayer").id===this.get("searchLayer").id&&!this.get("inputQuery")?(this._showMessages(this.i18n.reqSelectionMsg),this.set("disableRunAnalysis",!0)):this.get("searchLayer")&&0===this._attrSelect.getOptions().length?(this._showMessages(this.i18n.noFieldMatchMsg),this.set("disableRunAnalysis",
!0)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))},_handleCandidateChange:function(a){this.set("analysisFields");this.validate()},_handleQueryButtonClick:function(){this._expDialog.set("title",this.i18n.query);this.emit("selectool-dectivate",{});this._isAttrFlag=!0;this._expression?(this._expressionForm.set("action","edit"),this._expressionForm.set("expression",this._expression.expression)):this._expressionForm.set("action","add");this._expDialog.show()},_handleExpressionFormAdd:function(a){console.log("Success",
a);this.selectionLayer&&this.selectionLayer.clearSelection();if("add"===a.action||"edit"===a.action){n.set(this._filterLabel,"innerHTML",h.trim(a.expression._attributeText));this._expression=a;var b;b=new s;b.returnGeometry=!0;b.where=a.expression.where;this.selectionLayer.selectFeatures(b,l.SELECTION_ADD)}this._expDialog.hide();this.set("inputQuery",a.expression.where);this.validate()},_handleExpressionFormCancel:function(){this._expDialog.hide()},_handleTopRankRadioChange:function(a){this._ranksInput.set("disabled",
!a);a&&this.set("numberOfResults",this._ranksInput.get("value"))},_handleAllRankRadioChange:function(a){a&&this.set("numberOfResults",0)},_handleTopRankInputChange:function(a){this.set("numberOfResults",a)},_handleSelectionButtonClick:function(a){this.emit("selectool-activate",{});this._isAttrFlag=!1;this._mapClickHandle||(this._mapClickHandle=this.map.on("click",d.hitch(this,this._handleMapClick)))},_handleMapClick:function(a){var b,c,g;c=6;(b=this.inputLayer.renderer)&&"esri.renderer.SimpleRenderer"===
b.declaredClass?(g=b.symbol,g.xoffset&&(c=Math.max(c,Math.abs(g.xoffset))),g.yoffset&&(c=Math.max(c,Math.abs(g.yoffset)))):b&&("esri.renderer.UniqueValueRenderer"===b.declaredClass||"esri.renderer.ClassBreaksRenderer"===b.declaredClass)&&e.forEach(b.infos,function(a){g=a.symbol;g.xoffset&&(c=Math.max(c,Math.abs(g.xoffset)));g.yoffset&&(c=Math.max(c,Math.abs(g.yoffset)))});b=a.screenPoint;a=this.map.toMap(new z(b.x-c,b.y+c));b=this.map.toMap(new z(b.x+c,b.y-c));a=new M(a.x,a.y,b.x,b.y,this.map.spatialReference);
b=new s;b.returnGeometry=!0;b.geometry=a;b.where=this.inputLayer.getDefinitionExpression();this.inputLayer.queryFeatures(b).then(d.hitch(this,function(a){if(a){var b,c,d;d=[];b=[];0<this.selectionLayer.getSelectedFeatures().length&&(c=e.map(this.selectionLayer.getSelectedFeatures(),function(a){return a.attributes[this.selectionLayer.objectIdField]},this));e.forEach(a.features,function(a){c?c&&-1===e.indexOf(c,a.attributes[this.selectionLayer.objectIdField])?b.push(a.attributes[this.selectionLayer.objectIdField]):
d.push(a.attributes[this.selectionLayer.objectIdField]):b.push(a.attributes[this.selectionLayer.objectIdField])},this);0<b.length&&(a=new s,a.returnGeometry=!0,a.objectIds=b,this.selectionLayer.selectFeatures(a,l.SELECTION_ADD));0<d.length&&(a=new s,a.returnGeometry=!0,a.objectIds=d,this.selectionLayer.selectFeatures(a,l.SELECTION_SUBTRACT))}}))},_showMessages:function(a){n.set(this._bodyNode,"innerHTML",a);v.fadeIn({node:this._errorMessagePane,easing:x.quadIn,onEnd:d.hitch(this,function(){k.set(this._errorMessagePane,
{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();v.fadeOut({node:this._errorMessagePane,easing:x.quadOut,onEnd:d.hitch(this,function(){k.set(this._errorMessagePane,{display:"none"})})}).play()},_handleInputLayerSelectionComplete:function(a){a=this.selectionLayer.getSelectedFeatures();var b,c;!this._isAttrFlag&&0<a.length&&(c="",b=e.map(a,function(a){c+=this.selectionLayer.objectIdField+" \x3d "+a.attributes[this.selectionLayer.objectIdField]+" OR ";return a.attributes[this.selectionLayer.objectIdField]},
this),console.log(c),c=c.substring(0,c.lastIndexOf(" OR ")),console.log(c),console.log(b),n.set(this._filterLabel,"innerHTML",h.substitute(this.i18n.selectedFeaturesLabel,{total:a.length})),this.set("inputQuery",c),this._expression=null,this.validate());!this._isAttrFlag&&0===a.length&&(n.set(this._filterLabel,"innerHTML",""),this.set("inputQuery",null),this.validate())}});D("extend-esri")&&d.setObject("dijit.analysis.FindSimilarLocations",r,K);return r});