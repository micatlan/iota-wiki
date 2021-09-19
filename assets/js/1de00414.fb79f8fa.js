"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64068],{39123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",image:"/img/logo/goshimmer_light.png",keywords:["web API","POST","GET","node software","http endpoint","port","handler"]},p="WebAPI - clientLib",s={unversionedId:"apis/webAPI",id:"apis/webAPI",isDocsHomePage:!1,title:"WebAPI - clientLib",description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",source:"@site/external/goshimmer/documentation/docs/apis/webAPI.md",sourceDirName:"apis",slug:"/apis/webAPI",permalink:"/goshimmer/apis/webAPI",tags:[],version:"current",frontMatter:{description:"The web API interface allows access to functionality of the node software via exposed HTTP endpoints.",image:"/img/logo/goshimmer_light.png",keywords:["web API","POST","GET","node software","http endpoint","port","handler"]},sidebar:"docs",previous:{title:"Client Lib: Interaction With Layers",permalink:"/goshimmer/apis/client_lib"},next:{title:"Info API Methods",permalink:"/goshimmer/apis/info"}},c=[{value:"How to Use the API",id:"how-to-use-the-api",children:[]},{value:"GET and POST",id:"get-and-post",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webapi---clientlib"},"WebAPI - clientLib"),(0,a.kt)("p",null,"The web API interface allows access to functionality of the node software via exposed HTTP endpoints."),(0,a.kt)("h2",{id:"how-to-use-the-api"},"How to Use the API"),(0,a.kt)("p",null,"The default port to access the web API is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"8080:8080/tcp")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),", where the first port number is the internal port number within the node software, and the second for the access from an http port. An example where these two would be set to different values, or the external port is not utilized, can be found in the docker-network tool (see also the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the docker-network tool folder)."),(0,a.kt)("p",null,"The server instance of the web API is contacted via ",(0,a.kt)("inlineCode",{parentName:"p"},"webapi.Server()"),". Next we need to register a route with a matching handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"webapi.Server().ROUTE(path string, h HandlerFunc)\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"ROUTE")," will be replaced later in this documentation by ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"HandlerFunc")," defines a function to serve HTTP requests that gives access to the Context"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func HandlerFunc(c Context) error\n")),(0,a.kt)("p",null,"We can then use the Context to send a JSON response to the node: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JSON(statuscode int, i interface{}) error\n")),(0,a.kt)("p",null,"An implementation example is shown later for the POST method."),(0,a.kt)("h2",{id:"get-and-post"},"GET and POST"),(0,a.kt)("p",null,"Two methods are currently used. First, with ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," we register a new GET route for a handler function. The handler is accessed via the address ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),". The handler for a GET method can set the node to perform certain actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'webapi.Server().GET("path", HandlerFunc)\n')),(0,a.kt)("p",null,"A command can be sent to the node software to the API, e.g. via command prompt: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "http://127.0.0.1:8080/path?command"\n')),(0,a.kt)("p",null,"$$ . $$"),(0,a.kt)("p",null,"Second, with ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," we register a new POST route for a handler function. The handler can receive a JSON body input and send specific messages to the tangle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'webapi.Server().POST("path", HandlerFunc)\n')),(0,a.kt)("p",null,"For example, the following Handler ",(0,a.kt)("inlineCode",{parentName:"p"},"broadcastData")," sends a data message to the tangle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func broadcastData(c echo.Context) error {\n    var request Request\n    if err := c.Bind(&request); err != nil {\n        log.Info(err.Error())\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n\n    msg, err := messagelayer.IssuePayload(\n        payload.NewGenericDataPayload(request.Data), messagelayer.Tangle())\n    if err != nil {\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n    return c.JSON(http.StatusOK, Response{ID: msg.ID().String()})\n}\n")),(0,a.kt)("p",null,"As an example the JSON body   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "data":"HelloWor"\n}\n')),(0,a.kt)("p",null,"can be sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/data"),', which will issue a data message containing "HelloWor" (note that in this  example the data input is size limited.)'))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);