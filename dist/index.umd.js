!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("pg")):"function"==typeof define&&define.amd?define(["exports","pg"],e):e((n||self).cakeSdk={},n.pg)}(this,function(n,e){function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var r=/*#__PURE__*/t(e);const o="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function i(n,e,t){if(!n.s){if(t instanceof u){if(!t.s)return void(t.o=i.bind(null,n,e));1&e&&(e=t.s),t=t.v}if(t&&t.then)return void t.then(i.bind(null,n,e),i.bind(null,n,2));n.s=e,n.v=t;var r=n.o;r&&r(n)}}var u=/*#__PURE__*/function(){function n(){}return n.prototype.then=function(e,t){var r=new n,o=this.s;if(o){var u=1&o?e:t;if(u){try{i(r,1,u(this.v))}catch(n){i(r,2,n)}return r}return this}return this.o=function(n){try{var o=n.v;1&n.s?i(r,1,e?e(o):o):t?i(r,1,t(o)):i(r,2,o)}catch(n){i(r,2,n)}},r},n}();function c(n){return n instanceof u&&1&n.s}console.log("process.env.DATABASE_URL",process.env.DATABASE_URL);var f=new(0,r.default.Client)({connectionString:process.env.DATABASE_URL});n.connect=function(){try{return Promise.resolve(f.connect()).then(function(){return f})}catch(n){return Promise.reject(n)}},n.createTables=function(){try{var n=[{name:"local_logs",columns:[{name:"id",type:"bigserial"},{name:"message",type:"text"},{name:"created_at",type:"timestamp"},{name:"author",type:"uuid"},{name:"type",type:"tinyint"}]}],e=function(n,e,t){if("function"==typeof n[o]){var r,f,a,s=n[o]();if(function n(t){try{for(;!(r=s.next()).done;)if((t=e(r.value))&&t.then){if(!c(t))return void t.then(n,a||(a=i.bind(null,f=new u,2)));t=t.v}f?i(f,1,t):f=t}catch(n){i(f||(f=new u),2,n)}}(),s.return){var l=function(n){try{r.done||s.return()}catch(n){}return n};if(f&&f.then)return f.then(l,function(n){throw l(n)});l()}return f}if(!("length"in n))throw new TypeError("Object is not iterable");for(var h=[],v=0;v<n.length;v++)h.push(n[v]);return function(n,e,t){var r,o,f=-1;return function t(a){try{for(;++f<n.length;)if((a=e(f))&&a.then){if(!c(a))return void a.then(t,o||(o=i.bind(null,r=new u,2)));a=a.v}r?i(r,1,a):r=a}catch(n){i(r||(r=new u),2,n)}}(),r}(h,function(n){return e(h[n])})}(n,function(n){var e=n.columns.map(function(n){return n.name+" "+n.type}).join(", ");return Promise.resolve(f.query("CREATE TABLE IF NOT EXISTS "+n.name+" ("+e+")")).then(function(){})});return Promise.resolve(e&&e.then?e.then(function(){return n}):n)}catch(n){return Promise.reject(n)}},n.getVersion=function(){return"1.0.0"},n.log=function(){return Promise.resolve()}});
