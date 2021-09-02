(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{83:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(63),i=n.n(r),s=(n(83),n(5)),o=n(14),l=n(12),d=n(72),u=n(105),j=n(107),b=n(104),p=n(71),h=n(10);function O(e,t){return 1===t?e:e+"s"}function m(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var f=n(73),x=n(33),g="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",N="UPDATE_CART_QUANTITY",_="TOGGLE_CART",k="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",T=function(e,t){switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{products:Object(x.a)(t.products)});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case y:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case N:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case k:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(x.a)(t.categories)});case C:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var S=n(1),E=["value"],R=Object(c.createContext)(),A=R.Provider,$=function(e){e.value;var t,n=Object(f.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(T,t)),r=Object(h.a)(a,2),i=r[0],o=r[1];return Object(S.jsx)(A,Object(s.a)({value:[i,o]},n))},D=function(){return Object(c.useContext)(R)};var I,P,Q,F,U,L=function(e){var t=D(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,l=e._id,d=e.price,u=e.quantity,j=c.cart;return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(S.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(S.jsx)("p",{children:i})]}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[u," ",O("item",u)," in stock"]}),Object(S.jsxs)("span",{children:["$",d]})]}),Object(S.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:N,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=n(99),W=n(27),B=n(106),H=Object(B.a)(I||(I=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(B.a)(P||(P=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(B.a)(Q||(Q=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(B.a)(F||(F=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),G=Object(B.a)(U||(U=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=n.p+"static/media/spinner.689d9a07.gif";var z=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(q.a)(H),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):s||m("products","get").then((function(e){a({type:g,products:e})}))}),[o,s,a]),Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(S.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(S.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(S.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(S.jsx)("img",{src:J,alt:"loading"}):null]})},V=n(19),K=n.n(V),X=n(31),Z=n(67),ee=n(100),te=function(e){var t=e.item,n=D(),c=Object(h.a)(n,2)[1];return Object(S.jsxs)("div",{className:"flex-row",children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[t.name,", $",t.price]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Qty:"}),Object(S.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:w,_id:t._id}),m("cart","delete",Object(s.a)({},t))):(c({type:N,_id:t._id,purchaseQuantity:parseInt(n)}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(S.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:w,_id:e._id}),m("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ne=n(68),ce=n(69),ae=n(56),re=n.n(ae),ie=new(function(){function e(){Object(ne.a)(this,e)}return Object(ce.a)(e,[{key:"getProfile",value:function(){return re()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return re()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),se=(n(93),Object(Z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),oe=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(ee.a)(Y),i=Object(h.a)(r,2),s=i[0],o=i[1].data;function l(){a({type:_})}return Object(c.useEffect)((function(){o&&se.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(X.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(S.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(S.jsxs)("div",{children:[n.cart.map((function(e){return Object(S.jsx)(te,{item:e},e._id)})),Object(S.jsxs)("div",{className:"flex-row space-between",children:[Object(S.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object(S.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(S.jsx)("span",{children:"(log in to check out)"})]})]}):Object(S.jsxs)("h3",{children:[Object(S.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(S.jsx)("div",{className:"cart-closed",onClick:l,children:Object(S.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},le=function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(z,{}),Object(S.jsx)(oe,{})]})};var de=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.f)().id,i=Object(c.useState)({}),d=Object(h.a)(i,2),u=d[0],j=d[1],b=Object(q.a)(H),p=b.loading,O=b.data,f=n.products,x=n.cart;return Object(c.useEffect)((function(){f.length?j(f.find((function(e){return e._id===r}))):O?(a({type:g,products:O.products}),O.products.forEach((function(e){m("products","put",e)}))):p||m("products","get").then((function(e){a({type:g,products:e})}))}),[f,O,p,a,r]),Object(S.jsxs)(S.Fragment,{children:[u&&x?Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(S.jsx)("h2",{children:u.name}),Object(S.jsx)("p",{children:u.description}),Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:"Price:"}),"$",u.price," ",Object(S.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:N,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(S.jsx)("button",{disabled:!x.find((function(e){return e._id===u._id})),onClick:function(){a({type:w,_id:u._id}),m("cart","delete",Object(s.a)({},u))},children:"Remove from Cart"})]}),Object(S.jsx)("img",{src:"/images/".concat(u.image),alt:u.name})]}):null,p?Object(S.jsx)("img",{src:J,alt:"loading"}):null,Object(S.jsx)(oe,{})]})};var ue,je,be,pe=function(e){var t=e.children;return Object(S.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},he=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(pe,{children:[Object(S.jsx)("h1",{children:"404 Page Not Found"}),Object(S.jsx)("h1",{children:Object(S.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},Oe=n(37),me=n(109),fe=Object(B.a)(ue||(ue=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),xe=Object(B.a)(je||(je=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ge=Object(B.a)(be||(be=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ve=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(me.a)(fe),l=Object(h.a)(i,2),d=l[0],u=l[1].error,j=function(){var e=Object(X.a)(K.a.mark((function e(t){var n,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,ie.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(Oe.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)("h2",{children:"Login"}),Object(S.jsxs)("form",{onSubmit:j,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email address "}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password "}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),u?Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]}),Object(S.jsx)("ul",{style:{listStyleType:"none"},children:Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/",children:"Return to Home"})})})]})};var ye=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(me.a)(ge),l=Object(h.a)(i,1)[0],d=function(){var e=Object(X.a)(K.a.mark((function e(t){var n,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,ie.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(Oe.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",style:{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"15%",paddingRight:"15%"},children:[Object(S.jsx)("h2",{style:{alignSelf:"center",paddingRight:"3%",paddingTop:"10%"},children:"Signup"}),Object(S.jsxs)("form",{onSubmit:d,style:{alignSelf:"center"},children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"firstName",children:"First Name "}),Object(S.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"lastName",children:"Last Name "}),Object(S.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email "}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password "}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"5%"},children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]}),Object(S.jsx)("ul",{style:{listStyleType:"none",alignSelf:"center",paddingRight:"5%",paddingTop:"10%"},children:Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/",children:"Return to Home "})})})]})};var we=function(){return Object(S.jsx)("header",{className:"flex-row px-1",children:Object(S.jsx)("nav",{children:ie.loggedIn()?Object(S.jsxs)("ul",{className:"flex-row",children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)("a",{href:"/",onClick:function(){return ie.logout()},children:"Logout"})})]}):Object(S.jsxs)("ul",{className:"signUp",style:{display:"flex",justifyContent:"right"},children:[Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(S.jsx)("li",{className:"mx-1",children:Object(S.jsx)(o.b,{to:"/login",children:"Login"})})]})})})};var Ne=function(){var e=Object(me.a)(xe),t=Object(h.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(X.a)(K.a.mark((function e(){var n,c,a,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(S.jsx)("div",{children:Object(S.jsxs)(pe,{children:[Object(S.jsx)("h1",{children:"Success!"}),Object(S.jsx)("h2",{children:"Thank you for your purchase!"}),Object(S.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var _e=function(){var e,t=Object(q.a)(G).data;return t&&(e=t.user),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(S.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(S.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(S.jsx)("p",{children:a})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})};n(94);var ke=function(){return Object(S.jsx)("div",{className:"dash",children:Object(S.jsx)("div",{className:"image-container",children:Object(S.jsx)("img",{height:"auto",width:"auto",src:"/images/the-food-index-logo.png"})})})};var Ce=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(q.a)(M),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:k,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):s||m("categories","get").then((function(e){a({type:k,categories:e})}))}),[o,s,a]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Restaurants"}),r.map((function(e){return Object(S.jsx)("button",{onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.image},e._id)}))]})},Te=function(){return Object(S.jsxs)("div",{className:"dashContainer",children:[Object(S.jsx)(ke,{}),Object(S.jsx)(Ce,{})]})},Se=Object(d.a)({uri:"/graphql"}),Ee=Object(p.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Re=new u.a({link:Ee.concat(Se),cache:new j.a});var Ae=function(){return Object(S.jsx)(b.a,{client:Re,children:Object(S.jsx)(o.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)($,{children:[Object(S.jsx)(we,{}),Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{exact:!0,path:"/",component:Te}),Object(S.jsx)(l.a,{exact:!0,path:"/home",component:le}),Object(S.jsx)(l.a,{exact:!0,path:"/login",component:ve}),Object(S.jsx)(l.a,{exact:!0,path:"/signup",component:ye}),Object(S.jsx)(l.a,{exact:!0,path:"/success",component:Ne}),Object(S.jsx)(l.a,{exact:!0,path:"/orderHistory",component:_e}),Object(S.jsx)(l.a,{exact:!0,path:"/products/:id",component:de}),Object(S.jsx)(l.a,{component:he})]})]})})})})},$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(Ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$e?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()}},[[95,1,2]]]);
//# sourceMappingURL=main.a053ed89.chunk.js.map