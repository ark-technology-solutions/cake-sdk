function n(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t=/*#__PURE__*/n(require("pg"));const e="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function r(n,t,e){if(!n.s){if(e instanceof o){if(!e.s)return void(e.o=r.bind(null,n,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(r.bind(null,n,t),r.bind(null,n,2));n.s=t,n.v=e;var i=n.o;i&&i(n)}}var o=/*#__PURE__*/function(){function n(){}return n.prototype.then=function(t,e){var o=new n,i=this.s;if(i){var u=1&i?t:e;if(u){try{r(o,1,u(this.v))}catch(n){r(o,2,n)}return o}return this}return this.o=function(n){try{var i=n.v;1&n.s?r(o,1,t?t(i):i):e?r(o,1,e(i)):r(o,2,i)}catch(n){r(o,2,n)}},o},n}();function i(n){return n instanceof o&&1&n.s}var u=new(0,t.default.Client);exports.connect=function(){try{return Promise.resolve(u.connect()).then(function(){return u})}catch(n){return Promise.reject(n)}},exports.createTables=function(){try{var n=[{name:"local_logs",columns:[{name:"id",type:"bigserial"},{name:"message",type:"text"},{name:"created_at",type:"timestamp"},{name:"author",type:"uuid"},{name:"type",type:"tinyint"}]}],t=function(n,t,u){if("function"==typeof n[e]){var c,f,a,s=n[e]();if(function n(e){try{for(;!(c=s.next()).done;)if((e=t(c.value))&&e.then){if(!i(e))return void e.then(n,a||(a=r.bind(null,f=new o,2)));e=e.v}f?r(f,1,e):f=e}catch(n){r(f||(f=new o),2,n)}}(),s.return){var l=function(n){try{c.done||s.return()}catch(n){}return n};if(f&&f.then)return f.then(l,function(n){throw l(n)});l()}return f}if(!("length"in n))throw new TypeError("Object is not iterable");for(var h=[],v=0;v<n.length;v++)h.push(n[v]);return function(n,t,e){var u,c,f=-1;return function e(a){try{for(;++f<n.length;)if((a=t(f))&&a.then){if(!i(a))return void a.then(e,c||(c=r.bind(null,u=new o,2)));a=a.v}u?r(u,1,a):u=a}catch(n){r(u||(u=new o),2,n)}}(),u}(h,function(n){return t(h[n])})}(n,function(n){var t=n.columns.map(function(n){return n.name+" "+n.type}).join(", ");return Promise.resolve(u.query("CREATE TABLE IF NOT EXISTS "+n.name+" ("+t+")")).then(function(){})});return Promise.resolve(t&&t.then?t.then(function(){return n}):n)}catch(n){return Promise.reject(n)}},exports.getVersion=function(){return"1.0.0"},exports.log=function(){return Promise.resolve()};
