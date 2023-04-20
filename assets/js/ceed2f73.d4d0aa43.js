"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,k=c["".concat(l,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(k,d(d({ref:t},s),{},{components:n})):a.createElement(k,d({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,d[1]=o;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},d=void 0,o={unversionedId:"api/interfaces/ProductPurchase",id:"api/interfaces/ProductPurchase",title:"ProductPurchase",description:"react-native-iap / Exports / ProductPurchase",source:"@site/docs/api/interfaces/ProductPurchase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ProductPurchase",permalink:"/docs/api/interfaces/ProductPurchase",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/api/interfaces/ProductPurchase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProductIOS",permalink:"/docs/api/interfaces/ProductIOS"},next:{title:"PurchaseResult",permalink:"/docs/api/interfaces/PurchaseResult"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"autoRenewingAndroid",id:"autorenewingandroid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"dataAndroid",id:"dataandroid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"developerPayloadAndroid",id:"developerpayloadandroid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"isAcknowledgedAndroid",id:"isacknowledgedandroid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"isCanceledAmazon",id:"iscanceledamazon",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"obfuscatedAccountIdAndroid",id:"obfuscatedaccountidandroid",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"obfuscatedProfileIdAndroid",id:"obfuscatedprofileidandroid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"originalTransactionDateIOS",id:"originaltransactiondateios",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"originalTransactionIdentifierIOS",id:"originaltransactionidentifierios",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"packageNameAndroid",id:"packagenameandroid",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"productId",id:"productid",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"productIds",id:"productids",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"purchaseStateAndroid",id:"purchasestateandroid",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"purchaseToken",id:"purchasetoken",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"quantityIOS",id:"quantityios",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"signatureAndroid",id:"signatureandroid",level:3},{value:"Defined in",id:"defined-in-15",level:4},{value:"transactionDate",id:"transactiondate",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"transactionId",id:"transactionid",level:3},{value:"Defined in",id:"defined-in-17",level:4},{value:"transactionReceipt",id:"transactionreceipt",level:3},{value:"Defined in",id:"defined-in-18",level:4},{value:"userIdAmazon",id:"useridamazon",level:3},{value:"Defined in",id:"defined-in-19",level:4},{value:"userJsonAmazon",id:"userjsonamazon",level:3},{value:"Defined in",id:"defined-in-20",level:4},{value:"userMarketplaceAmazon",id:"usermarketplaceamazon",level:3},{value:"Defined in",id:"defined-in-21",level:4},{value:"verificationResultIOS",id:"verificationresultios",level:3},{value:"Defined in",id:"defined-in-22",level:4}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / ProductPurchase"),(0,i.kt)("h1",{id:"interface-productpurchase"},"Interface: ProductPurchase"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ProductPurchase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/SubscriptionPurchase"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscriptionPurchase"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#autorenewingandroid"},"autoRenewingAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#dataandroid"},"dataAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#developerpayloadandroid"},"developerPayloadAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#isacknowledgedandroid"},"isAcknowledgedAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#iscanceledamazon"},"isCanceledAmazon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#obfuscatedaccountidandroid"},"obfuscatedAccountIdAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#obfuscatedprofileidandroid"},"obfuscatedProfileIdAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#originaltransactiondateios"},"originalTransactionDateIOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#originaltransactionidentifierios"},"originalTransactionIdentifierIOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#packagenameandroid"},"packageNameAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#productid"},"productId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#productids"},"productIds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#purchasestateandroid"},"purchaseStateAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#purchasetoken"},"purchaseToken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#quantityios"},"quantityIOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#signatureandroid"},"signatureAndroid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#transactiondate"},"transactionDate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#transactionid"},"transactionId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#transactionreceipt"},"transactionReceipt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#useridamazon"},"userIdAmazon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#userjsonamazon"},"userJsonAmazon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#usermarketplaceamazon"},"userMarketplaceAmazon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ProductPurchase#verificationresultios"},"verificationResultIOS"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"autorenewingandroid"},"autoRenewingAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"autoRenewingAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L76"},"types/index.ts:76")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dataandroid"},"dataAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dataAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L74"},"types/index.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"developerpayloadandroid"},"developerPayloadAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"developerPayloadAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L80"},"types/index.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isacknowledgedandroid"},"isAcknowledgedAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"isAcknowledgedAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L78"},"types/index.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscanceledamazon"},"isCanceledAmazon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"isCanceledAmazon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L87"},"types/index.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"obfuscatedaccountidandroid"},"obfuscatedAccountIdAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"obfuscatedAccountIdAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L81"},"types/index.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"obfuscatedprofileidandroid"},"obfuscatedProfileIdAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"obfuscatedProfileIdAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L82"},"types/index.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"originaltransactiondateios"},"originalTransactionDateIOS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"originalTransactionDateIOS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L69"},"types/index.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"originaltransactionidentifierios"},"originalTransactionIdentifierIOS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"originalTransactionIdentifierIOS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L70"},"types/index.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"packagenameandroid"},"packageNameAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"packageNameAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L79"},"types/index.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"productid"},"productId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"productId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L62"},"types/index.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"productids"},"productIds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"productIds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L73"},"types/index.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"purchasestateandroid"},"purchaseStateAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"purchaseStateAndroid"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/enums/PurchaseStateAndroid"},(0,i.kt)("inlineCode",{parentName:"a"},"PurchaseStateAndroid"))),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L77"},"types/index.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"purchasetoken"},"purchaseToken"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"purchaseToken"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L66"},"types/index.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"quantityios"},"quantityIOS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"quantityIOS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L68"},"types/index.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signatureandroid"},"signatureAndroid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"signatureAndroid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L75"},"types/index.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactiondate"},"transactionDate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionDate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L64"},"types/index.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactionid"},"transactionId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"transactionId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L63"},"types/index.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactionreceipt"},"transactionReceipt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionReceipt"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L65"},"types/index.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useridamazon"},"userIdAmazon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"userIdAmazon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L84"},"types/index.ts:84")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userjsonamazon"},"userJsonAmazon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"userJsonAmazon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L86"},"types/index.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usermarketplaceamazon"},"userMarketplaceAmazon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"userMarketplaceAmazon"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L85"},"types/index.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verificationresultios"},"verificationResultIOS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verificationResultIOS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab-community/react-native-iap/blob/2d4fbf1/src/types/index.ts#L71"},"types/index.ts:71")))}u.isMDXComponent=!0}}]);