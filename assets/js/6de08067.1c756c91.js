(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),i=(t(0),t(212)),a=t(293),c={title:"Extension Communication"},s={unversionedId:"advanced/flows/extension-communication",id:"advanced/flows/extension-communication",isDocsHomePage:!1,title:"Extension Communication",description:"<Mermaid",source:"@site/docs/advanced/flows/extension-communication.mdx",slug:"/advanced/flows/extension-communication",permalink:"/advanced/flows/extension-communication",editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/advanced/flows/extension-communication.mdx",version:"current",sidebar:"docs",previous:{title:"Connection",permalink:"/advanced/flows/connection"},next:{title:"Ledger",permalink:"/advanced/flows/ledger-extension"}},d=[],p={toc:d};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(a.a,{chart:"\n  sequenceDiagram\n  rect rgba(0, 0, 255, .2)\n    Note over dApp,Peer: Only for Extensions<br />Extensions have 200ms to respond\n    dApp->>Peer: Ping\n    Peer->>dApp: Pong\n  end\n  rect rgba(0, 0, 255, .2)\n    Note over dApp,Peer: dApp sends publicKey to Peer\n    dApp->>Peer: PairingRequest\n    Note over dApp,Peer: Peer stores the dApp publicKey <br/> Encrypts own publicKey with dApp publicKey <br/> Send back encrypted publicKey\n    Peer->>dApp: PairingResponse\n  end\n",mdxType:"Mermaid"}),Object(i.b)(a.a,{chart:"\n  sequenceDiagram\n  rect rgba(0, 0, 255, .2)\n    Note over dApp,Peer 1: Permission Request is a broadcast to all peers\n    dApp->>Peer 1: PermissionRequest (Broadcast)\n    dApp->>Peer 2: PermissionRequest (Broadcast)\n    Peer 1->>dApp: PermissionResponse\n  end\n  rect rgba(0, 0, 255, .2)\n    Note over dApp,Peer 1: Operation Request is targeted to one peer\n    dApp->>Peer 1: OperationRequest (specific to peer)\n    Peer 1->>dApp: OperationResponse\n  end\n",mdxType:"Mermaid"}))}u.isMDXComponent=!0},293:function(e,n,t){"use strict";var o=t(0),r=t.n(o),i=t(352),a=t.n(i);a.a.initialize({startOnLoad:!0});n.a=function(e){var n=e.chart;return Object(o.useEffect)((function(){a.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},n)}},356:function(e,n,t){var o={"./locale":287,"./locale.js":287};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=356}}]);