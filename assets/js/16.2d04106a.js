(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{261:function(T,v,_){"use strict";_.r(v);var t=_(0),l=Object(t.a)({},(function(){var T=this,v=T.$createElement,_=T._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":T.$parent.slotKey}},[_("div",{staticClass:"tip custom-block"},[_("p",[T._v("HTTP")])]),T._v(" "),_("h4",{attrs:{id:"http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[T._v("#")]),T._v(" HTTP")]),T._v(" "),_("blockquote",[_("p",[T._v("超文本传输协议，运行TCP之上，\nHTTP全称是HyperText Transfer Protocal，即超文本传输协议，从1990年开始就在WWW上广泛应用，是现今在WWW上应用最多的协议，HTTP是应用层协议，当你上网浏览网页的时候，浏览器和web服务器之间就会通过HTTP在Internet上进行数据的发送和接收。HTTP是一个基于请求/响应模式的、无状态的协议。即我们通常所说的Request/Response。")])]),T._v(" "),_("ul",[_("li",[T._v("特点")]),T._v(" "),_("li",[T._v("支持客户端/服务器模式")]),T._v(" "),_("li",[T._v("简单快速：")])]),T._v(" "),_("blockquote",[_("p",[T._v("客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快")])]),T._v(" "),_("ul",[_("li",[T._v("灵活：")])]),T._v(" "),_("blockquote",[_("p",[T._v("HTTP允许传输任意类型的数据对象，正在传输的类型由Content-Type加以标记")])]),T._v(" "),_("ul",[_("li",[T._v("无连接：")])]),T._v(" "),_("blockquote",[_("p",[T._v("无连接的含义是限制每次链接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开链接，采用这种方式可以节省时间")])]),T._v(" "),_("ul",[_("li",[T._v("无状态：")])]),T._v(" "),_("blockquote",[_("p",[T._v("HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能会导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就比较快")])]),T._v(" "),_("ul",[_("li",[T._v("工作原理")])]),T._v(" "),_("blockquote",[_("p",[T._v("HTTP是基于客户/服务器模式，且面向连接的。典型的HTTP事务处理有如下的过程：")])]),T._v(" "),_("ul",[_("li",[T._v("（1）客户与服务器建立连接；")]),T._v(" "),_("li",[T._v("（2）客户向服务器提出请求；")]),T._v(" "),_("li",[T._v("（3）服务器接受请求，并根据请求返回相应的文件作为应答；")]),T._v(" "),_("li",[T._v("（4）客户与服务器关闭连接。")])]),T._v(" "),_("h4",{attrs:{id:"get-和-post区别？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post区别？","aria-hidden":"true"}},[T._v("#")]),T._v(" get 和 post区别？")]),T._v(" "),_("ul",[_("li",[T._v("get请求:\n"),_("ul",[_("li",[T._v("将请求参数追加在url后面，不安全")]),T._v(" "),_("li",[T._v("url长度限制get请求方式数据的大小")]),T._v(" "),_("li",[T._v("没有请求体")])])]),T._v(" "),_("li",[T._v("post请求：\n"),_("ul",[_("li",[T._v("请求参数在请求体处，较安全。")]),T._v(" "),_("li",[T._v("请求数据大小没有限制")]),T._v(" "),_("li",[T._v("只有表单设置为method=“post”才是post请求，其他都是get请求")])])])]),T._v(" "),_("h4",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https","aria-hidden":"true"}},[T._v("#")]),T._v(" HTTPS")]),T._v(" "),_("blockquote",[_("p",[T._v("HTTPS基础知识：HTTPS (Secure Hypertext Transfer Protocol)安全超文本传输协议，是一个安全通信通道，\n它基于HTTP开发用于在客户计算机和服务器之间交换信息。它使用安全套接字层(SSL)进行信息交换，\n简单来说它是HTTP的安全版,是使用TLS/SSL加密的HTTP协议。   \nHTTP协议采用明文传输信息，存在信息窃听、信息篡改和信息劫持的风险，而协议TLS/SSL具有身份验证、信息加密和完整性校验的功能，\n可以避免此类问题发生.")])]),T._v(" "),_("ul",[_("li",[_("p",[T._v("HTTPS主要作用是：")]),T._v(" "),_("ul",[_("li",[T._v("（1）对数据进行加密，并建立一个信息安全通道，来保证传输过程中的数据安全;")]),T._v(" "),_("li",[T._v("（2）对网站服务器进行真实身份认证。")])])]),T._v(" "),_("li",[_("p",[T._v("HTTPS和HTTP的区别")]),T._v(" "),_("ul",[_("li",[T._v("安全性考虑：\n"),_("img",{attrs:{src:"/img/HTTP.png",alt:""}}),T._v(" "),_("img",{attrs:{src:"/img/HTTPS.png",alt:""}}),T._v(" "),_("ul",[_("li",[T._v("1、HTTPS是加密传输协议，HTTP是名文传输协议;")]),T._v(" "),_("li",[T._v("2、HTTPS需要用到SSL证书，而HTTP不用;")]),T._v(" "),_("li",[T._v("3、HTTPS比HTTP更加安全，对搜索引擎更友好，利于SEO【参考：（1）为保护用户隐私安全,谷歌优先索引HTTPS网页、（2）百度开放收录https站点，https全网化势不可挡】;")]),T._v(" "),_("li",[T._v("4、 HTTPS标准端口443，HTTP标准端口80;")]),T._v(" "),_("li",[T._v("5、 HTTPS基于传输层，HTTP基于应用层;")]),T._v(" "),_("li",[T._v("6、 HTTPS在浏览器显示绿色安全锁，HTTP没有显示;")])])]),T._v(" "),_("li",[T._v("成本考虑：\n"),_("ul",[_("li",[T._v("1、SSL证书需要购买申请，功能越强大的证书费用越高")]),T._v(" "),_("li",[T._v("2、SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗（SSL有扩展可以部分解决这个问题，但是比较麻烦，而且要求浏览器、操作系统支持，Windows XP就不支持这个扩展，考虑到XP的装机量，这个特性几乎没用）。")]),T._v(" "),_("li",[T._v("3、根据ACM CoNEXT数据显示，使用HTTPS协议会使页面的加载时间延长近50%，增加10%到20%的耗电。")]),T._v(" "),_("li",[T._v("4、HTTPS连接缓存不如HTTP高效，流量成本高。")]),T._v(" "),_("li",[T._v("5、HTTPS连接服务器端资源占用高很多，支持访客多的网站需要投入更大的成本。")]),T._v(" "),_("li",[T._v("6、HTTPS协议握手阶段比较费时，对网站的响应速度有影响，影响用户体验。比较好的方式是采用分而治之，类似12306网站的主页使用HTTP协议，有关于用户信息等方面使用HTTPS。")])])])])])]),T._v(" "),_("blockquote",[_("p",[T._v("总的来说HTTPS比HTTP更加安全，能够有效的保护网站用户的隐私信息安全，这也是为什么现在的HTTPS网站越来越多。如果不想你的网站因为数据泄露上头条的话，就赶快去申请一张SSL证书为自己的网站实现HTTPS加密吧!")])])])}),[],!1,null,null,null);v.default=l.exports}}]);