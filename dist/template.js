this["$"] = this["$"] || {};
this["$"]["arraysweeper"] = this["$"]["arraysweeper"] || {};
this["$"]["arraysweeper"]["prototype"] = this["$"]["arraysweeper"]["prototype"] || {};
this["$"]["arraysweeper"]["prototype"]["templates"] = this["$"]["arraysweeper"]["prototype"]["templates"] || {};

Handlebars.registerPartial("help", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row as-help-panel as-help-panel-hidden\">\n	<h3 class=\"as-help-title\">Help and Instructions</h3>\n	<ul class=\"as-help-list\">\n		<li><p>Click on a space to reveal it</p></li>\n		<li><p>Right Click or Hold Down on a space for more then .5 seconds to flag or unflag a space</p></li>\n		<li><p>The number on a space indicates the number of mines which it touches</p></li>\n		<li><p>If any space you reveal touchs a space which has a count of 0 it will also be revealed</p></li>\n		<li><p>Click Reset / &#x27f3 at any time to reset the game</p></li>\n		<li><p>Click settings / &#x2699 to toggle the board settings panel</p></li>\n		<li><p>Click reset after adjust settings to make them take effect</p></li>\n	</ul>\n</div>";
},"useData":true}));

Handlebars.registerPartial("settings", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row as-settings-panel as-settings-panel-hidden\">\n		<div class=\"col-xs-4\">\n			<label for=\"as-mine-count\">Mine Count: </label>\n			<input type=\"number\" id=\"as-mine-count\" class=\"as-count-input\">\n		</div>\n		<div class=\"col-xs-4\">\n			<label for=\"as-board-width\">Board Width: </label>\n			<input type=\"number\" id=\"as-mine-width\" class=\"as-width-input\">\n		</div>\n		<div class=\"col-xs-4\">\n			<label for=\"as-board-height\">Board Height: </label>\n			<input type=\"number\" id=\"as-mine-height\" class=\"as-height-input\">\n		</div>\n</div>";
},"useData":true}));

Handlebars.registerPartial("toolbar", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"as-toolbar row\">\n	<div class=\"col-xs-8 as-remaining\">\n		Remaining: <span class=\"remaining-val\"></span>\n	</div>\n	<div class=\"col-xs as-reset\" title=\"reset\">\n		&#x27f3;\n	</div>\n	<div class=\"col-xs as-settings\" title=\"settings\">\n		&#x2699;\n	</div>\n	<div class=\"col-xs as-help\" title=\"help\">\n		?\n	</div>\n</div>";
},"useData":true}));

this["$"]["arraysweeper"]["prototype"]["templates"]["board"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "				<div toush-action=\"auto\" tabindex=\"-1\" data-as-location=\""
    + alias1(this.lambda((this.data(data, 1) && this.data(data, 1).index), depth0))
    + ","
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"as-game-space "
    + alias1(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"state","hash":{},"data":data}) : helper)))
    + " col-xs\">\n					<div class=\"as-content\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.bomb : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "							&#128163\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "							"
    + this.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["$"]["arraysweeper"]["prototype"]["templates"]["game"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"as-mine\">\n	<div class=\"as-toolbar-wrap\">\n"
    + ((stack1 = this.invokePartial(partials.toolbar,depth0,{"name":"toolbar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.settings,depth0,{"name":"settings","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.help,depth0,{"name":"help","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"board-wrap\">\n		<div class=\"as-gameboard\">\n\n		</div>\n		<div class=\"as-screen\">\n\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});