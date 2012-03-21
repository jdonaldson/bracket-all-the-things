import dhx.Dom;
import thx.svg.Diagonal;
import dhx.Access;
import thx.geom.layout.Tree;

using Arrays;

class BracketDemo
{


	public static function main(): Void {
		draw();
		var update = function(x,i){
			Dom.select("#bracket_output").html().clear();
			draw();
		}
		Dom.select("#submit_button")
			.onNode("click", update);
		Dom.select("#split_view")
			.onNode("click", update);
		
	}
	public static function draw(){
		
				var show_split = cast Dom.select("#split_view").property("checked").get();

				var values:Array<String> = Dom.select("#input").property('value').get().split("\n");

				var split = function(arr:Array<String>):Array<Array<String>>{

					var head1 = new Array<String>();
					var head2 = new Array<String>();
					var tail1 = new Array<String>();
					var tail2 = new Array<String>();
					var j = arr.length-1;
					for (i in 0...arr.length){
						if (j <= i ) break;
						
						if (i % 2 == 0)  {
							head1.push(arr[i]);
							tail1.unshift(arr[j]);
						}
						else {
							head2.push(arr[i]);
							tail2.unshift(arr[j]);
						}
						j-=1;
					}
					var first = head1.concat(tail1);
					var second = head2.concat(tail2);
					if (first.length == 0) return null;
					if (second.length == 0) return [[first[0]], [first[1]]];
					else return [first,second];
				}

				// set some plot dimensions.
				var w = (Math.log(values.length)/Math.log(2)) * 200;
				var h = values.length/2*40;

				// create a tree generator function
				var tree_generator = new Tree()
					.children(function(vs:Array<String>,i:Int){
						if (vs == null) return null;
						else if (vs.length == 1) return null;
						else return split(vs);
					})
					.separation(function(x,i) return 1.0)
					.size([h,w]);

				// generate nodes and links
				var nodes = tree_generator.tree(values);
				nodes.each(function(n,i){
					var nx = n.x;
					n.x = w - n.y;
					n.y = nx;
					if (!nodes[1].data.exists(n.data[0]) && show_split){
						n.x = w - n.x + w;
						n.y = h - n.y;
					}
				});

				var links = Tree.treeLinks(nodes);

/*				return;*/
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
				var set_height = 0.0;
				if (show_split){
					set_height = h/2+40;
				} else{
					set_height = h;
				}
				var svg_links = Dom.select("#bracket_output").append("svg:svg")
/*					.style("position").string('absolute')*/
					.attr("width").float(w*2)
					.attr("height").float(set_height)
					.selectAll("path").data(links)
					.enter().append("svg:path")
					.attr('d').stringf(function(x,i){

						var x0 = x.source.x,
						x1 = x.target.x,
						y0 = x.source.y,
						y1 = x.target.y;
						x1 = x.target.x;
						if (x.target.x > w){
							x0 = x.source.x + 140;
						}else{
							x1 = x.target.x + 140;
						}
		 				

						
						return "M"+x0+','+y0+' L'+x1+','+ y1;
					})
					.style("fill").string("none")
					.style("stroke").string("darkgrey")
					.style("stroke-width").string("4px");
	}
	


	
}