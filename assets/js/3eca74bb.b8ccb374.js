"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57430],{15007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var i=n(22122),a=n(19756),r=(n(67294),n(3905)),l=["components"],o={},d="Getting Started with Java",p={unversionedId:"libraries/java/getting_started",id:"libraries/java/getting_started",isDocsHomePage:!1,title:"Getting Started with Java",description:"Prerequisite",source:"@site/external/iota.rs/documentation/docs/libraries/java/getting_started.md",sourceDirName:"libraries/java",slug:"/libraries/java/getting_started",permalink:"/iota.rs/libraries/java/getting_started",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Client Python Library",permalink:"/iota.rs/libraries/python/api_reference"},next:{title:"Examples",permalink:"/iota.rs/libraries/java/examples"}},s=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Preparing your work environment",id:"preparing-your-work-environment",children:[]},{value:"Maven",id:"maven",children:[{value:"Installing the jar on your system",id:"installing-the-jar-on-your-system",children:[]},{value:"Adding the dependency to POM",id:"adding-the-dependency-to-pom",children:[]}]},{value:"Gradle",id:"gradle",children:[]},{value:"Generic",id:"generic",children:[{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"OSX",id:"osx",children:[]}]},{value:"Maven",id:"maven-1",children:[]},{value:"Gradle",id:"gradle-1",children:[]},{value:"Maven",id:"maven-2",children:[]},{value:"Gradle",id:"gradle-2",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To use the library, we recommend you update Rust to latest stable version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,r.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download or clone the ",(0,r.kt)("inlineCode",{parentName:"li"},"iota.rs")," repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/iota.rs.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A valid C compiler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")," installation on your path"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gradle.org/install/"},"Gradle")," v4 or higher or ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven")," installed")),(0,r.kt)("h2",{id:"preparing-your-work-environment"},"Preparing your work environment"),(0,r.kt)("p",null,"In order to build with the Java bindings, you need the following two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Java classes containing ",(0,r.kt)("inlineCode",{parentName:"li"},"native")," methods which call C code. (",(0,r.kt)("inlineCode",{parentName:"li"},".jar"),")"),(0,r.kt)("li",{parentName:"ol"},"JNI bindings linking ",(0,r.kt)("inlineCode",{parentName:"li"},"Rust")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),", and then ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," to java ",(0,r.kt)("inlineCode",{parentName:"li"},"native")," methods (",(0,r.kt)("inlineCode",{parentName:"li"},".so")," , ",(0,r.kt)("inlineCode",{parentName:"li"},".dll")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".dylib")," depending on your system)")),(0,r.kt)("h1",{id:"step-1-linking-the-java-file-jar"},"Step 1: Linking the Java file (Jar)"),(0,r.kt)("h2",{id:"maven"},"Maven"),(0,r.kt)("h3",{id:"installing-the-jar-on-your-system"},"Installing the jar on your system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn install:install-file -Dfile=/path/to/iota.rs/bindings/java/native/build/libs/native.jar -DgroupId=org.iota.client -DartifactId=native -Dversion=1.0 -Dpackaging=jar \n")),(0,r.kt)("h3",{id:"adding-the-dependency-to-pom"},"Adding the dependency to POM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n    <groupId>org.iota.client</groupId>\n    <artifactId>native</artifactId>\n    <version>1.0<version>\n</dependency>\n")),(0,r.kt)("h2",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"With a pre-made jar"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Point to the JAR in ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," ",(0,r.kt)("inlineCode",{parentName:"li"},"dependencies")," section using ",(0,r.kt)("inlineCode",{parentName:"li"},'implementation files("native.jar")'))),(0,r.kt)("p",null,"Building the jar through gradle in ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs")," creates the jar at ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/native/build/libs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Directly pointing to the iota.rs project"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uncomment the lines in ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.gradle"),", then:"),(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.gradle")," to point to the ",(0,r.kt)("inlineCode",{parentName:"li"},"\\native")," project inside ",(0,r.kt)("inlineCode",{parentName:"li"},"iota.rs\\bindings\\java"),", so we can load the Java files"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"implementation project(':native')")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"dependencies")," section of your ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," (and comment  ",(0,r.kt)("inlineCode",{parentName:"li"},'implementation files("native.jar")')," if you have it)")),(0,r.kt)("h1",{id:"step-2-adding-the-native-library"},"Step 2: Adding the native library"),(0,r.kt)("p",null,"This file can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/target/release")," after building the bindings with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build --release")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java")," folder. We will call this file ",(0,r.kt)("inlineCode",{parentName:"p"},"iota_client")," for the purpose of this README."),(0,r.kt)("h2",{id:"generic"},"Generic"),(0,r.kt)("p",null,"Adding the folder to your PATH is the easiest way to ensure it is available."),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change to your home directory. ",(0,r.kt)("inlineCode",{parentName:"li"},"cd $HOME"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},".bashrc")," file."),(0,r.kt)("li",{parentName:"ol"},"Add the following line to the file: ",(0,r.kt)("inlineCode",{parentName:"li"},"export PATH=/path/to/iota_client:$PATH"),"."),(0,r.kt)("li",{parentName:"ol"},"Save the file and exit. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"source")," command to force Linux to reload the ",(0,r.kt)("inlineCode",{parentName:"li"},".bashrc"))),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Start Search, type in \u201cenv\u201d, and choose \u201cEdit the system environment variables\u201d"),(0,r.kt)("li",{parentName:"ol"},"Click the \u201cEnvironment Variables\u2026\u201d button."),(0,r.kt)("li",{parentName:"ol"},"Under the \u201cSystem Variables\u201d section (the lower half), find the row with \u201cPath\u201d in the first column, and click edit."),(0,r.kt)("li",{parentName:"ol"},"The \u201cEdit environment variable\u201d UI will appear. Click \u201cNew\u201d and type in the new path: ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/iota_client")),(0,r.kt)("li",{parentName:"ol"},"Dismiss all of the dialogs by choosing \u201cOK\u201d. Your changes are saved!")),(0,r.kt)("h3",{id:"osx"},"OSX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up Terminal."),(0,r.kt)("li",{parentName:"ol"},"Run the following command: sudo nano /etc/paths."),(0,r.kt)("li",{parentName:"ol"},"Enter your password, when prompted."),(0,r.kt)("li",{parentName:"ol"},"Go to the bottom of the file, and enter the path you wish to add."),(0,r.kt)("li",{parentName:"ol"},"Hit control-x to quit."),(0,r.kt)("li",{parentName:"ol"},"Enter \u201cY\u201d to save the modified buffer.")),(0,r.kt)("h2",{id:"maven-1"},"Maven"),(0,r.kt)("p",null,"We need to make sure the file is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"java.library.path")," before building or running.\nTo do this, we add/update the section below to our ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"${basedir}")," means we need to place the ",(0,r.kt)("inlineCode",{parentName:"p"},"iota_client")," file in the base of our repo. (Where your pom.xml is)\nAlternatively, you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"${basedir}")," with an absolute path to the file: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/iota_client")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"<build>\n    <plugin>\n        <artifactId>maven-surefire-plugin</artifactId>\n        <version>[VERSION]</version>\n        <configuration>\n            <argLine>-Djava.library.path=${basedir}</argLine>\n        </configuration>\n    </plugin>\n</build>\n")),(0,r.kt)("h2",{id:"gradle-1"},"Gradle"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," variable ",(0,r.kt)("inlineCode",{parentName:"p"},"iotaLibLocation")," to the location of ",(0,r.kt)("inlineCode",{parentName:"p"},"iota_client"),"."),(0,r.kt)("h1",{id:"step-3-building-your-app"},"Step 3. Building your app"),(0,r.kt)("h2",{id:"maven-2"},"Maven"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn compile")," to build."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},'mvn exec:java -Dexec.mainClass="org.example.ExampleApp"')," to run. (You can also add the mainclass to your pom using the ",(0,r.kt)("inlineCode",{parentName:"p"},"exec-maven-plugin")," plugin)"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn test")," to specifically run the test."),(0,r.kt)("h2",{id:"gradle-2"},"Gradle"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle build")," to build."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle run")," to run. (linking directly to the iota.rs for jar triggers a rebuild every time)"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle test")," to specifically run the test."),(0,r.kt)("h1",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"As the API is made to be as close as possible to the rust API, the most up to date documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"https://client-lib.docs.iota.org/docs/libraries/rust/getting_started"},"here"),", until a pure Java version is made."),(0,r.kt)("p",null,"YOu can also generate more up-to-date documentation by compiling it yourself. Instructions can be found ","[here]","](",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/dev/documentation#readme"},"https://github.com/iotaledger/iota.rs/tree/dev/documentation#readme"),") "),(0,r.kt)("p",null,"The java methods are made to almost 1:1 correspond to rust version. Difference beeing the naming convention (Rust beeing snake_case, java camelCase)"),(0,r.kt)("h1",{id:"initialisation"},"Initialisation"),(0,r.kt)("p",null,"This example fetches node information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'use iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n    let iota = Client::builder() // Crate a client instance builder\n        .with_node("https://api.lb-0.testnet.chrysalis2.com")\n        .unwrap()\n        .finish()\n        .await\n        .unwrap();\n\n    let info = iota.get_info().await.unwrap();\n    println!("Nodeinfo: {:?}", info);\n}\n')),(0,r.kt)("h1",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Due to the fact that we are linking through C from Rust, there are a couple of limiting factors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classic builder patterns return a ",(0,r.kt)("inlineCode",{parentName:"li"},"clone")," after each builder call since we can only pass back to C by reference in ",(0,r.kt)("inlineCode",{parentName:"li"},"Rust"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"Builder builder1 = new Builder();\nBuilder builder2 = builder1.setValue(true);\n\n// These are different instances, thus builder1 wont have the value set\nassertNotEquals(builder1, builder2);\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return n?i.createElement(h,l(l({ref:t},s),{},{components:n})):i.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);