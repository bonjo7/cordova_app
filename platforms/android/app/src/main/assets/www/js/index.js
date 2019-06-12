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

 /*
 Create event listeners which will use buttons to create local storage
 element id is the button it, add the event listener, call the method once clicked
*/
document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
document.getElementById("removeProjectFromLocalStorage").addEventListener ("click", removeProjectFromLocalStorage); 
document.getElementById("getLocalStorageByKey").addEventListener ("click", getLocalStorageByKey);  
var localStorage = window.localStorage; 

/*
Storage button functions which will be used by the event listener
*/

function setLocalStorage() { 
    localStorage.setItem("Name", "Bernard"); 
    localStorage.setItem("Job", "Graduate App Dev Consultant"); 
    localStorage.setItem("Project", "Cordova Project"); 
 } 

 function showLocalStorage() { 
    console.log(localStorage.getItem("Name")); 
    console.log(localStorage.getItem("Job")); 
    console.log(localStorage.getItem("Project")); 
 } 

 function removeProjectFromLocalStorage() {
    localStorage.removeItem("Project");
 }

 function getLocalStorageByKey() {
    console.log(localStorage.key(0));
 }

 /*
 Use event listeners to work for system buttons 
 such as volume keys, device keys
 */
document.addEventListener("volumeupbutton", callbackFunction, false);  
function callbackFunction() { 
   alert('Volume Up Button is pressed!');
}

/*
disable the back button that is used to exit the App.
Alert will be displayed instead of just exiting the app
*/
document.addEventListener("backbutton", onBackKeyDown, false);  
function onBackKeyDown(e) { 
   e.preventDefault(); 
   alert('Back Button is Pressed!'); 
} 

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

app.initialize();