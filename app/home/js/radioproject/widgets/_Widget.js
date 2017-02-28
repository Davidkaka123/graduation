define(["../../../../../3.9compact/js/dojo/dojo/_base/declare", "../../../../3.9compact/js/dojo/dijit/_Widget", "../../../../../scripts/js/arcgis_js_api/library/3.9/3.9/js/dojo/dijit/_TemplatedMixin", "dijit/_Container"],
    function (declare, _Widget, _TemplatedMixin, _Container) {
        return declare([_Widget, _TemplatedMixin, _Container], {
		constructor: function(/*Object*/params) {
		},
		
		mapId: "",
		map: null,
		title: "",
		icon: "",
		state: "maximized",
		
		setId: function(/*Number*/id) {
			this.id = id;
		},
		setTitle: function(/*String*/title) {
			this.title = title;
		},
		setIcon: function(/*String*/icon) {
			this.icon = icon;
		},
		setState: function(/*String*/state) {
			this.state = state;
		},
		setMap: function(/*esri.Map*/map) {
			this.map = map;
		}
    		
	});
});
