(window.webpackJsonpzombie=window.webpackJsonpzombie||[]).push([[0],{145:function(e,t,n){e.exports=n(367)},150:function(e,t,n){},164:function(e,t){},186:function(e,t){},188:function(e,t){},256:function(e,t){},303:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=303},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var a,s,o=n(0),i=n.n(o),u=n(144),r=n.n(u),p=(n(150),n(19)),m=n.n(p),l=n(37),c=n(12),y=n(13),d=n(15),b=n(14),h=n(16),f=n(152);a="undefined"!==typeof window.web3?new f(window.web3.currentProvider):new f(new f.providers.HttpProvider("https://rinkeby.infura.io/JnSpp0aGRIKmiCScdtOQ")),s=new a.eth.Contract([{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"specialAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isPauser",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenOfInfectionAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renouncePauser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addPauser",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"zombieCounter",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isMinter",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"walletGlarbs",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"proxyRegistryAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"antidoteAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"tokenName",type:"string"},{name:"tokenSymbol",type:"string"},{name:"_proxyRegistryAddress",type:"address"},{name:"_antidoteAddress",type:"address"},{name:"_tokenOfInfectionAddress",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"},{indexed:!1,name:"_tokenId",type:"uint256"}],name:"NewZombie",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"},{indexed:!1,name:"_tokenId",type:"uint256"}],name:"NewHuman",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_addr",type:"address"},{indexed:!1,name:"_tokenId",type:"uint256"}],name:"LoveInTheAir",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_from",type:"address"},{indexed:!1,name:"_to",type:"address"}],name:"TurnedZombie",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_from",type:"address"},{indexed:!1,name:"_to",type:"address"}],name:"CuredHuman",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"PauserAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"PauserRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{constant:!1,inputs:[{name:"antidote",type:"address"}],name:"setAntidoteAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"tokenOfInfection",type:"address"}],name:"setTokenOfInfectionAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"glarbType",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"glarbs",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"humanCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"zombieCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"setSpecialAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"_checkHasAntidote",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"}],name:"handleAntidote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"proxyRegistry",type:"address"}],name:"setProxyRegistryAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"tokenOwner",type:"address"},{name:"tokenOperator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mainnet";return"rinkeby"===e?"0x696Ba64bD47Db0e51323aEf20803903be7a71F3a":""}("rinkeby"));var v={web3:a,humanCount:function(){var e=Object(l.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.methods.humanCount().call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),zombieCount:function(){var e=Object(l.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.methods.zombieCount().call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},w=(n(345),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={percent:n.calculatePercent(n.props.count,n.props.total)},n}return Object(h.a)(t,e),Object(y.a)(t,[{key:"calculatePercent",value:function(e,t){return Math.round(e/t*100)}},{key:"componentWillReceiveProps",value:function(e){this.setState({percent:this.calculatePercent(e.count,e.total)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"team-score"},i.a.createElement("h1",{style:{marginTop:0,marginBottom:0}},this.props.count),i.a.createElement("h3",{className:"zombies"===this.props.name?"zombieColor":"humanColor",style:{marginTop:0,marginBottom:"44px",fontWeight:400}},this.props.name),i.a.createElement("h3",{style:{marginTop:0,marginBottom:0,fontWeight:400}},this.state.percent,"%"))}}]),t}(o.Component)),g=(n(346),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(y.a)(t,[{key:"calculateBoxesFromCounts",value:function(e,t){var n=e+t;return{percentZombies:Math.round(e/n*100),percentHumans:Math.round(t/n*100)}}},{key:"render",value:function(){for(var e=this.calculateBoxesFromCounts(this.props.zombies,this.props.humans),t=e.percentZombies,n=e.percentHumans,a=[],s=0;s<t;s++)a.push(i.a.createElement("div",{key:s,className:"zombie-pixel"}));for(var o=[],u=0;u<n;u++)o.push(i.a.createElement("div",{key:u,className:"human-pixel"}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"32px"}},i.a.createElement("div",null,o.map(function(e){return e}),a.map(function(e){return e}))))}}]),t}(o.Component)),x=(n(347),n(348),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=["\ud83d\udc69","\ud83d\udc69\ud83c\udffb","\ud83d\udc69\ud83c\udffc","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc68","\ud83d\udc68\ud83c\udffb","\ud83d\udc68\ud83c\udffc","\ud83d\udc68\ud83c\udffd","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff"];return i.a.createElement("div",{className:"messages-container"},this.props.messages.map(function(t){return i.a.createElement("div",{key:t._id,className:"message",style:{display:"flex"}},i.a.createElement("div",{style:{fontSize:"32px",paddingRight:"12px"}},"zombie"===t.team?"\ud83e\udddf":e[Math.floor(Math.random()*e.length)]),i.a.createElement("div",null,i.a.createElement("div",{className:"message__body caption"},t.message),i.a.createElement("div",{className:"message__caption"},i.a.createElement("div",{className:"message__author caption disabled"},t.author," at ",t.time))))}))}}]),t}(o.Component)),M=n(70),E=n.n(M),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={account:{},message:"",messages:[]},n.handleChange=function(e){n.setState({message:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.message;t.length<1||E.a.post("/api/newMessage/",{message:t}).then(function(e){console.log(e),n.setState({message:"",messages:e.data.reverse()})}).catch(function(e){return console.log(new Error(e))})},n.updateMessageBoard=function(){E.a.get("/api/getMessages/").then(function(e){n.setState({messages:e.data.reverse()})})},n}return Object(h.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.updateMessageBoard()}},{key:"render",value:function(){return i.a.createElement("div",{className:"message-board body"},i.a.createElement("div",null,i.a.createElement("h3",{style:{textAlign:"center",marginBottom:"12px",marginLeft:"12px"}},"Troll Box")),i.a.createElement("div",{className:"comment-box"},i.a.createElement("form",{type:"POST",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.message,placeholder:"Add your message..."}),i.a.createElement("button",{type:"submit"},"POST"))),i.a.createElement(x,{messages:this.state.messages}))}}]),t}(o.Component),k=(n(365),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{margin:"auto",maxWidth:"576px"}},i.a.createElement("h3",null,"About"),i.a.createElement("p",{className:"body white"},"On one gloomy day, there was a dumb male that made a mad scientist mad. For retribution she released a dangerous replicating virus into the NFT ecosystem, targeting the boy. The virus however quickly started to spin out of control. Wallet holders everywhere were faced with generative spam, and a full on zombie take-over."),i.a.createElement("br",null),i.a.createElement("h3",null,"How to Play"),i.a.createElement("ol",{className:"body white"},i.a.createElement("li",null,"It\u2019s humans versus zombies. If you have a human in your wallet, you\u2019re a human. If you have a zombie in your wallet, you\u2019re a zombie."),i.a.createElement("li",null,"The zombies\u2019 goal is to infect every human and turn them all into zombies. The humans\u2019 goal is to eliminate the zombies and stop the virus."),i.a.createElement("li",null,"Zombies infect every human they encounter in a wallet. To infect a human, transfer a zombie to a human wallet."),i.a.createElement("li",null,"Humans aren\u2019t powerless against a zombie. If a human sends an antidote grenade to a wallet with a zombie, the zombie goes back to being a human."),i.a.createElement("li",null,"When humans and zombies are transferred from wallet to wallet, they multiply. One copy stays in the original wallet. The other copy goes to infect the new wallet."," "),i.a.createElement("li",null,"Sometimes two humans or two zombies in the same wallet will like each other so much, a new human or new zombie will be born in that wallet."),i.a.createElement("li",null,"Token of Infection is a game played purely through transferring NFTs from wallet to wallet. To join the game, you\u2019ll need a human or a zombie to send a human or zombie into your wallet.")),i.a.createElement("p",{className:"body white"},"All is fair in love and war. Especially during an apocalypse.",i.a.createElement("br",null),i.a.createElement("br",null),"Good luck, ",i.a.createElement("br",null),"A mad, mad scientist"))}}]),t}(o.Component)),C=(n(366),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={team:"zombie",humanCount:0,zombieCount:0},n}return Object(h.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.updateCounts()}},{key:"updateCounts",value:function(){var e=Object(l.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.humanCount();case 2:return t=e.sent,e.next=5,v.zombieCount();case 5:n=e.sent,this.setState({humanCount:parseInt(t,10),zombieCount:parseInt(n,10)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"app-wrapper"},i.a.createElement("div",{className:"scrollable",style:{flexGrow:1}},i.a.createElement("h2",{className:this.state.humanCount>this.state.zombieCount?"humanColor":"zombieColor",style:{fontWeight:400,marginTop:"66px",textAlign:"center"}},this.state.humanCount>this.state.zombieCount?"The humans are winning!":"The zombies are winning!"),i.a.createElement("h3",{class:"secondary",style:{marginBottom:"56px",textAlign:"center",marginTop:0}},"You are a","zombie"===this.state.team?i.a.createElement("span",{className:"zombieColor"}," ",this.state.team):i.a.createElement("span",{className:"humanColor"}," ",this.state.team)),i.a.createElement("div",{className:"scoreboard"},i.a.createElement("div",{className:"scoreboard-inner"},i.a.createElement(w,{name:"humans",count:this.state.humanCount,total:this.state.zombieCount+this.state.humanCount}),i.a.createElement(w,{name:"zombies",count:this.state.zombieCount,total:this.state.zombieCount+this.state.humanCount}))),i.a.createElement(g,{zombies:this.state.zombieCount,humans:this.state.humanCount}),i.a.createElement(k,null)),i.a.createElement("div",{className:"messageboard-container scrollable"},i.a.createElement(O,null)))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);
//# sourceMappingURL=main.e8bf0eff.chunk.js.map