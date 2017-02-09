import {Component, OnInit} from '@angular/core';
import {GlassesByBrand} from '../../../GlassesByBrand'
import {GlassesService} from '../../services/glasses.service'

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
})

export class AboutComponent{
    glassesByBrand: GlassesByBrand[];

    constructor(private glassesService:GlassesService){
        // Initialize glasses array grouped by their brand
        glassesService.getGlassesByBrand()
            .subscribe(glasses => {
                this.glassesByBrand = glasses;
            });
    }
    ngOnInit() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "35px Arial";
        ctx.strokeText("Welcome to our OpticStore!",5,40);

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
    }

    //function to share website
    postToFeed(event) {
        FB.ui({
            //link: 'http://ynet.co.il',
            method: 'feed',
            caption: 'Go to OpticStore new website! NOW-->>',
            picture: "http://res.cloudinary.com/demo/image/upload/glasses.jpg",
        }, function (response) {
        });
    }
}
