webpackJsonp([3,1],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=n(14),r=a(o);n(49),n(52);var u=n(40),i=a(u),s=n(50),l=a(s),d=n(45),c=a(d),f=n(24),p=a(f);r["default"].http.interceptors.push(function(e,t){r["default"].http.headers.common.Authorization="Bearer "+localStorage.getItem("token"),t()}),l["default"].beforeEach(function(e,t,n){p["default"].commit("updateRouter",e),(0,c["default"])(e,t,n),n()});new r["default"]({template:"<App/>",components:{App:i["default"]},router:l["default"],store:p["default"]}).$mount("#app")},23:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),r=a(o),u=n(47),i=a(u);t["default"]=[].concat((0,r["default"])(i["default"]))},24:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(38),r=a(o),u=n(51),i=a(u),s=new r["default"].Store({state:{authorized:!1,config:i["default"],$router:{}},mutations:{updateRouter:function(e,t){e.$router=t}}});t["default"]=s},40:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,r,u=n(1),i=a(u),s=n(3),l=a(s),d=n(2),c=a(d),f=n(41),p=a(f),m=n(42),h=a(m),v=n(44),b=a(v),g=n(43),y=a(g),_=(o=(0,c["default"])({template:'\n        <div id="wrapper" >\n            <app-sidebar v-show="authorized"></app-sidebar>\n            <div v-bind:class="{\'page-wrapper gray-bg\': authorized}">\n                <app-header  v-show="authorized"></app-header>\n                <vue-progress-bar></vue-progress-bar>\n                <app-bread-crumb  v-show="authorized"></app-bread-crumb>\n                \n                <div v-bind:class="{\'row wrapper wrapper-content\': authorized, \'zix-background\': !authorized}">\n                    <transition mode="out-in" \n                                enter-active-class="fadeIn"\n                                leave-active-class="fadeOut"\n                                appear\n                    >\n                        <router-view class="animated"></router-view>\n                    </transition>\n                </div>\n                \n                <app-footer  v-show="authorized"></app-footer>\n            </div>\n    \n        </div>\n    ',components:{AppFooter:h["default"],AppSidebar:b["default"],AppHeader:y["default"],AppBreadCrumb:p["default"]},style:n(102)}),o(r=function(){function e(){(0,i["default"])(this,e)}return(0,l["default"])(e,[{key:"created",value:function(){this.checkForAuthenticatedUser()}},{key:"checkForAuthenticatedUser",value:function(){var e=localStorage.getItem("token");return e?(this.$http.get("http://localhost:8000/api/user").then()["catch"](),this.$store.state.authorized=!0):this.$store.state.authorized=!1}},{key:"authorized",get:function(){return this.$store.state.authorized}}]),e}())||r);t["default"]=_},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,r,u=n(1),i=a(u),s=n(3),l=a(s),d=n(2),c=a(d),f=(o=(0,c["default"])({template:'\n        <div class="row wrapper border-bottom white-bg page-heading">\n            <div class="col-lg-10">\n                <h2>\n                    {{router.name}}\n                </h2>\n                <ol class="breadcrumb text-capitalize">\n                    <li v-if="router.name != \'Dashboard\'">\n                        <router-link :to="{name: \'Dashboard\'}">Dashboard</router-link>\n                    </li>\n     \n                    <li v-for="crumb in breadcrumbs">\n                        <router-link :to="{name: crumb, params: router.params}">{{crumb}}</router-link>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    ',events:{$route:function(){console.log("Route Changed")}}}),o(r=function(){function e(){(0,i["default"])(this,e)}return(0,l["default"])(e,[{key:"created",value:function(){var e=this;this.$watch("$route",function(){e.$Progress.start()})}},{key:"router",get:function(){return this.$store.state.$router}},{key:"breadcrumbs",get:function(){return this.router.matched.map(function(e){return e.name})}}]),e}())||r);t["default"]=f},42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,r,u=n(1),i=a(u),s=n(2),l=a(s),d=(o=(0,l["default"])({template:'\n        <div class="footer">\n            <div class="pull-right">\n                10GB of <strong>250GB</strong> Free.\n            </div>\n            <div>\n                <strong>Copyright</strong> Zix Development &copy; 2016-2017\n            </div>\n        </div>\n  '}),o(r=function c(){(0,i["default"])(this,c)})||r);t["default"]=d},43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,r,u=n(1),i=a(u),s=n(2),l=a(s),d=(o=(0,l["default"])({template:'\n        <div class="row border-bottom">\n            <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">\n                <div class="navbar-header">\n                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0);"><i class="fa fa-bars"></i> </a>\n                    <form role="search" class="navbar-form-custom" method="post" action="#">\n                        <div class="form-group">\n                            <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">\n                        </div>\n                    </form>\n                </div>\n                <ul class="nav navbar-top-links navbar-right">\n                    <li>\n                        <router-link :to="{name: \'Logout\'}"><i class="fa fa-sign-out"></i> Log out</router-link>\n                    </li>\n               \n                </ul>\n    \n            </nav>\n        </div>\n    '}),o(r=function c(){(0,i["default"])(this,c)})||r);t["default"]=d},44:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o,r,u=n(1),i=a(u),s=n(3),l=a(s),d=n(2),c=a(d),f=n(23),p=a(f),m=(o=(0,c["default"])({template:'\n        <nav class="navbar-default navbar-static-side" role="navigation">\n        <div class="sidebar-collapse">\n            <ul class="nav metismenu" id="side-menu">\n                <li class="nav-header">\n                    <div class="profile-element">\n                        <a href="javascript:void(0);">\n                        <span class="clear">\n                            <span class="block m-t-xs">\n                                <strong class="font-bold">\n                                    Badi Ifaoui\n                                </strong>\n                            </span>\n                            <span class="text-muted text-xs block">\n                                CEO Founder\n                            </span>\n                        </span>\n                        </a>\n\n                    </div>\n                    <div class="logo-element">\n                        Zix+\n                    </div>\n                </li>\n                \n                <router-link v-for="route of routes" tag="li" :to="link(route)" >\n                    <router-link :to="link(route)">\n                         <i :class="\'fa \' + route.icon"></i> \n                        <span class="nav-label"> {{route.name}} </span>\n                        <span v-if="route.children" class="fa arrow"></span>\n                    </router-link>\n                   \n                    <ul v-if="route.children" class="nav nav-second-level collapse">\n\n                        <router-link v-for="child of route.children" tag="li" :to="link(child)">\n                            <router-link :to="link(child)">\n                                 {{child.name}} \n                            </router-link>\n                        </router-link>\n\n                    </ul>\n                </router-link>\n                    \n            </ul>\n\n        </div>\n    </nav>\n  '}),o(r=function(){function e(){(0,i["default"])(this,e)}return(0,l["default"])(e,[{key:"link",value:function(e){return e.children?"":{name:e.name,activeClass:"active"}}},{key:"routes",get:function(){return p["default"].filter(function(e){return e.meta.menu}).map(function(e){return{path:e.path,name:e.name,permission:e.meta.permission,icon:e.meta.icon,children:e.children?e.children.filter(function(e){return e.meta.menu}).map(function(e){return{path:e.path,name:e.name,permission:e.meta.permission,icon:e.meta.icon}}):null}})}}]),e}())||r);t["default"]=m},45:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){e.meta.auth&&!localStorage.getItem("token")&&n("/auth/login"),!e.meta.auth&&localStorage.getItem("token")&&n("/")}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){return n.e(0,function(n){var o=[n(39)("./"+e+(t?"/index":"")+".vue")];a.apply(null,o)}.bind(this))}};t["default"]=[{name:"Dashboard",path:"/",meta:{menu:!0,icon:"fa-th-large",auth:!0},component:a("home",!0)},{name:"Login",path:"/auth/login",meta:{icon:"fa-tachometer",auth:!1},component:a("+auth/login")},{name:"Logout",path:"/auth/logout",meta:{icon:"fa-tachometer",auth:!0},component:a("+auth/logout")}]},47:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),r=a(o),u=n(46),i=a(u),s=n(48),l=a(s);t["default"]=[].concat((0,r["default"])(i["default"]),(0,r["default"])(l["default"]))},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a){return n.e(0,function(n){var o=[n(39)("./"+e+(t?"/index":"")+".vue")];a.apply(null,o)}.bind(this))}};t["default"]=[{path:"/system",name:"System",meta:{icon:"fa-cog",menu:!0,auth:!1},component:a("+system",!0),children:[{path:"/system/sites",name:"Sites",meta:{menu:!0,auth:!0},component:a("+system/sites",!0)},{path:"/system/sites/add",name:"Site Add",meta:{auth:!0},component:a("+system/sites/create")},{path:"/system/sites/:id/edit",name:"Site Edit",meta:{auth:!0},component:a("+system/sites/create")},{path:"/system/sites/:id/ui",name:"Site UI",meta:{auth:!0},component:a("+system/site-ui",!0)},{path:"/system/sites/:id/ui/add",name:"Site UI Add",meta:{auth:!0},component:a("+system/site-ui/create")}]}]},49:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=n(14),r=a(o),u=n(132),i=a(u),s=n(38),l=a(s),d=n(36),c=a(d),f=n(131),p=a(f);r["default"].use(i["default"]),r["default"].use(l["default"]),r["default"].use(p["default"],{color:"rgb(231, 76, 60)",failedColor:"red",height:"2px"}),window.$=window.jQuery=window.jquery=c["default"],n(65),n(111)},50:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),r=a(o),u=n(14),i=a(u),s=n(133),l=a(s),d=n(23),c=a(d);i["default"].use(l["default"]),t["default"]=new l["default"]({linkActiveClass:"active",routes:[].concat((0,r["default"])(c["default"]),[{path:"*",redirect:"/"}])})},51:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={api_url:"http://localhost:8000/api/"}},52:function(e,t){"use strict";$(function(){function e(){!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},200)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},100)):$("#side-menu").removeAttr("style")}$(document).ready(function(){$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small"),$("#side-menu").metisMenu(),$(".navbar-minimalize").on("click",function(){$("body").toggleClass("mini-navbar"),e()})})})},53:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={computed:{progress:function(){return window.VueProgressBarEventBus.RADON_LOADING_BAR}}}},102:function(e,t){},109:function(e,t){},121:function(e,t,n){var a,o;n(109),a=n(53);var r=n(129);o=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},129:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"__cov-progress",style:{width:progress.percent+"%",height:progress.options.height,"background-color":progress.options.canSuccess?progress.options.color:progress.options.failedColor,opacity:progress.options.show?1:0}})},staticRenderFns:[]}}});
//# sourceMappingURL=app.f448019b48fbe083f5bf.js.map