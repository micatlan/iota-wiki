"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71449],{25916:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),l=["components"],i={},s="Deploying and running a Rust smart contract",c={unversionedId:"tutorial/04",id:"tutorial/04",isDocsHomePage:!1,title:"Deploying and running a Rust smart contract",description:"The following Solo test deploys a wasm contract on the chain. Then it",source:"@site/external/wasp/documentation/docs/tutorial/04.md",sourceDirName:"tutorial",slug:"/tutorial/04",permalink:"/wasp/tutorial/04",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a Chain; Core Contracts",permalink:"/wasp/tutorial/03"},next:{title:"Structure of the smart contract",permalink:"/wasp/tutorial/05"}},u=[],g={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-and-running-a-rust-smart-contract"},"Deploying and running a Rust smart contract"),(0,a.kt)("p",null,"The following ",(0,a.kt)("em",{parentName:"p"},"Solo")," test deploys a ",(0,a.kt)("em",{parentName:"p"},"wasm")," contract on the chain. Then it\ninvokes it: first it posts a request ",(0,a.kt)("inlineCode",{parentName:"p"},"storeString")," to set the string value, then\nit calls the view ",(0,a.kt)("inlineCode",{parentName:"p"},"getString")," to retrieve the value and checks it.\n`"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial3(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    chain := env.NewChain(nil, "ex3")\n    // deploy the contract on chain\n    err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n    require.NoError(t, err)\n\n    // call contract to store string\n    req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!").WithIotas(1)\n    _, err = chain.PostRequestSync(req, nil)\n    require.NoError(t, err)\n\n    // call the contract to extract value of the \'paramString\' and check\n    res, err := chain.CallView("example1", "getString")\n    require.NoError(t, err)\n    par := kvdecoder.New(res, chain.Log)\n    returnedString := par.MustGetString("paramString")\n    require.EqualValues(t, "Hello, world!", returnedString)\n}\n')),(0,a.kt)("p",null,"Running the test will produce the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"=== RUN   TestTutorial3\n36:24.706545400 INFO    TestTutorial3.db    dbmanager/dbmanager.go:54   creating new registry database. Persistent: false\n36:24.709045800 INFO    TestTutorial3   solo/solo.go:166    Solo environment has been created with initial logical time 00:01.000000000\n36:24.710155900 INFO    TestTutorial3   solo/solo.go:234    deploying new chain 'ex3'. ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM, state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n36:24.710155900 INFO    TestTutorial3   solo/solo.go:236         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n36:24.710155900 INFO    TestTutorial3   solo/solo.go:237         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. originator address: 1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q\n36:24.710155900 INFO    TestTutorial3.db    dbmanager/dbmanager.go:56   creating new database for chain $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM. Persistent: false\n36:24.754488200 INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.000000002\n36:24.755008100 INFO    TestTutorial3.ex3   solo/run.go:127 state transition --\x3e #1. Requests in the block: 1. Outputs: 1\n36:24.755008100 INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.001000002\n36:24.755008100 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n36:24.755008100 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecordsForBlock\n36:24.755008100 INFO    TestTutorial3.ex3   solo/run.go:148 REQ: 'tx/[0]3awCue3F6VJ7DPYvLbACfg5e4RUuh2LJ3n5kLafXSyv6'\n36:24.755008100 INFO    TestTutorial3.ex3   solo/solo.go:310    chain 'ex3' deployed. Chain ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM\n36:24.755528600 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blob::getBlobInfo\n36:24.755528600 INFO    TestTutorial3   solo/solofun.go:88  Solo::PutBlobDataIntoRegistry: len = 17099, hash = 8VYo1kCTW9iLC2H8L8PQeWbBtc4evGaT9FrqVJ5oPtGa\n36:24.755528600 INFO    TestTutorial3.ex3   solo/req.go:268 callView: root::getFeeInfo\n36:24.806892800 INFO    TestTutorial3.ex3   vmcontext/log.go:4  eventlog::fd91bc63 -> '[blob] hash: ramy6insQwheUgHyc3U8VyzQLmkZtbL5FNpixeX118E, field sizes: [17099 8]'\n36:24.807462800 INFO    TestTutorial3.ex3   vm/event.go:24  $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::fd91bc63/event [blob] hash: ramy6insQwheUgHyc3U8VyzQLmkZtbL5FNpixeX118E, field sizes: [17099 8]\n36:24.807462800 INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.001000004\n36:24.808620800 INFO    TestTutorial3.ex3   solo/run.go:127 state transition --\x3e #2. Requests in the block: 1. Outputs: 1\n36:24.808620800 INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.002000004\n36:24.809134700 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecord\n36:24.809220900 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n36:24.809220900 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecordsForBlock\n36:24.809220900 INFO    TestTutorial3.ex3   solo/run.go:148 REQ: 'tx/[0]GQpB1vQvJthYXV5xikt2TYSZURgQgAdEYgj1sHFHpHk'\n36:24.863073300 INFO    TestTutorial3.ex3   vmcontext/log.go:4  eventlog::cebf5908 -> '[deploy] name: example1 hname: ffb07aeb, progHash: ramy6insQwheUgHyc3U8VyzQLmkZtbL5FNpixeX118E, dscr: 'N/A''\n36:24.863073300 INFO    TestTutorial3.ex3   vm/event.go:24  $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::cebf5908/event [deploy] name: example1 hname: ffb07aeb, progHash: ramy6insQwheUgHyc3U8VyzQLmkZtbL5FNpixeX118E, dscr: 'N/A'\n36:24.863601200 INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.002000006\n36:24.864107700 INFO    TestTutorial3.ex3   solo/run.go:127 state transition --\x3e #3. Requests in the block: 1. Outputs: 1\n36:24.864121400 INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.003000006\n36:24.864121400 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecord\n36:24.864121400 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n36:24.864121400 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecordsForBlock\n36:24.864121400 INFO    TestTutorial3.ex3   solo/run.go:148 REQ: 'tx/[0]GC77WmHkMrg8AtYj2gLwNdpyBzFD7rnry5pQyMLS1YWV'\n36:24.916485900 INFO    TestTutorial3.ex3   vmcontext/log.go:4  Message stored: Hello, world!\n36:24.917019300 INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.003000008\n36:24.917524600 INFO    TestTutorial3.ex3   solo/run.go:127 state transition --\x3e #4. Requests in the block: 1. Outputs: 1\n36:24.917524600 INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.004000008\n36:24.917579000 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecord\n36:24.917579000 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n36:24.917579000 INFO    TestTutorial3.ex3   solo/req.go:268 callView: blocklog::getRequestLogRecordsForBlock\n36:24.917579000 INFO    TestTutorial3.ex3   solo/run.go:148 REQ: 'tx/[0]DRPCK2B77KdDvSaPPCb1apDRKFvQcN8hGE4aJZUK4mvp'\n36:24.917579000 INFO    TestTutorial3.ex3   solo/req.go:268 callView: example1::getString\n--- PASS: TestTutorial3 (0.21s)\n")),(0,a.kt)("p",null,"The final state of the chain is ",(0,a.kt)("inlineCode",{parentName:"p"},"#4"),". The chain changes its state in response to\nthe requests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"state transition #0 --\x3e #1")," settles the initial state of the chain (see\n",(0,a.kt)("a",{parentName:"p",href:"/wasp/tutorial/01"},"First example"),")."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #1 --\x3e #2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #2 --\x3e #3")," are result of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Solo")," call",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'err := chain.DeployWasmContract(nil, "example1", "../pkg/example_tutorial_bg.wasm")')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first state transition corresponds to the storing of the ",(0,a.kt)("em",{parentName:"li"},"wasm")," binary\nfile as a binary object in the chain."),(0,a.kt)("li",{parentName:"ul"},"The second state transition corresponds to the deployment of the wasm smart\ncontract based on this binary object.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #3 --\x3e #4")," corresponds to sending the\nstring ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, world!")," by posting a ",(0,a.kt)("inlineCode",{parentName:"p"},"storeString")," request to the newly deployed\nsmart contract."),(0,a.kt)("p",null,"The test then calls the view ",(0,a.kt)("inlineCode",{parentName:"p"},"getString")," of the smart contract and asserts the\nreturned string is ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, world!"),". Note that when calling a view no state\ntransition occurs."))}p.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);