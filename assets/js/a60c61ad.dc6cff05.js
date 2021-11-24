(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return i})),o.d(n,"metadata",(function(){return d})),o.d(n,"toc",(function(){return s})),o.d(n,"default",(function(){return u}));var a=o(3),t=o(7),r=(o(0),o(212)),c=o(293),i={title:"Local Mnemonic"},d={unversionedId:"advanced/flows/local-mnemonic",id:"advanced/flows/local-mnemonic",isDocsHomePage:!1,title:"Local Mnemonic",description:"Init",source:"@site/docs/advanced/flows/local-mnemonic.mdx",slug:"/advanced/flows/local-mnemonic",permalink:"/advanced/flows/local-mnemonic",editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/advanced/flows/local-mnemonic.mdx",version:"current",sidebar:"docs",previous:{title:"Ledger",permalink:"/advanced/flows/ledger-extension"},next:{title:"P2P Direct",permalink:"/advanced/flows/p2p-direct"}},s=[{value:"Init",id:"init",children:[]},{value:"Permission Request",id:"permission-request",children:[]},{value:"Operation Request",id:"operation-request",children:[]},{value:"Signing Request",id:"signing-request",children:[]},{value:"Broadcast Request",id:"broadcast-request",children:[]}],p={toc:s};function u(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"init"},"Init"),Object(r.b)(c.a,{chart:"\nsequenceDiagram\n    Popup->>Popup: User Prompt (Add/Generate Mnemonic?)\n    Popup->>Background: Save Mnemonic\n    alt generate\n        Popup->>Background: New / Save mnemonic\n        Background->>Background: Generate new Mnemonic\n    end\n    Background->>Popup: Return Mnemonic\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"permission-request"},"Permission Request"),Object(r.b)(c.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Popup: Permission Request\n    Popup->>Popup: User confirmation\n    Popup->>Background: Permission Response\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"operation-request"},"Operation Request"),Object(r.b)(c.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Background: Fetch operation data\n    opt no threshold\n        Note left of Background: Everything except<br/>simple spend has<br/>to be approved\n        Background->>Popup: Operation Request\n        Popup->>Popup: User confirmation\n        Popup->>Background: Operation Response\n    end\n    Background->>Background: Forge Operation\n    Background->>Background: Sign Operation\n    Background->>Background: Broadcast\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("h2",{id:"signing-request"},"Signing Request"),Object(r.b)(c.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    opt no threshold\n        Note left of Background: Everything except<br/>simple spend has<br/>to be approved\n        Background->>Popup: Signing Request\n        Popup->>Popup: User confirmation\n        Popup->>Background: Signing Response\n    end\n    Background->>Background: Sign Operation\n    Background->>dApp: Response\n",mdxType:"Mermaid"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Thresholds could be abused to sign contract calls. Wallets must reject request with parameters."))),Object(r.b)("h2",{id:"broadcast-request"},"Broadcast Request"),Object(r.b)(c.a,{chart:"\nsequenceDiagram\n    dApp->>Background: Request\n    Background->>Popup: Broascast Request\n    Popup->>Popup: User confirmation\n    Popup->>Background: Broascast Response\n    Background->>Background: Broadcast\n    Background->>dApp: Response\n",mdxType:"Mermaid"}))}u.isMDXComponent=!0},293:function(e,n,o){"use strict";var a=o(0),t=o.n(a),r=o(352),c=o.n(r);c.a.initialize({startOnLoad:!0});n.a=function(e){var n=e.chart;return Object(a.useEffect)((function(){c.a.contentLoaded()}),[]),t.a.createElement("div",{className:"mermaid"},n)}},356:function(e,n,o){var a={"./locale":287,"./locale.js":287};function t(e){var n=r(e);return o(n)}function r(e){if(!o.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=r,e.exports=t,t.id=356}}]);