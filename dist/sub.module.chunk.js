webpackJsonp([0],{283:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=o(603),s=o(601),r=o(602),c=function t(){e(this,t)};c=__decorate([a.NgModule({imports:[u.subRouting],declarations:[s.SubAppComponent,r.SubHomeComponent]}),__metadata("design:paramtypes",[])],c),n.SubModule=c},601:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function t(){e(this,t)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h2>Sub App</h2>\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],u),n.SubAppComponent=u},602:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=o(1),u=function t(){e(this,t)};u=__decorate([a.Component({selector:"sub-home",template:"\n    <h3>Sub Home Component</h3>\n  "}),__metadata("design:paramtypes",[])],u),n.SubHomeComponent=u},603:function(t,n,o){"use strict";var e=o(284),a=o(601),u=o(602);n.subRoutes=[{path:"",component:a.SubAppComponent,children:[{path:"",component:u.SubHomeComponent}]}],n.subRouting=e.RouterModule.forChild(n.subRoutes)}});
//# sourceMappingURL=sub.module.chunk.js.map