import n from"pg";const{Client:t}=n;let e=null;async function a(n){return e=new t({connectionString:n}),await e.connect(),e}function o(){return"1.0.0"}async function c(){const n=[{name:"local_logs",columns:[{name:"id",type:"bigserial"},{name:"message",type:"text"},{name:"created_at",type:"timestamp"},{name:"author",type:"uuid"},{name:"type",type:"tinyint"}]}];for(const t of n){const n=t.columns.map(n=>`${n.name} ${n.type}`).join(", ");await e.query(`CREATE TABLE IF NOT EXISTS ${t.name} (${n})`)}return n}async function i(){}export{a as connect,c as createTables,o as getVersion,i as log};
