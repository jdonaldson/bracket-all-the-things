import dhx.Dom;
import thx.svg.Diagonal;
import dhx.Access;
import thx.geom.layout.Tree;


class BracketDemo
{


	public static function main(): Void {
		var tiobe = haxe.Resource.getString('top_albums').split("\n");
		
/*		Dom.select("#bracket_output").selectAll("div").data(tiobe)
			.enter()
				.append("div").text().stringf(function(x,i) return x);*/
		
		tiobe = tiobe.slice(0,32); // go with an even power of 2 for the demo.
		var split = function(arr:Array<String>):Array<Array<String>>{
			var home_remainder = new Array<String>();
			var away_remainder = new Array<String>();
			for (i in 0...arr.length){
				if (i % 2 == 0)  home_remainder.push(arr[i]);
				else away_remainder.push(arr[i]);
			}
			return [home_remainder,away_remainder];
		}

		// set some plot dimensions.
		var w = 960.0;
		var h = 740;
		
		// create a tree generator function
		var tree_generator = new Tree()
			.children(function(vs:Array<String>,i:Int){
				if (vs == null) return null;
				else if (vs.length == 1) return null;
				else return split(vs);
			})
			.size([h,w]);
		
		// generate nodes and links
		var nodes = tree_generator.tree(tiobe);
		for (n in nodes){
			var nx = n.x;
			n.x = w - n.y;
			n.y = nx;
			// extra
			if (n.y > h/2){
				n.y -= h/2;
				n.x = (1000-n.x)+w;		
			}
		}
		var links = Tree.treeLinks(nodes);
		
		// generate select/option values, and position them
		var divs = Dom.select("#bracket_output").selectAll("input").data(nodes)
			.enter().append("div")
				.style("top").stringf(function(x,i) return x.y + 'px')
				.style("left").stringf(function(x,i) return x.x + 'px')
				.style("position").string('absolute')
				.append("select")
				.style('width').string("150px")
				.style("float").string("right")
				.onNode('change',function(x,i){
					var value = Dom.selectNode(x).property("value").get();
					var x_pos = Dom.selectNode(x).style("left").get();
					var sel_data:TreeNode<Array<String>> = Access.getData(x);
					var sel_count = sel_data.data.length;
					Dom.selectAll("select option[value='"+value+"']").eachNode(function(y,i){
						var cur_sel_data:TreeNode<Array<String>> = Access.getData(y.parentNode);
						var cur_sel_count = cur_sel_data.data.length;
						if (cur_sel_count > sel_count) return;
						var value = Dom.selectNode(y).attr("value").get();
						Dom.selectNode(y.parentNode).property("value").string(value);
					});
				});
		
		// EXTRA: select all child values 		
		var option_f = function(x,i) return x + '';
		var options = divs.selectAll('option').dataf(function(x,i) {
				if (x.data.length > 1) return [''].concat(x.data);
				else return x.data;
			})
			.enter().append("option")
				.attr("value").stringf(option_f)
				.text().stringf(option_f);
				
		// EXTRA: draw line edges
		var svg_links = Dom.select("#bracket_output").append("svg:svg").attr("width").float(3000)
			.selectAll("path").data(links)
			.enter().append("svg:path")
			.attr('d').stringf(function(x,i){

				var x0 = x.source.x,
				x1 = x.target.x,
				y0 = x.source.y,
				y1 = x.target.y;
				
				// hack to get the links to line up.
				if (i < links.length/2 && i != 1) x1 = x.target.x + 140;
				else {
					x1 = x.target.x;
					x0 = x.source.x + 140;
				}
					
				return "M"+x0+','+y0+' L'+x1+','+ y1;
			})
			.style("fill").string("none")
			.style("stroke").string("darkgrey")
			.style("stroke-width").string("4px");
	}
	


	
}