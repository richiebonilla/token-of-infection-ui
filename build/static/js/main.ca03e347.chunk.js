(window.webpackJsonpzombie=window.webpackJsonpzombie||[]).push([[0],{135:function(e,t,a){e.exports=a(340)},140:function(e,t,a){},154:function(e,t){},176:function(e,t){},178:function(e,t){},246:function(e,t){},293:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=293},335:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n,s=a(0),o=a.n(s),i=a(134),u=a.n(i),r=(a(140),a(18)),p=a.n(r),c=a(36),l=a(13),m=a(14),d=a(16),y=a(15),b=a(17),f=a(142),h=new((n="undefined"!==typeof window.web3?new f(window.web3.currentProvider):new f(new f.providers.HttpProvider("https://rinkeby.infura.io/JnSpp0aGRIKmiCScdtOQ"))).eth.Contract)([{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x01ffc9a7"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0x06fdde03"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x081812fc"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x095ea7b3"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x18160ddd"},{constant:!0,inputs:[],name:"specialAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x21f3dd65"},{constant:!0,inputs:[],name:"humanCounter",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x26c36375"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"glarbs",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function",signature:"0x28a94995"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x2f745c59"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x3f4ba83a"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isPauser",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x46fbf68e"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x4f6ccce7"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x5c975abb"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x6352211e"},{constant:!1,inputs:[],name:"renouncePauser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x6ef8d66d"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x70a08231"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x715018a6"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addPauser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x82dc1ec4"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x8456cb59"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8da5cb5b"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8f32d59b"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0x95d89b41"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x983b2d56"},{constant:!1,inputs:[],name:"renounceMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x98650275"},{constant:!0,inputs:[],name:"zombieCounter",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x9c4ba790"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xa22cb465"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isMinter",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xaa271e1a"},{constant:!0,inputs:[],name:"proxyRegistryAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0xcd7c0326"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xf2fde38b"},{inputs:[{name:"tokenName",type:"string"},{name:"tokenSymbol",type:"string"},{name:"proxyRegistry",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event",signature:"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterAdded",type:"event",signature:"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterRemoved",type:"event",signature:"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event",signature:"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event",signature:"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"PauserAdded",type:"event",signature:"0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"PauserRemoved",type:"event",signature:"0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event",signature:"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event",signature:"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event",signature:"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"glarbType",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x40c10f19"},{constant:!1,inputs:[],name:"purchase",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0x64edfbf0"},{constant:!1,inputs:[{name:"to",type:"address"}],name:"purchaseFor",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0xf6e4641f"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"setSpecialAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xff67370c"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x23b872dd"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x42842e0e"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xb88d4fde"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0xc87b56dd"},{constant:!1,inputs:[{name:"proxyRegistry",type:"address"}],name:"setProxyRegistryAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xd26ea6c0"},{constant:!0,inputs:[{name:"tokenOwner",type:"address"},{name:"tokenOperator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xe985e9c5"}],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mainnet";return"rinkeby"==e?"0x0D02F7F4f13ba3C7a9d11762b564642ADD824dbA":""}("rinkeby")),g={web3:n,humanCount:function(){var e=Object(c.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.methods.humanCounter().call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),zombieCount:function(){var e=Object(c.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.methods.zombieCounter().call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},v=(a(335),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={percent:a.calculatePercent(a.props.count,a.props.total)},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"calculatePercent",value:function(e,t){return Math.round(e/t*100)}},{key:"componentWillReceiveProps",value:function(e){this.setState({percent:this.calculatePercent(e.count,e.total)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"team-score"},o.a.createElement("h1",{style:{marginTop:0,marginBottom:0}},this.props.count),o.a.createElement("h3",{className:"zombies"===this.props.name?"zombieColor":"humanColor",style:{marginTop:0,marginBottom:"44px",fontWeight:400}},this.props.name),o.a.createElement("h3",{style:{marginTop:0,marginBottom:0,fontWeight:400}},this.state.percent,"%"))}}]),t}(s.Component)),x=(a(336),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"calculateBoxesFromCounts",value:function(e,t){var a=e+t;return{percentZombies:Math.round(e/a*100),percentHumans:Math.round(t/a*100)}}},{key:"render",value:function(){for(var e=this.calculateBoxesFromCounts(this.props.zombies,this.props.humans),t=e.percentZombies,a=e.percentHumans,n=[],s=0;s<t;s++)n.push(o.a.createElement("div",{key:s,className:"zombie-pixel"}));for(var i=[],u=0;u<a;u++)i.push(o.a.createElement("div",{key:u,className:"human-pixel"}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"32px"}},o.a.createElement("div",null,i.map(function(e){return e}),n.map(function(e){return e}))))}}]),t}(s.Component)),w=(a(337),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={messages:[{id:8,author:"John Appleseed",team:"zombie",message:"hello world",time:"2019-09-06 23:53:46"}]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=["\ud83d\udc69","\ud83d\udc69\ud83c\udffb","\ud83d\udc69\ud83c\udffc","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc68","\ud83d\udc68\ud83c\udffb","\ud83d\udc68\ud83c\udffc","\ud83d\udc68\ud83c\udffd","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff"];return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement("div",{className:"message-board body"},o.a.createElement("div",null,o.a.createElement("h3",{style:{marginBottom:"12px",marginLeft:"12px"}},"Message Board"),o.a.createElement("button",null,"post")),o.a.createElement("div",{className:"messages-container"},o.a.createElement("div",{className:"comment-box"},o.a.createElement("form",{type:"POST"},o.a.createElement("texarea",{placeholder:"Add your message..."}),o.a.createElement("input",{type:"submit"}))),this.state.messages.map(function(t){return o.a.createElement("div",{key:t.id,className:"message",style:{display:"flex"}},o.a.createElement("div",{style:{fontSize:"32px",paddingRight:"12px"}},"zombie"===t.team?"\ud83e\udddf":e[Math.floor(Math.random()*e.length)]),o.a.createElement("div",null,o.a.createElement("div",{className:"message__body caption"},t.message),o.a.createElement("div",{className:"message__caption"},o.a.createElement("div",{className:"message__author caption disabled"},t.author," at ",t.time))))}))))}}]),t}(s.Component)),E=(a(338),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{margin:"auto",maxWidth:"576px"}},o.a.createElement("h3",null,"About"),o.a.createElement("p",{class:"body white"},"On one gloomy day, there was a dumb male that made a mad scientist mad. For retribution she released a dangerous replicating virus into the NFT ecosystem, targeting the boy. The virus however quickly started to spin out of control. Wallet holders everywhere were faced with generative spam, and a full on zombie take-over."),o.a.createElement("br",null),o.a.createElement("h3",null,"How to Play"),o.a.createElement("ol",{class:"body white"},o.a.createElement("li",null,"It\u2019s humans versus zombies. If you have a human in your wallet, you\u2019re a human. If you have a zombie in your wallet, you\u2019re a zombie."),o.a.createElement("li",null,"The zombies\u2019 goal is to infect every human and turn them all into zombies. The humans\u2019 goal is to eliminate the zombies and stop the virus."),o.a.createElement("li",null,"Zombies infect every human they encounter in a wallet. To infect a human, transfer a zombie to a human wallet."),o.a.createElement("li",null,"Humans aren\u2019t powerless against a zombie. If a human sends an antidote grenade to a wallet with a zombie, the zombie goes back to being a human."),o.a.createElement("li",null,"When humans and zombies are transferred from wallet to wallet, they multiply. One copy stays in the original wallet. The other copy goes to infect the new wallet."," "),o.a.createElement("li",null,"Sometimes two humans or two zombies in the same wallet will like each other so much, a new human or new zombie will be born in that wallet."),o.a.createElement("li",null,"Token of Infection is a game played purely through transferring NFTs from wallet to wallet. To join the game, you\u2019ll need a human or a zombie to send a human or zombie into your wallet.")),o.a.createElement("p",{class:"body white"},"All is fair in love and war. Especially during an apocalypse.",o.a.createElement("br",null),o.a.createElement("br",null),"Good luck, ",o.a.createElement("br",null),"A mad, mad scientist"))}}]),t}(s.Component)),M=(a(339),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={team:"zombie",humanCount:0,zombieCount:0},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateCounts()}},{key:"updateCounts",value:function(){var e=Object(c.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.humanCount();case 2:return t=e.sent,e.next=5,g.zombieCount();case 5:a=e.sent,this.setState({humanCount:t,zombieCount:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",height:"100%"}},o.a.createElement("div",{style:{flexGrow:1}},o.a.createElement("h2",{className:"human"===this.state.team?"humanColor":"zombieColor",style:{fontWeight:400,marginTop:"66px",marginBottom:"56px",textAlign:"center"}},"You are a ",this.state.team),o.a.createElement("div",{className:"scoreboard"},o.a.createElement("div",{className:"scoreboard-inner"},o.a.createElement("div",null,o.a.createElement(v,{name:"humans",count:this.state.humanCount,total:parseInt(this.state.zombieCount,10)+parseInt(this.state.humanCount,10)})),o.a.createElement("div",null,o.a.createElement(v,{name:"zombies",count:this.state.zombieCount,total:parseInt(this.state.zombieCount,10)+parseInt(this.state.humanCount,10)})))),o.a.createElement(x,{zombies:this.state.zombieCount,humans:this.state.humanCount}),o.a.createElement(E,null)),o.a.createElement("div",{style:{height:"100%",maxWidth:"360px",paddingLeft:"32px",paddingRight:"32px",borderLeft:"solid 1px rgba(255,255,255,0.2)",overflowY:"scroll"}},o.a.createElement(w,null)))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,1,2]]]);
//# sourceMappingURL=main.ca03e347.chunk.js.map