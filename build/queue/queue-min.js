YUI.add("queue",function(C){var B=Array.prototype.slice,A=Array.prototype.splice;C.Queue=function(){var D=this instanceof C.Queue?this:new C.Queue();D.q=[];return D.add.apply(D,B.call(arguments));};C.Queue.prototype={id:0,run:function(){var G=this.q[0],E;if(!G){this.fire("complete");return this;}else{if(this.id){return this;}}E=G.fn||G;if(typeof E==="function"){var D=G.timeout||0,F=this;if(D<0){this.id=D;if(G.until){for(;!G.until();){E();}}else{if(G.iterations){for(;G.iterations-->0;){E();}}else{E();}}this.q.shift();this.id=0;return this.run();}else{if(G.until){if(G.until()){this.q.shift();return this.run();}}else{if(!G.iterations||!--G.iterations){this.q.shift();}}this.id=setTimeout(function(){E();if(F.id){F.id=0;F.run();}},D);}}return this;},add:function(){A.apply(this.q,[this.q.length,0].concat(B.call(arguments)));return this;},pause:function(){clearTimeout(this.id);this.id=0;return this;},stop:function(){this.pause();this.q=[];return this;}};C.augment(C.Queue,C.Event.Target);},"3.0.0");
