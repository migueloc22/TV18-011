/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // window.FirebasePlugin.getToken(function(token) {
        //     // save this server-side and use it to push notifications to this device
        //     alert(token);
        // }, function(error) {
        //     alert(error);
        // });
    },


    onDeviceReady: function () {
       
        //document.addEventListener("online", online, false);
        //document.addEventListener("offline", onOffline, false);
        
         window.FirebasePlugin.getToken(function(token) {
            // save this server-side and use it to push notifications to this device
            alert("token es "+token);
        }, function(error) {
            alert("error");
        });
        // $("#enviar").on('click', function () {
        //     window.FirebasePlugin.getToken(function (token) {
        //         alert(token);
        //         console.log("firebase token:  " + token);
        //         $("#textto").text(token);
        //     }, function (error) {
        //         console.error(error);
        //     });
        //     window.FirebasePlugin.subscribe("apptivosesdetodos");
        // });
    },



    

};

app.initialize();