import{A as M,B as q,C as D,D as j,E as H,F as G,J,L as K,M as Q,N as $,R as C,T as W,a as N,b as O,c as V,d as k,e as A,f as I,g as L,h as u,i as _,j as B,k as m,l as f,m as S,n as p,o as n,p as t,q as s,r as x,s as P,t as T,u as a,v as y,w as d,x as z,y as w,z as F}from"./chunk-KUO4H73L.js";var v=(()=>{let e=class e{constructor(o){this._httpClient=o,this.apiUrl="https://restcountries.com/v3.1"}searchByAlpha(o,r){let l=`${this.apiUrl}/${r}/${o}`;return this._httpClient.get(l).pipe(O(h=>h.length>0?h[0]:null),V(()=>N(null)))}search(o,r){let l=`${this.apiUrl}/${r}/${o}`;return this._httpClient.get(l).pipe(V(()=>N([])))}};e.\u0275fac=function(r){return new(r||e)(L(G))},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function oe(i,e){i&1&&(n(0,"div",2),a(1,` No hay paises que mostrar
`),t())}var ae=i=>["/countries/by",i];function me(i,e){if(i&1&&(n(0,"tr")(1,"td"),a(2),t(),n(3,"td"),a(4),t(),n(5,"td"),s(6,"img",5),t(),n(7,"td"),a(8),t(),n(9,"td"),a(10),t(),n(11,"td"),a(12),w(13,"number"),t(),n(14,"td")(15,"a",6),a(16,"Info"),t()()()),i&2){let c=e.$implicit,o=e.index;m(2),y(o+1),m(2),d(" ",c.flag,""),m(2),p("src",c.flags.svg,B)("alt",c.name.common),m(2),y(c.capital),m(2),y(c.name.common),m(2),y(F(13,8,c.population)),m(3),p("routerLink",z(10,ae,c.cca3))}}function ce(i,e){if(i&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),t(),n(5,"th"),a(6,"Icon"),t(),n(7,"th"),a(8,"Bandera"),t(),n(9,"th"),a(10,"Nombre"),t(),n(11,"th"),a(12,"Capital"),t(),n(13,"th"),a(14,"Poblaci\xF3n"),t(),s(15,"th"),t()(),n(16,"tbody"),S(17,me,17,12,"tr",4),t()()),i&2){let c=P();m(17),p("ngForOf",c.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,l){if(r&1&&S(0,oe,2,0,"div",0)(1,ce,18,1,"ng-template",null,1,M),r&2){let h=T(2);p("ngIf",l.countries.length===0)("ngIfElse",h)}},dependencies:[q,D,Q,j],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let i=e;return i})();var Y=(()=>{let e=class e{constructor(o){this._service=o,this.countries=[]}searchByCapital(o){this._service.search(o,"capital").subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=u({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(n(0,"h2"),a(1,"Por capital"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return l.searchByCapital(b)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),r&2&&(m(9),p("countries",l.countries))},dependencies:[C,E]});let i=e;return i})();var Z=(()=>{let e=class e{constructor(o){this._service=o,this.countries=[]}searchByCountry(o){this._service.search(o,"name").subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(n(0,"h2"),a(1,"Por capital"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return l.searchByCountry(b)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),r&2&&(m(9),p("countries",l.countries))},dependencies:[C,E]});let i=e;return i})();var ee=(()=>{let e=class e{constructor(o){this._service=o,this.countries=[]}searchByRegion(o){this._service.search(o,"region").subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=u({type:e,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(n(0,"h2"),a(1,"Por capital"),t(),s(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return l.searchByRegion(b)}),t()()(),n(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),r&2&&(m(9),p("countries",l.countries))},dependencies:[C,E]});let i=e;return i})();function le(i,e){i&1&&(n(0,"div",2),a(1,"Espere por favor"),t())}function se(i,e){if(i&1&&(n(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pa\xEDs: "),n(5,"strong"),a(6),t()(),s(7,"hr"),t()(),n(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),t(),s(12,"img",6),t(),n(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),t(),n(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n: "),t(),a(20),w(21,"number"),t(),n(22,"li",9)(23,"strong"),a(24,"C\xF3digo: "),t(),a(25),t()()()(),n(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),t(),n(30,"div",11)(31,"span",12),a(32),t(),n(33,"span",12),a(34),t(),n(35,"span",12),a(36),t(),n(37,"span",12),a(38),t(),n(39,"span",12),a(40),t(),n(41,"span",12),a(42),t(),n(43,"span",12),a(44),t(),n(45,"span",12),a(46),t()()()()()),i&2){let c=P();m(6),y(c.country.name.common),m(6),p("src",c.country.flags.svg,B)("alt",c.country.name.common),m(8),d(" ",F(21,13,c.country.population)," "),m(5),d(" ",c.country.cca3," "),m(7),d(" ",c.country.translations.ara.common,""),m(2),d(" ",c.country.translations.bre.common,""),m(2),d(" ",c.country.translations.ces.common,""),m(2),d(" ",c.country.translations.cym.common,""),m(2),d(" ",c.country.translations.deu.common,""),m(2),d(" ",c.country.translations.est.common,""),m(2),d(" ",c.country.translations.fin.common,""),m(2),d(" ",c.country.translations.ita.common,"")}}var te=(()=>{let e=class e{constructor(o,r,l){this._activatedRoute=o,this._service=r,this._router=l}ngOnInit(){this._activatedRoute.params.pipe(k(({id:o})=>this._service.searchByAlpha(o,"alpha"))).subscribe(o=>o?this.country=o:this._router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(f(J),f(v),f(K))},e.\u0275cmp=u({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&S(0,le,2,0,"ng-template",null,0,M)(2,se,47,15,"div",1),r&2){let h=T(1);m(2),p("ngIf",l.country)("ngIfElse",h)}},dependencies:[D,j]});let i=e;return i})();var pe=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:ee},{path:"by/:id",component:te}],ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[$.forChild(pe),$]});let i=e;return i})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[H,ie,W]});let i=e;return i})();export{Ue as CountriesModule};