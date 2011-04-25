/***
 *
 * Paper.js
 *
 * A JavaScript Vector Graphics Library, based on Scriptographer.org and
 * designed to be largely API compatible.
 * http://paperjs.org/
 * http://scriptographer.org/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * Copyright (c) 2011, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * All rights reserved.
 *
 ***
 *
 * Bootstrap.js JavaScript Framework.
 * http://bootstrapjs.org/
 *
 * Distributed under the MIT license.
 *
 * Copyright (c) 2006 - 2011 Juerg Lehni
 * http://lehni.org/
 *
 ***
 *
 * Parse-JS, A JavaScript tokenizer / parser / generator.
 *
 * Distributed under the BSD license.
 *
 * Copyright (c) 2010, Mihai Bazon <mihai.bazon@gmail.com>
 * http://mihai.bazon.net/blog/
 *
 ***/

var paper = new function() {

this.document = null;
this.documents = [];

this.install = function(scope) {
	for (var i in this) {
		scope[i] = this[i];
	}
};

// Inline Base core inside the paper scope first:
//#include "../lib/bootstrap.js"

Base.inject({
	statics: true,

	read: function(args, index, length) {
		var index = index || 0, length = length || args.length - index;
		var arg = args[index];
		// If the class defines _readNull, return null when nothing was provided
		if (arg instanceof this
				|| this.prototype._readNull && arg == null && length <= 1)
			return arg;
		var obj = new this(this.dont);
		obj = obj.initialize.apply(obj, index > 0 || length < args.length
			? Array.prototype.slice.call(args, index, index + length)
			: args) || obj;
		return obj;
	},

	capitalize: function(str) {
		return str.replace(/\b[a-z]/g, function(match) {
			return match.toUpperCase();
		});
	}
});

//#include "basic/Point.js"
//#include "basic/Size.js"
//#include "basic/Rectangle.js"
//#include "basic/Matrix.js"
//#include "basic/Line.js"

//#include "document/DocumentView.js"
//#include "document/Document.js"
//#include "document/Symbol.js"

//#include "item/Item.js"
//#include "item/Group.js"
//#include "item/Layer.js"
//#include "item/Raster.js"
//#include "item/PlacedSymbol.js"
//#include "item/PathStyle.js"

//#include "path/Segment.js"
//#include "path/SegmentPoint.js"
//#include "path/SelectionState.js"
//#include "path/Curve.js"
//#include "path/CurveLocation.js"
//#include "path/PathItem.js"
//#include "path/Path.js"
//#include "path/CompoundPath.js"
//#include "path/Path.Constructors.js"

//#include "color/Color.js"
//#include "color/RGBColor.js"
//#include "color/GrayColor.js"
//#include "color/GradientColor.js"
//#include "color/Gradient.js"
//#include "color/GradientStop.js"

//#include "tool/ToolEvent.js"
//#include "tool/ToolHandler.js"
//#include "tool/Tool.js"

//#include "util/BlendMode.js"
//#include "util/CanvasProvider.js"
//#include "util/Element.js"
//#include "util/Event.js"
//#include "util/Numerical.js"
//#include "util/PaperScript.js"

//#include "ui/Key.js"
};
