webpackJsonp([0,4],{1e3:function(e,t){e.exports='<div class="card">\n    <div class="card-block">\n        <div class="text-xs-center">\n            <h3><i class="fa fa-user"></i> Login Out </h3>\n            <hr>\n        </div>\n        <div class="text-xs-center">\n            <div class="preloader-wrapper big active">\n                <div class="preloader-wrapper big active">\n                    <div class="preloader-wrapper big active">\n                        <div class="preloader-wrapper big active">\n                            <div class="spinner-layer spinner-blue-only">\n                                <div class="circle-clipper left">\n                                    <div class="circle"></div>\n                                </div><div class="gap-patch">\n                                <div class="circle"></div>\n                            </div><div class="circle-clipper right">\n                                <div class="circle"></div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'},1001:function(e,t){e.exports='<!--Mask-->\n<div class="view hm-black-strong">\n    <div class="full-bg-img flex-center">\n        <div class="container">\n            <div class="row">\n\n                <!--First column-->\n                <div class="col-lg-6">\n                    <div class="description">\n                        <h3 class="h3-responsive wow fadeInLeft">\n                            Welcome to <b>Zix</b> Development!\n                        </h3>\n                        <hr class="hr-dark wow fadeInLeft">\n                        <p class="wow fadeInLeft" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>\n                        <br>\n                        <a class="btn btn-comm btn-lg wow fadeInLeft waves-effect waves-light" data-wow-delay="0.7s">Learn more</a>\n                    </div>\n                </div>\n                <!--/.First column-->\n\n                <!--Second column-->\n                <div class="col-lg-6" >\n\n                    <router-outlet></router-outlet>\n\n                </div>\n                <!--/Second column-->\n            </div>\n        </div>\n    </div>\n</div>\n<!--/Mask-->\n'},1002:function(e,t){e.exports='<div class="card">\n    <div class="card-block">\n        <!--Header-->\n        <div class="text-xs-center">\n            <h3><i class="fa fa-user"></i> Register </h3>\n        </div>\n\n        <form (ngSubmit)="register()" #registerForm="ngForm">\n            <!--Body-->\n            <div class="md-form">\n                <i class="fa fa-user prefix"></i>\n                <input id="userUsername"\n                       [(ngModel)]="user.username"\n                       name="username"\n                       #username="ngModel"\n                       class="form-control"\n                       type="text"\n                       required\n                       minlength="3"\n                       maxlength="255"\n                >\n                <label for="userUsername">Enter Username</label>\n                <span *ngIf="form.errors && form.errors.username" class="text-danger pull-right">{{form.errors.username}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-envelope prefix"></i>\n                <input id="userEmail"\n                       [(ngModel)]="user.email"\n                       name="email"\n                       #email="ngModel"\n                       class="form-control"\n                       type="email"\n                       required\n                       minlength="3"\n                       maxlength="255"\n                >\n                <label for="userEmail">Enter E-mail Address</label>\n                <span *ngIf="form.errors && form.errors.email" class="text-danger pull-right">{{form.errors.email}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-lock prefix"></i>\n                <input id="userPassword"\n                       [(ngModel)]="user.password"\n                       name="password"\n                       #password="ngModel"\n                       class="form-control"\n                       type="password"\n                       required\n                       minlength="3"\n                       maxlength="255"\n                >\n                <label for="userPassword">Enter Password</label>\n                <span *ngIf="form.errors && form.errors.password"\n                      class="text-danger pull-right">{{form.errors.password}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-unlock-alt prefix"></i>\n                <input type="password"\n                       id="userPasswordConfirmation"\n                       [(ngModel)]="user.password_confirmation"\n                       name="password_confirmation"\n                       #password_confirmation="ngModel"\n                       class="form-control"\n                       required\n                       minlength="3"\n                       maxlength="255"\n                >\n                <label for="userPasswordConfirmation">Enter Password Confirmation</label>\n                <span *ngIf="form.errors && form.errors.password_confirmation"\n                      class="text-danger pull-right">{{form.errors.password_confirmation}}</span>\n            </div>\n\n            <div class="md-form">\n                <fieldset class="form-group">\n                    <input id="userAcceptTerms"\n                           name="accept_terms"\n                           type="checkbox"\n                           #accept_terms="ngModel"\n                           [(ngModel)]="user.accept_terms"\n                    >\n                    <label for="userAcceptTerms">I accept Terms and Conditions</label>\n                    <span *ngIf="form.errors && form.errors.accept_terms"\n                          class="text-danger pull-right">{{form.errors.accept_terms}}</span>\n                </fieldset>\n            </div>\n\n            <div class="text-xs-center">\n                <button [disabled]="!user.accept_terms && !form.submitting"\n                        type="submit"\n                        class="btn btn-comm btn-lg waves-effect waves-light"\n                >\n                    <i *ngIf="form.submitting" class="fa fa-spinner fa-pulse"></i>\n                    Register\n                </button>\n                <hr>\n            </div>\n        </form>\n\n        <div class="text-xs-center">\n            <a routerLink="/auth/login">Already have account?</a>\n            <div class="clearfix"></div>\n            <hr>\n        </div>\n\n        <div class="text-xs-center">\n            <h3 class="text-uppercase">\n                OR <br>\n                <small> Log In Using</small>\n            </h3>\n            <a href="https://www.facebook.com/" target="_blank" class="btn-floating btn-small btn-fb waves-effect waves-light"><i class="fa fa-facebook"> </i></a>\n            <a href="https://twitter.com/" target="_blank" class="btn-floating btn-small btn-tw waves-effect waves-light"><i class="fa fa-twitter"> </i></a>\n            <a href="https://plus.google.com/u/0/" target="_blank" class="btn-floating btn-small btn-gplus waves-effect waves-light"><i class="fa fa-google-plus"> </i></a>\n            <a href="https://www.linkedin.com/" target="_blank" class="btn-floating btn-small btn-li waves-effect waves-light"><i class="fa fa-linkedin"> </i></a>\n            <a class="btn-floating btn-git btn-small waves-effect waves-light"><i class="fa fa-github"></i></a>\n\n        </div>\n    </div>\n</div>\n'},1003:function(e,t){e.exports='<div class="card">\n    <div class="card-block">\n        <!--Header-->\n        <div class="text-xs-center">\n            <h3><i class="fa fa-user"></i> Reset Password </h3>\n            <div *ngIf="form.errors && form.errors.message" class="alert alert-danger">\n                <strong>Oops </strong> {{form.errors.message}}\n            </div>\n        </div>\n        <form *ngIf="!sent" (ngSubmit)="reset()" #registerForm="ngForm">\n\n\n            <div class="md-form">\n                <i class="fa fa-envelope prefix"></i>\n                <input id="userEmail"\n                       [(ngModel)]="user.email"\n                       name="email"\n                       #email="ngModel"\n                       class="form-control"\n                       type="email"\n                       required\n                >\n                <label for="userEmail">Enter E-mail Address</label>\n                <span *ngIf="form.errors && form.errors.email" class="text-danger pull-right">{{form.errors.email}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-lock prefix"></i>\n                <input id="userPassword"\n                       [(ngModel)]="user.password"\n                       name="password"\n                       #password="ngModel"\n                       class="form-control"\n                       type="password"\n                       minlength="6"\n                       maxlength="255"\n                       required\n                >\n                <label for="userPassword">Enter Password</label>\n                <span *ngIf="form.errors && form.errors.password"\n                      class="text-danger pull-right">{{form.errors.password}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-unlock-alt prefix"></i>\n                <input type="password"\n                       id="userPasswordConfirmation"\n                       [(ngModel)]="user.password_confirmation"\n                       name="password_confirmation"\n                       #password_confirmation="ngModel"\n                       class="form-control"\n                       minlength="6"\n                       maxlength="255"\n                       required\n                >\n                <label for="userPasswordConfirmation">Enter Password Confirmation</label>\n                <span *ngIf="form.errors && form.errors.password_confirmation"\n                      class="text-danger pull-right">{{form.errors.password_confirmation}}</span>\n            </div>\n\n            <div class="text-xs-center">\n                <button [disabled]="form.submitting" type="submit" class="btn btn-comm btn-lg waves-effect waves-light">\n                    <i *ngIf="form.submitting" class="fa fa-spinner fa-pulse"></i>\n                    Reset Password\n                </button>\n                <hr>\n            </div>\n        </form>\n    </div>\n</div>\n'},989:function(e,t,n){"use strict";var r=n(1),s=n(91),a=n(115),i=n(413),o=n(256),l=n(412),c=n(992),f=n(993),d=n(995),u=n(996),m=n(991),p=n(994);n.d(t,"AuthModule",function(){return h});var g=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},v=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=[{path:"",component:p.a,children:[{path:"register",component:d.a,pathMatch:"full",canActivate:[l.GuestService]},{path:"login",component:c.a,pathMatch:"full",canActivate:[l.GuestService]},{path:"logout",component:f.a,pathMatch:"full",canActivate:[l.AuthService]},{path:"forgot-password",component:m.a,pathMatch:"full",canActivate:[l.GuestService]},{path:"password/reset/:code",component:u.a,pathMatch:"full",canActivate:[l.GuestService]}]}],h=function(){function e(){}return e=g([n.i(r.t)({declarations:[d.a,c.a,m.a,u.a,f.a,p.a],imports:[a.g,i.a,o.c,s.c.forChild(b)],providers:[]}),v("design:paramtypes",[])],e)}()},991:function(e,t,n){"use strict";var r=n(1),s=n(411);n.d(t,"a",function(){return o});var a=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(e){this.guestService=e,this.user={},this.form={},this.form.message="Enter your <b>Email</b>  and instructions will be sent to you!"}return e.prototype.reset=function(){var e=this;this.form.submitting=!0,this.guestService.forgotPassword(this.user).subscribe(function(t){e.form.submitted=!0,e.form.errors={},e.form.message=t},function(t){e.form.message="",e.form.errors=t.json(),e.form.submitting=!1,e.form.submitted=!1})},e=a([n.i(r._0)({selector:"app-forgot-password",template:n(998),host:{"[@routeAnimation]":"true","[style.display]":"'block'","[style.position]":"'absolute'","[style.width]":"'100%'"},animations:[n.i(r._1)("routeAnimation",[n.i(r._2)("*",n.i(r._3)({transform:"scale(1)",opacity:1})),n.i(r._4)("void => *",[n.i(r._3)({transform:"scale(0)",opacity:0}),n.i(r._5)(1e3)]),n.i(r._4)("* => void",n.i(r._5)(1e3,n.i(r._3)({transform:"scale(0)",opacity:0})))])]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof s.a&&s.a)&&t||Object])],e);var t}()},992:function(e,t,n){"use strict";var r=n(1),s=n(91),a=n(169),i=n(411);n.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n){this.guestService=e,this.appState=t,this.router=n,this.user={},this.form={}}return e.prototype.login=function(){var e=this;this.form.submitting=!0,this.guestService.login(this.user).subscribe(function(t){localStorage.setItem("token",t.token),e.appState.set("authorized",!0),e.appState.set("user",t.user),e.router.navigate([""])},function(t){e.form.errors=t.json(),e.form.submitting=!1})},e=o([n.i(r._0)({selector:"app-login",template:n(999),host:{"[@routeAnimation]":"true","[style.display]":"'block'","[style.position]":"'absolute'","[style.width]":"'100%'"},animations:[n.i(r._1)("routeAnimation",[n.i(r._2)("*",n.i(r._3)({opacity:1})),n.i(r._4)("void => *",[n.i(r._3)({opacity:0}),n.i(r._5)(1e3)]),n.i(r._4)("* => void",n.i(r._5)(1e3,n.i(r._3)({opacity:0})))])]}),l("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object,"function"==typeof(c="undefined"!=typeof a.a&&a.a)&&c||Object,"function"==typeof(f="undefined"!=typeof s.a&&s.a)&&f||Object])],e);var t,c,f}()},993:function(e,t,n){"use strict";var r=n(1),s=n(91),a=n(169),i=n(255);n.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n){this.appState=e,this.router=t,this.authService=n}return e.prototype.ngOnInit=function(){var e=this;this.authService.logout().subscribe(function(){return e.logout()},function(){return e.logout()})},e.prototype.logout=function(){var e=this;setTimeout(function(){localStorage.removeItem("token"),e.appState.set("authorized",!1),e.appState.set("user",{}),e.router.navigate(["auth","login"])},1500)},e=o([n.i(r._0)({selector:"app-logout",template:n(1e3),host:{"[@routeAnimation]":"true","[style.display]":"'block'","[style.position]":"'absolute'","[style.width]":"'100%'"},animations:[n.i(r._1)("routeAnimation",[n.i(r._2)("*",n.i(r._3)({transform:"scale(1)",opacity:1})),n.i(r._4)("void => *",[n.i(r._3)({transform:"scale(0)",opacity:0}),n.i(r._5)(1e3)]),n.i(r._4)("* => void",n.i(r._5)(1e3,n.i(r._3)({transform:"scale(0)",opacity:0})))])]}),l("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object,"function"==typeof(c="undefined"!=typeof s.a&&s.a)&&c||Object,"function"==typeof(f="undefined"!=typeof i.a&&i.a)&&f||Object])],e);var t,c,f}()},994:function(e,t,n){"use strict";var r=n(1);n.d(t,"a",function(){return i});var s=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=s([n.i(r._0)({selector:"app-main-auth-layout",template:n(1001),styles:[n(997)]}),a("design:paramtypes",[])],e)}()},995:function(e,t,n){"use strict";var r=n(1),s=n(91),a=n(411),i=n(169);n.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n){this.guestService=e,this.appState=t,this.router=n,this.user={},this.form={}}return e.prototype.register=function(){var e=this;this.form.submitting=!0,this.guestService.register(this.user).subscribe(function(t){localStorage.setItem("token",t.token),e.appState.set("authorized",!0),e.router.navigate([""])},function(t){e.form.errors=t.json(),e.form.submitting=!1})},e=o([n.i(r._0)({selector:"app-register",template:n(1002),host:{"[@routeAnimation]":"true","[style.display]":"'block'","[style.position]":"'absolute'","[style.width]":"'100%'"},animations:[n.i(r._1)("routeAnimation",[n.i(r._2)("*",n.i(r._3)({opacity:1})),n.i(r._4)("void => *",[n.i(r._3)({opacity:0}),n.i(r._5)(1e3)]),n.i(r._4)("* => void",n.i(r._5)(1e3,n.i(r._3)({opacity:0})))])]}),l("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object,"function"==typeof(c="undefined"!=typeof i.a&&i.a)&&c||Object,"function"==typeof(f="undefined"!=typeof s.a&&s.a)&&f||Object])],e);var t,c,f}()},996:function(e,t,n){"use strict";var r=n(1),s=n(91),a=n(411),i=n(169);n.d(t,"a",function(){return c});var o=this&&this.__decorate||function(e,t,n,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n,r){this.router=e,this.guestService=t,this.appState=n,this._router=r,this.user={},this.form={}}return e.prototype.ngOnInit=function(){var e=this;this.router.params.subscribe(function(t){e.user.token=t.code})},e.prototype.reset=function(){var e=this;this.form.submitting=!0,this.guestService.resetPassword(this.user).subscribe(function(t){localStorage.setItem("token",t.token),e.appState.set("authorized",!0),e.appState.set("user",t.user),e._router.navigate([""])},function(t){e.form.errors=t.json(),e.form.submitting=!1})},e=o([n.i(r._0)({selector:"app-reset-email",template:n(1003),host:{"[@routeAnimation]":"true","[style.display]":"'block'","[style.position]":"'absolute'","[style.width]":"'100%'"},animations:[n.i(r._1)("routeAnimation",[n.i(r._2)("*",n.i(r._3)({transform:"scale(1)",opacity:1})),n.i(r._4)("void => *",[n.i(r._3)({transform:"scale(0)",opacity:0}),n.i(r._5)(1e3)]),n.i(r._4)("* => void",n.i(r._5)(1e3,n.i(r._3)({transform:"scale(0)",opacity:0})))])]}),l("design:paramtypes",["function"==typeof(t="undefined"!=typeof s.b&&s.b)&&t||Object,"function"==typeof(c="undefined"!=typeof a.a&&a.a)&&c||Object,"function"==typeof(f="undefined"!=typeof i.a&&i.a)&&f||Object,"function"==typeof(d="undefined"!=typeof s.a&&s.a)&&d||Object])],e);var t,c,f,d}()},997:function(e,t){e.exports='.view {\n  background: url("./assets/images/backgrounds/img-25.jpg") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n\n.flex-center {\n  height: 60%; }\n\n@media (max-width: 768px) {\n  .full-bg-img,\n  .view {\n    height: auto;\n    position: relative; } }\n\n.description {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 2rem;\n  margin-bottom: 2rem;\n  color: #fff; }\n\n@media (max-width: 992px) {\n  .description {\n    padding-top: 7rem;\n    text-align: center; } }\n'},998:function(e,t){e.exports='<div class="card">\n    <div class="card-block">\n        <div class="text-xs-center">\n            <h3><i class="fa fa-user"></i> Reset Password </h3>\n            <div *ngIf="form.message"  class="alert alert-info" [innerHTML]="form.message"></div>\n            <div *ngIf="form.errors && form.errors.message"  class="alert alert-danger" [innerHTML]="form.errors.message"></div>\n        </div>\n        <form *ngIf="!form.submitted" (ngSubmit)="reset()" #forgotPasswordForm="ngForm">\n            <!--Body-->\n            <div class="md-form">\n                <i class="fa fa-envelope prefix"></i>\n                <input type="email"\n                       id="userEmail"\n                       [(ngModel)]="user.email"\n                       name="email"\n                       #email="ngModel"\n                       class="form-control"\n                       required\n                >\n                <span *ngIf="form.errors && form.errors.email" class="text-danger pull-right">{{form.errors.email}}</span>\n                <label class="" for="userEmail">Enter E-mail Address</label>\n            </div>\n            <div class="clearfix"></div>\n            <div class="text-xs-center">\n                <button [disabled]="form.submitting " type="submit" class="btn btn-comm btn-lg waves-effect waves-light">\n                    <i *ngIf="form.submitting" class="fa fa-spinner fa-pulse"></i>\n                    Reset\n                </button>\n                <hr>\n            </div>\n        </form>\n\n        <div class="">\n            <a routerLink="/auth/login"><i class="fa fa-lock"></i> &nbsp; Back to login</a>\n\n        </div>\n    </div>\n</div>\n'},999:function(e,t){e.exports='<div class="card">\n    <div class="card-block">\n        <!--Header-->\n        <div class="text-xs-center">\n            <h3><i class="fa fa-user"></i> Login </h3>\n            <div *ngIf="form.errors && form.errors.message" class="alert alert-danger">\n                <strong>Oops </strong> {{form.errors.message}}\n            </div>\n        </div>\n        <form (ngSubmit)="login()" #loginForm="ngForm">\n            <!--Body-->\n            <div class="md-form">\n                <i class="fa fa-envelope prefix"></i>\n                <input type="email"\n                       id="userEmail"\n                       [(ngModel)]="user.email"\n                       name="email"\n                       #email="ngModel"\n                       class="form-control"\n                       required\n                >\n                <label class="" for="userEmail">Enter E-mail Address</label>\n                <span *ngIf="form.errors && form.errors.email" class="text-danger pull-right">{{form.errors.email}}</span>\n            </div>\n\n            <div class="md-form">\n                <i class="fa fa-lock prefix"></i>\n                <input type="password"\n                       id="userPassword"\n                       [(ngModel)]="user.password"\n                       name="password"\n                       #password="ngModel"\n                       class="form-control"\n                       minlength="6"\n                       maxlength="255"\n                       required\n                >\n                <label class="" for="userPassword">Enter Password</label>\n                <span *ngIf="form.errors && form.errors.password" class="text-danger pull-right">{{form.errors.password}}</span>\n            </div>\n\n            <div class="md-form">\n                <fieldset class="form-group">\n                    <input id="checkbox1" type="checkbox">\n                    <label for="checkbox1">Remember me</label>\n                </fieldset>\n            </div>\n\n            <div class="text-xs-center">\n                <button [disabled]="form.submitting" type="submit" class="btn btn-comm btn-lg waves-effect waves-light">\n                    <i *ngIf="form.submitting" class="fa fa-spinner fa-pulse"></i>\n                    Log In\n                </button>\n                <hr>\n            </div>\n        </form>\n        <div class="">\n            <a routerLink="/auth/forgot-password">Forgot Your Password ?</a>\n            <a class="pull-right" routerLink="/auth/register">Create an account</a>\n            <hr class="clearfix">\n        </div>\n\n        <div class="text-xs-center">\n            <h3>\n                OR <br>\n                <small> Login with</small>\n            </h3>\n            <a href="https://www.facebook.com/" target="_blank" class="btn-floating btn-small btn-fb waves-effect waves-light"><i class="fa fa-facebook"> </i></a>\n            <a href="https://twitter.com/" target="_blank" class="btn-floating btn-small btn-tw waves-effect waves-light"><i class="fa fa-twitter"> </i></a>\n            <a href="https://plus.google.com/u/0/" target="_blank" class="btn-floating btn-small btn-gplus waves-effect waves-light"><i class="fa fa-google-plus"> </i></a>\n            <a href="https://www.linkedin.com/" target="_blank" class="btn-floating btn-small btn-li waves-effect waves-light"><i class="fa fa-linkedin"> </i></a>\n            <a class="btn-floating btn-git btn-small waves-effect waves-light"><i class="fa fa-github"></i></a>\n\n        </div>\n    </div>\n</div>\n'}});