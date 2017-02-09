"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var glasses_service_1 = require("../../services/glasses.service");
var AboutComponent = (function () {
    function AboutComponent(glassesService) {
        var _this = this;
        this.glassesService = glassesService;
        // Initialize glasses array grouped by their brand
        glassesService.getGlassesByBrand()
            .subscribe(function (glasses) {
            _this.glassesByBrand = glasses;
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "35px Arial";
        ctx.strokeText("Welcome to our OpticStore!", 5, 40);
        //include facebook api sdk
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        //init facebook api with my facebook app
        window.fbAsyncInit = function () {
            FB.init({
                appId: '390978481274294',
                xfbml: true,
                version: 'v2.8'
            }),
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        alert(response.authResponse.accessToken);
                        console.log('Logged in.');
                    }
                    else {
                        FB.login(function (response) {
                            if (response.status === 'connected') {
                                alert(response.authResponse.accessToken);
                                console.log('Logged in.');
                            }
                        });
                    }
                });
            ;
            FB.AppEvents.logPageView();
        };
    };
    //function to share website
    AboutComponent.prototype.postToFeed = function (event) {
        FB.ui({
            //link: 'http://ynet.co.il',
            method: 'feed',
            caption: 'Go to OpticStore new website! NOW-->>',
            picture: "http://res.cloudinary.com/demo/image/upload/glasses.jpg",
        }, function (response) {
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'about',
        templateUrl: 'about.component.html',
    }),
    __metadata("design:paramtypes", [glasses_service_1.GlassesService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map