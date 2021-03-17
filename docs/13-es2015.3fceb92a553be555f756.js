(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Zynk:function(t,e,c){"use strict";c.r(e),c.d(e,"ShipsModule",function(){return L});var i=c("3Pt+"),n=c("PCNd"),b=c("tyNb"),o=c("Z8VL"),a=c("btHo"),r=c("9UZh"),l=c("6WvD"),s=c("AwWS"),d=c("4rDX"),u=c("82i/"),p=c("9QbX"),m=c("fXoL"),T=c("jhN1"),U=c("ZzPI"),g=c("6t9p");let h=(()=>{class t extends o.a{constructor(t,e,c,i,n){super(t,c,i),this.raceService=e,this.titleService=n}ngOnInit(){this.titleService.setTitle(`${p.a} - Ships`),this.sizes=u.a.values(l.a),this.shipTypes=u.a.values(s.a),this.purposes=u.a.values(d.a),this.races=this.raceService.getEntities(),super.ngOnInit()}calculateWeapons(t){return t.weapons?t.weapons.length:0}calculateTurrets(t){return t.turrets?t.turrets.length:0}calculateShields(t){return t.shields?t.shields.filter(t=>!t.group).length:0}}return t.\u0275fac=function(e){return new(e||t)(m.Pb(a.a),m.Pb(r.a),m.Pb(b.c),m.Pb(b.a),m.Pb(T.c))},t.\u0275cmp=m.Jb({type:t,selectors:[["ng-component"]],features:[m.zb],decls:26,vars:23,consts:function(){let t;return t=$localize`:@@stationModules␟507b83bf0d3a7ac263474775eaf61fd1d96186eb␟1588853216120456556: Ships `,[[1,"row","content-row"],[1,"col-md-12"],[1,"card","shadow"],[1,"card-header","shadow-sm"],t,[1,"card-body"],["keyExpr","id",3,"dataSource","allowColumnReordering","allowColumnResizing","showBorders","hoverStateEnabled","onCellClick"],[3,"showPageSizeSelector","showNavigationButtons"],["mode","multiple"],[3,"applyFilter","visible"],[3,"visible"],["dataField","name","caption","Name"],["dataField","race.id","caption","Race"],["valueExpr","id","displayExpr","name",3,"dataSource"],["dataField","type","caption","Type"],[3,"dataSource"],["dataField","size","caption","Size"],["dataField","purpose","caption","Purpose"],["name","weapons","caption","Weapons","dataType","number",3,"allowSorting","allowFiltering","calculateCellValue"],["name","turrets","caption","Turrets","dataType","number",3,"allowSorting","allowFiltering","calculateCellValue"],["name","shields","caption","Shields","dataType","number",3,"allowSorting","allowFiltering","calculateCellValue"],["dataField","people","caption","People","dataType","number"],["column","name","summaryType","count"]]},template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"div",3),m.Yb(4,4),m.Tb(),m.Ub(5,"div",5),m.Ub(6,"dx-data-grid",6),m.hc("onCellClick",function(t){return e.onRowSelect(t)}),m.Qb(7,"dxo-pager",7),m.Qb(8,"dxo-sorting",8),m.Qb(9,"dxo-filter-row",9),m.Qb(10,"dxo-filter-panel",10),m.Qb(11,"dxi-column",11),m.Ub(12,"dxi-column",12),m.Qb(13,"dxo-lookup",13),m.Tb(),m.Ub(14,"dxi-column",14),m.Qb(15,"dxo-lookup",15),m.Tb(),m.Ub(16,"dxi-column",16),m.Qb(17,"dxo-lookup",15),m.Tb(),m.Ub(18,"dxi-column",17),m.Qb(19,"dxo-lookup",15),m.Tb(),m.Qb(20,"dxi-column",18),m.Qb(21,"dxi-column",19),m.Qb(22,"dxi-column",20),m.Qb(23,"dxi-column",21),m.Ub(24,"dxo-summary"),m.Qb(25,"dxi-total-item",22),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Cb(6),m.pc("dataSource",e.entities)("allowColumnReordering",!0)("allowColumnResizing",!0)("showBorders",!0)("hoverStateEnabled",!0),m.Cb(1),m.pc("showPageSizeSelector",!0)("showNavigationButtons",!0),m.Cb(2),m.pc("applyFilter",e.currentFilter)("visible",!0),m.Cb(1),m.pc("visible",!0),m.Cb(3),m.pc("dataSource",e.races),m.Cb(2),m.pc("dataSource",e.shipTypes),m.Cb(2),m.pc("dataSource",e.sizes),m.Cb(2),m.pc("dataSource",e.purposes),m.Cb(1),m.pc("allowSorting",!0)("allowFiltering",!0)("calculateCellValue",e.calculateWeapons),m.Cb(1),m.pc("allowSorting",!0)("allowFiltering",!0)("calculateCellValue",e.calculateTurrets),m.Cb(1),m.pc("allowSorting",!0)("allowFiltering",!0)("calculateCellValue",e.calculateShields))},directives:[U.a,g.Y,g.jb,g.E,g.C,g.b,g.S,g.mb,g.l],encapsulation:2}),t})();var f=c("6mEA"),C=c("Lswn"),w=c("ofXK");function y(t,e){if(1&t&&(m.Ub(0,"div",17),m.Ub(1,"label",18),m.Ec(2),m.Tb(),m.Tb()),2&t){const t=m.jc(3);m.Cb(2),m.Fc(t.entity.description)}}const E=function(t){return["/races",t]};function S(t,e){if(1&t&&(m.Ub(0,"span"),m.Ub(1,"a",19),m.Ec(2),m.Tb(),m.Tb()),2&t){const t=m.jc(3);m.Cb(1),m.pc("routerLink",m.sc(2,E,t.entity.race.id)),m.Cb(1),m.Fc(t.entity.race.name)}}function v(t,e){1&t&&(m.Ub(0,"span"),m.Ec(1," - "),m.Tb())}const F=function(t){return["/factions/",t]};function x(t,e){if(1&t&&(m.Ub(0,"li"),m.Ub(1,"a",19),m.Ec(2),m.Tb(),m.Tb()),2&t){const t=e.$implicit;m.Cb(1),m.pc("routerLink",m.sc(2,F,t.id)),m.Cb(1),m.Fc(t.name)}}const k=function(t){return["/wares/",t]};function P(t,e){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ec(2),m.Ub(3,"a",19),m.Ec(4),m.Tb(),m.Tb(),m.Ub(5,"td",29),m.Ec(6),m.kc(7,"number"),m.Tb(),m.Ub(8,"td",29),m.Ec(9),m.kc(10,"number"),m.Tb(),m.Ub(11,"td",29),m.Ec(12),m.kc(13,"number"),m.Tb(),m.Tb()),2&t){const t=e.$implicit;m.Cb(2),m.Gc(" ",t.amount," x "),m.Cb(1),m.pc("routerLink",m.sc(12,k,t.ware.id)),m.Cb(1),m.Fc(t.ware.name),m.Cb(2),m.Fc(m.lc(7,6,t.amount*t.ware.price.min)),m.Cb(3),m.Fc(m.lc(10,8,t.amount*t.ware.price.max)),m.Cb(3),m.Fc(m.lc(13,10,t.amount*t.ware.price.avg))}}function z(t,e){if(1&t&&(m.Ub(0,"div",9),m.Ub(1,"div",27),m.Ub(2,"h6"),m.Ec(3,"Requirements"),m.Tb(),m.Ub(4,"table",28),m.Ub(5,"thead"),m.Ub(6,"tr"),m.Ub(7,"th"),m.Ec(8,"Resource"),m.Tb(),m.Ub(9,"th",29),m.Ec(10,"Min"),m.Tb(),m.Ub(11,"th",29),m.Ec(12,"Max"),m.Tb(),m.Ub(13,"th",29),m.Ec(14,"Avg"),m.Tb(),m.Tb(),m.Tb(),m.Ub(15,"tbody"),m.Cc(16,P,14,14,"tr",15),m.Tb(),m.Ub(17,"tfoot"),m.Ub(18,"tr"),m.Ub(19,"th",29),m.Ec(20,"Total"),m.Tb(),m.Ub(21,"th",29),m.Ec(22),m.kc(23,"number"),m.Tb(),m.Ub(24,"th",29),m.Ec(25),m.kc(26,"number"),m.Tb(),m.Ub(27,"th",29),m.Ec(28),m.kc(29,"number"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t){const t=m.jc().$implicit,e=m.jc(4);m.Cb(16),m.pc("ngForOf",t.wares),m.Cb(6),m.Fc(m.lc(23,4,e.getTotalMin(t))),m.Cb(3),m.Fc(m.lc(26,6,e.getTotalMax(t))),m.Cb(3),m.Fc(m.lc(29,8,e.getTotalAvg(t)))}}function I(t,e){if(1&t&&(m.Ub(0,"div",22),m.Ub(1,"div",23),m.Ub(2,"div",24),m.Ec(3," Production: "),m.Ub(4,"em"),m.Ec(5),m.Tb(),m.Tb(),m.Ub(6,"div",25),m.Cc(7,z,30,10,"div",26),m.Ub(8,"div",9),m.Ub(9,"div",27),m.Ub(10,"h6"),m.Ec(11,"Production"),m.Tb(),m.Ub(12,"table",28),m.Ub(13,"tbody"),m.Ub(14,"tr"),m.Ub(15,"td"),m.Ec(16,"Time"),m.Tb(),m.Ub(17,"td",29),m.Ec(18),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t){const t=e.$implicit,c=m.jc(4);m.Cb(5),m.Fc(t.name),m.Cb(2),m.pc("ngIf",t.wares.length),m.Cb(11),m.Fc(c.getProductionTime(t.time))}}function Q(t,e){if(1&t&&(m.Ub(0,"div",20),m.Cc(1,I,19,3,"div",21),m.Tb()),2&t){const t=m.jc(3);m.Cb(1),m.pc("ngForOf",t.entityProduction)}}function j(t,e){if(1&t&&(m.Ub(0,"div",7),m.Cc(1,y,3,1,"div",8),m.Ub(2,"div",9),m.Ub(3,"div",10),m.Ub(4,"dl",9),m.Ub(5,"dt",11),m.Ec(6,"Race"),m.Tb(),m.Ub(7,"dd",12),m.Cc(8,S,3,4,"span",13),m.Cc(9,v,2,0,"span",13),m.Tb(),m.Ub(10,"dt",11),m.Ec(11,"Type"),m.Tb(),m.Ub(12,"dd",12),m.Ub(13,"span"),m.Ec(14),m.Tb(),m.Tb(),m.Ub(15,"dt",11),m.Ec(16,"Size"),m.Tb(),m.Ub(17,"dd",12),m.Ec(18),m.Tb(),m.Ub(19,"dt",11),m.Ec(20,"Hull"),m.Tb(),m.Ub(21,"dd",12),m.Ec(22),m.kc(23,"number"),m.Tb(),m.Ub(24,"dt",11),m.Ec(25,"Explosion Damage"),m.Tb(),m.Ub(26,"dd",12),m.Ub(27,"span"),m.Ec(28),m.kc(29,"number"),m.Tb(),m.Tb(),m.Ub(30,"dt",11),m.Ec(31,"Owners"),m.Tb(),m.Ub(32,"dd",12),m.Ub(33,"ul",14),m.Cc(34,x,3,4,"li",15),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(35,"div",10),m.Ub(36,"dl",9),m.Ub(37,"dt",11),m.Ec(38,"Missile Storage"),m.Tb(),m.Ub(39,"dd",12),m.Ec(40),m.kc(41,"number"),m.Tb(),m.Ub(42,"dt",11),m.Ec(43,"Drone Storage"),m.Tb(),m.Ub(44,"dd",12),m.Ec(45),m.kc(46,"number"),m.Tb(),m.Ub(47,"dt",11),m.Ec(48,"People"),m.Tb(),m.Ub(49,"dd",12),m.Ec(50),m.kc(51,"number"),m.Tb(),m.Ub(52,"dt",11),m.Ec(53,"Purpose"),m.Tb(),m.Ub(54,"dd",12),m.Ec(55),m.Tb(),m.Tb(),m.Tb(),m.Ub(56,"div",10),m.Ub(57,"dl",9),m.Ub(58,"dt",11),m.Ec(59,"Engines"),m.Tb(),m.Ub(60,"dd",12),m.Ec(61),m.Tb(),m.Ub(62,"dt",11),m.Ec(63,"Docks"),m.Tb(),m.Ub(64,"dd",12),m.Ec(65),m.Tb(),m.Ub(66,"dt",11),m.Ec(67,"Weapons"),m.Tb(),m.Ub(68,"dd",12),m.Ec(69),m.Tb(),m.Ub(70,"dt",11),m.Ec(71,"Turrets"),m.Tb(),m.Ub(72,"dd",12),m.Ec(73),m.Tb(),m.Ub(74,"dt",11),m.Ec(75,"Main Shields"),m.Tb(),m.Ub(76,"dd",12),m.Ec(77),m.Tb(),m.Ub(78,"dt",11),m.Ec(79,"Additional Shields"),m.Tb(),m.Ub(80,"dd",12),m.Ec(81),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Cc(82,Q,2,1,"div",16),m.Tb()),2&t){const t=m.jc(2);m.Cb(1),m.pc("ngIf","No information available"!=t.entity.description),m.Cb(7),m.pc("ngIf",t.entity.race),m.Cb(1),m.pc("ngIf",!t.entity.race),m.Cb(5),m.Fc(t.entity.type||"-"),m.Cb(4),m.Fc(t.entity.size),m.Cb(4),m.Fc(m.lc(23,19,t.entity.hull)),m.Cb(6),m.Fc(m.lc(29,21,t.entity.explosionDamage)||"-"),m.Cb(6),m.pc("ngForOf",t.entity.owners),m.Cb(6),m.Fc(null!=t.entity.storage&&t.entity.storage.missile?m.lc(41,23,null==t.entity.storage?null:t.entity.storage.missile):"-"),m.Cb(5),m.Fc(null!=t.entity.storage&&t.entity.storage.unit?m.lc(46,25,null==t.entity.storage?null:t.entity.storage.unit):"-"),m.Cb(5),m.Fc(m.lc(51,27,t.entity.people)||"-"),m.Cb(5),m.Fc(t.entity.purpose),m.Cb(6),m.Fc(t.getSlotsStr(t.entity.engines)),m.Cb(4),m.Fc(t.getSlotsStr(t.entity.docks)),m.Cb(4),m.Fc(t.getSlotsStr(t.entity.weapons)),m.Cb(4),m.Fc(t.getSlotsStr(t.entity.turrets)),m.Cb(4),m.Fc(t.getSlotsStr(t.mainShields)),m.Cb(4),m.Fc(t.getSlotsStr(t.additionalShields)),m.Cb(1),m.pc("ngIf",t.entityProduction&&t.entityProduction.length)}}function M(t,e){if(1&t&&(m.Ub(0,"div",3),m.Ub(1,"div",4),m.Ub(2,"a",5),m.Ec(3,"Ships"),m.Tb(),m.Ec(4),m.Tb(),m.Cc(5,j,83,29,"div",6),m.Tb()),2&t){const t=m.jc();m.Cb(4),m.Gc(" - ",t.entity.name," "),m.Cb(1),m.pc("ngIf",t.entity)}}let O=(()=>{class t extends f.a{constructor(t,e,c,i){super(e,c),this.wareService=t,this.titleService=i}ngOnInit(){this.titleService.setTitle(`${p.a} - Ships`),super.ngOnInit()}onEntityLoaded(t){this.titleService.setTitle(`${p.a} - ${t.name}`),this.entityProduction=t.production.map(t=>({amount:t.amount,effects:t.effects,method:t.method,name:t.name,time:t.time,wares:t.wares.map(t=>({ware:this.wareService.getEntity(t.ware),amount:t.amount}))}))}getTotalMin(t){let e=0;return t.wares.forEach(t=>{e+=t.amount*t.ware.price.min}),e}getTotalMax(t){let e=0;return t.wares.forEach(t=>{e+=t.amount*t.ware.price.max}),e}getTotalAvg(t){let e=0;return t.wares.forEach(t=>{e+=t.amount*t.ware.price.avg}),e}getProductionTime(t){const e=Math.trunc(t/60),c=t-60*e;let i="";return e>0&&(i+=e+(1===e?" minute":" minutes")),c>0&&(e>0&&(i+=" "),i+=c+(1===c?" second":" seconds")),i}get mainShields(){return this.entity.shields?this.entity.shields.filter(t=>!t.group):[]}get additionalShields(){return this.entity.shields?this.entity.shields.filter(t=>t.group):[]}getSlotsStr(t){const e=this.getSlots(t);return 0==e.length?"-":e.map(t=>`${t.capacity} x ${t.size}`).join(", ")}getSlots(t){if(!t)return[];const e=t.reduce((t,e)=>(t[e.size]=t[e.size]||0,t[e.size]+=e.capacity||1,t),{}),c=[];return Object.keys(e).forEach(t=>{c.push({size:t,capacity:e[t]})}),c}}return t.\u0275fac=function(e){return new(e||t)(m.Pb(C.a),m.Pb(a.a),m.Pb(b.a),m.Pb(T.c))},t.\u0275cmp=m.Jb({type:t,selectors:[["ng-component"]],features:[m.zb],decls:3,vars:1,consts:[[1,"row","content-row"],[1,"col-md-12"],["class","card shadow",4,"ngIf"],[1,"card","shadow"],[1,"card-header","shadow-sm"],["routerLink","/ships"],["class","card-body small",4,"ngIf"],[1,"card-body","small"],["class","form-group row",4,"ngIf"],[1,"row"],[1,"col-md-4","col-sm-12"],[1,"col-5"],[1,"col-7"],[4,"ngIf"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],["class","row mt-2 mb-2",4,"ngIf"],[1,"form-group","row"],[1,"col","col-form-label","col-form-label-sm"],[3,"routerLink"],[1,"row","mt-2","mb-2"],["class","col-md-6 col-sm-6 col-lg-4",4,"ngFor","ngForOf"],[1,"col-md-6","col-sm-6","col-lg-4"],[1,"card","shadow-sm"],[1,"card-header"],[1,"card-body"],["class","row",4,"ngIf"],[1,"col"],[1,"table","table-sm"],[1,"text-right"]],template:function(t,e){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Cc(2,M,6,2,"div",2),m.Tb(),m.Tb()),2&t&&(m.Cb(2),m.pc("ngIf",e.entity))},directives:[w.l,b.e,w.k],pipes:[w.d],encapsulation:2}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Nb({type:t}),t.\u0275inj=m.Mb({imports:[[b.f.forChild([{path:"",component:h},{path:":id",component:O}])],b.f]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Nb({type:t}),t.\u0275inj=m.Mb({imports:[[w.b,i.c,n.a,U.b,$]]}),t})()}}]);