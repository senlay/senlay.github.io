(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{314:function(e,n,t){"use strict";t.r(n);var i=t(0),r=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),t("ul",[t("li",[e._v("redis是一个开源的key-value数据库。它又经常被认为是一个数据结构服务器。因为它的value不仅包括基本的string类型还有 list,set ,sorted set和hash类型。当然这些类型的元素也都是string类型。也就是说list,set这些集合类型也只能包含 string 类型。")]),e._v(" "),t("li",[e._v("你可以在这些类型上做很多原子性的操作。比如对一个字符value追加字符串（APPEND命令）。加加或者减减一个数字字符串(INCR命令，当 然是按整数处理的).可以对list类型进行push,或者pop元素操作（可以模拟栈和队列）。对于set类型可以进行一些集合相关操作")])]),e._v(" "),t("h4",{attrs:{id:"redis的适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis的适用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" redis的适用场景")]),e._v(" "),t("ul",[t("li",[e._v("数据缓存，快速访问")]),e._v(" "),t("li",[e._v("取最新N个数据的操作")]),e._v(" "),t("li",[e._v("排行榜应用，取top排名")]),e._v(" "),t("li",[e._v("需要精准设置过期时间的操作")]),e._v(" "),t("li",[e._v("计算器的操作")]),e._v(" "),t("li",[e._v("构建队列系统")]),e._v(" "),t("li",[e._v("unique操作")])]),e._v(" "),t("h4",{attrs:{id:"redis使用规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis使用规范","aria-hidden":"true"}},[e._v("#")]),e._v(" redis使用规范")]),e._v(" "),t("ul",[t("li",[e._v("redis数据类型选择")]),e._v(" "),t("li",[e._v("存储容量选择")]),e._v(" "),t("li",[e._v("key命名规范")])]),e._v(" "),t("h4",{attrs:{id:"redis-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-常用命令","aria-hidden":"true"}},[e._v("#")]),e._v(" redis 常用命令")]),e._v(" "),t("ul",[t("li",[e._v("set key 字符串")]),e._v(" "),t("li",[e._v("get key")])]),e._v(" "),t("h4",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ul",[t("li",[e._v("基于key值命名规范,尽量减少string类型的使用")]),e._v(" "),t("li",[e._v("在使用redis各类命令时,需关注相关命令的时间复杂度及注意事项")]),e._v(" "),t("li",[e._v("合理使用redis内置压缩机制")]),e._v(" "),t("li",[e._v("使用json数据格式存储对象详细信息")])]),e._v(" "),t("h4",{attrs:{id:"订单防重逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#订单防重逻辑","aria-hidden":"true"}},[e._v("#")]),e._v(" 订单防重逻辑")]),e._v(" "),t("ul",[t("li",[e._v("订单创建，首先检查该笔订单的缓存是否存在，如果检查不通过，直接返回\n"),t("ul",[t("li",[t("ol",[t("li",[e._v("根据订单号查询该笔订单的状态，如果订单号为空直接返回N")])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("创建防重标识key,根据该标识（业务场景）和订单号创建分布式防重锁，如果锁成功则返回null否则返回N")])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[e._v("如果查询到的订单状态不为空则该笔订单正在创建中，防重校验不通过直接返回")])])])])]),e._v(" "),t("li",[e._v("如果缓存检查通过，则生产订单号，生产失败则直接返回")]),e._v(" "),t("li",[e._v("如果缓存检查通过，则获取报文中传过来的订单，根据报文订单号去数据库查询订单，\n如果查询到，并且满足订单总状态校验通过，且回滚资源成功，且删除已存在订单成功则防重校验通过。")])]),e._v(" "),t("h4",{attrs:{id:"分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),t("ul",[t("li",[e._v("【什么情况下需要使用分布式锁：保证数据的最终一致性，有的时候，我们需要保证一个方法在同一时间内只能被同一个线程执行。】")])]),e._v(" "),t("h5",{attrs:{id:"基于数据库实现分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于数据库实现分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于数据库实现分布式锁")]),e._v(" "),t("ul",[t("li",[e._v("创建一张锁表，然后通过操作该表中的数据来实现。")]),e._v(" "),t("li",[e._v("当我们需要锁住否个方法或者资源时，就在表中新增一条数据，想要释放锁的时候就删除这条记录")]),e._v(" "),t("li",[e._v("创建这样一张数据库表\n> CREAT TABLE 'methodLock'(\n'id' int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',\n'method_name' varchar(64) NOT NULL DEFAULT '' COMMENT '锁定的方法名'\n'desc' varchar(1024) NOT NULL DEFAULT '备注信息'\n'update_time' timestamp NOT NULL CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '保存数据的时间，自动生成',\nRIMARY KEY('ID'),\nUNIQUE KEY 'uidx_method_name'('method_name')  USING BTREE\n) ENGINE = InnoDB DEFAULT CHAREST = utf-8 COMMENT = '锁定中的方法';\n"),t("ul",[t("li",[e._v("当我们想要锁住否个方法时：执行以下sql:\n"),t("ul",[t("li",[e._v("INSERT INTO methodLock(method_name, desc) values ('method_name', 'desc');\n因为我们队method_name做了唯一性约束，这里如果有多个请求同时提交到数据库的话，数据库可以保证只有一个操作可以成功，那么我们就可以\n认为操作成功的那个线程获得了该方法的锁，可以执行方法具体内容。\n当方法执行完毕想要释放锁的话，执行以下sql：")]),e._v(" "),t("li",[e._v("delete FROM methodLock where method_name = 'method_name';")])])]),e._v(" "),t("li",[e._v("缺点：\n"),t("ul",[t("li",[e._v("这把锁强依赖于数据库的可用性，数据库是一个单点，一旦数据库挂掉，会导致业务系统不可用。")]),e._v(" "),t("li",[e._v("这把锁没有失效时间，一但解锁操作失败，会导致锁记录一直在数据库中，其他线程无法获取到锁。")]),e._v(" "),t("li",[e._v("这把锁只能是非阻塞的，因为数据库的insert操作，一但插入失败就会直接报错。没有获得锁的线程并不会进入排队队列，想要再次获得锁就要再次出发获得锁的操作")]),e._v(" "),t("li",[e._v("这把锁是非重入的，同一线程在没有释放锁之前无法再次获得该锁。因为数据中数据已经存在了。\n【可重入锁：】\n【数据库的可用性：】\n【数据库是一个单点：】")])])])])])]),e._v(" "),t("h5",{attrs:{id:"基于缓存实现的分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于缓存实现的分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于缓存实现的分布式锁")]),e._v(" "),t("pre",[t("code",[e._v("- 相比较于基于数据库实现分布式锁的方案来说，基于缓存来实现在性能方面会更好一些。而且很多缓存是可以用集群来部署的，可以解决单点问题。\n- 目前有很多成熟的缓存产品，包括redis，memcacheed以及我们公司内部的Tair\n- 这里以Tair为例来分析下使用缓存来实现分布式锁的方案。\n- 基于Tair的实现分布式锁其实和Redis类似，其中主要的实现方式是使用TairManager.put方法来实现。\n\n ``` java\n    public boolean tryLock(String key){\n        ResultCode code = IdbTairMapper.put(NAMESPACE, KEY, 'this is a lock.', 2, 0);\n        if(ResultCode.success.equals(code)){\n            return true;\n        } else {\n            return false;\n        }\n    }\n    public boolean unLock(){\n        IdbTairMapper.invalid(NAMESPACE, key);\n    }\n ```\n - 缺点：\n    - 这把锁没有失效时间，一旦解锁操作失败，就会导致锁记录一直在tair中，其他线程无法再获得锁\n    - 这把锁只能是非阻塞的，无论是成功还是失败都直接返回\n    - 这把锁是非重入的，一个线程获得锁之后，在释放锁之前，无法再次获得该锁，因为使用到key在tair中已经存在，无法在执行put操作\n - 优点\n    - 可以使用缓存代替数据库实现分布式锁，这个可以提供更好的性能，同时，很多缓存服务都是集群部署的，可以避免单点问题，并且很多缓存服务\n        都提供了用来实现分布式锁的方法，比如Tair的put方法，redis的setnx方法等，并且这些缓存服务也提供了对数据过期自动删除的功能支持，\n        可以直接设置超时时间来控制锁的释放\n    - 使用缓存实现分布式锁的优点\n    - 性能好，实现起来较方便\n    - 使用缓存实现分布式锁的优点\n    - 通过超时时间来控制锁的失效时间并不是十分的靠谱。\n")])]),e._v(" "),t("h5",{attrs:{id:"我们代码中使用redis来实现分布式锁的：https-blog-csdn-net-weixin-39471249-article-details-79121291"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我们代码中使用redis来实现分布式锁的：https-blog-csdn-net-weixin-39471249-article-details-79121291","aria-hidden":"true"}},[e._v("#")]),e._v(" 我们代码中使用redis来实现分布式锁的：https://blog.csdn.net/weixin_39471249/article/details/79121291")]),e._v(" "),t("pre",[t("code",[e._v("- redis.setNx(final String key, final String value, final long seconds)\n    - 只在键 key 不存在的情况下， 将键 key 的值设置为 value 。\n\n      若键 key 已经存在， 则 SETNX 命令不做任何动作。\n\n      SETNX 是『SET if Not eXists』(如果不存在，则 SET)的简写。\n    - 返回值\n        命令在设置成功时返回 1 ， 设置失败时返回 0 。\n")])]),e._v(" "),t("h5",{attrs:{id:"基于zookeeper实现的分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于zookeeper实现的分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于Zookeeper实现的分布式锁")]),e._v(" "),t("pre",[t("code",[e._v("- 基于Zookeeper临时有序节点可以实现分布式锁。\n大致思想即为：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。判断是否获取锁的方式\n很简单，只需要判断有序节点中序号最小的一个。当释放锁的时候，只需要将这个瞬时几点删除即可。同时，其可以避免服务器宕机导致的锁无法释放，、\n而产生的死锁问题。\n来看下zookeeper能不能解决前面提到的问题：\n    - 锁无法释放？使用Zookeeper可以有效的解决锁无法释放的问题，因为在创建锁的时候，客户端会在ZK中创建一个临时节点，一旦客户端获取到锁\n        之后突然挂掉（Session连接断开），那么这个临时节点就会自动删除掉。其他客户端就可以再次获得锁。\n    - 非阻塞锁？使用Zookeeper可以实现阻塞的锁，客户端可以通过在ZK中创建顺序节点，并且在节点上绑定监听器，一旦节点有变化，Zookeeper\n        会通知客户端，客户端可以检查自己创建的节点是不是当前所有节点中序号最小的，如果是，那么自己就获取到锁，便可以执行业务逻辑了。\n    - 不可重入？使用Zookeeper也可以有效的解决不可重入的问题，客户端在创建节点的时候，把当前客户端的主机信息和线程信息直接写入到节\n        点中，下次想要获取锁的时候和当前最小的节点中的数据比对一下就可以了。如果和自己的信息一样，那么自己直接获取到锁，如果不一样就再\n        创建一个临时的顺序节点，参与排队。\n    - 单点问题？使用Zookeeper可以有效的解决单点问题，ZK是集群部署的，只要集群中有半数以上的机器存活，就可以对外提供服务。\n    - 可以直接使用zookeeper第三方库Curator客户端，这个客户端中封装了一个可重入的锁服务。\n")])]),e._v(" "),t("h4",{attrs:{id:"幂等的概念。不管调用多少次返回结果都是一样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幂等的概念。不管调用多少次返回结果都是一样的","aria-hidden":"true"}},[e._v("#")]),e._v(" 幂等的概念。不管调用多少次返回结果都是一样的")]),e._v(" "),t("ul",[t("li",[e._v("dubbo具备重试功能，当进行一次方法调用时，如果调用过程出现可重试的异常（如网络异常，调用方资源不足），并且允许重试（retryTimes>0），那么将发起重试。")]),e._v(" "),t("li",[e._v("dubbo在发起一次调用时，如果设置了retryTimes>0，那么可能会发起多次请求，在发起每次调用请求时，请求的timeout是总超时时间：(设置的retry次数+1)"),t("em",[e._v("设置的timeout，以避免每次请求都超时的情况。（比如单次请求实际要花费50ms，而timeout设置为40ms，重试次数设置为3次。如果单次请求timeout设置为40ms，那么虽然重试了多次，但是每次都超时，总调用时间花费了40ms×4，依然没有得到返回结果。如果单次请求的timeout设置为40ms")]),e._v("4，那么将会在第二次重试时，收到第一次请求的返回）\n对于非幂等的服务方法（不允许重复调用），dubbo在provider端有严格的防重复调用的机制。但是，请一定要注意，在服务配置时，应该合理的设置方法的幂等性，一定要避免业务上非幂等的方法被设置为幂等，并且允许重试的情况。")])]),e._v(" "),t("h4",{attrs:{id:"拆包合包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拆包合包","aria-hidden":"true"}},[e._v("#")]),e._v(" 拆包合包")]),e._v(" "),t("p",[e._v("所谓拆包合包的概念是指：门店收取A商品后，拆包成B商品进行售卖。或者B商品合包成A商品售卖。譬如：")]),e._v(" "),t("p",[e._v("订货的时候订购的是整箱矿泉水，售卖的时候是一瓶瓶卖，就需要拆包。")]),e._v(" "),t("p",[e._v("一些生鲜果蔬合成标准件进行售卖等等")]),e._v(" "),t("h4",{attrs:{id:"缓存击穿："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿：","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存击穿：")]),e._v(" "),t("p",[e._v("恶意请求不存在的key,并且请求量巨大，对后台造成很大的压力。")]),e._v(" "),t("blockquote",[t("p",[e._v("如何避免呢?\n对查询为空的情况也进行缓存，缓存时间设置短一点；对一定不存在的key进行过滤")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("缓存雪崩：\n当缓存服务器重启或者大量缓存在某个时间段失效，这个时候，会给后端服务器带来很大压力，甚至导致缓存雪崩。")])]),e._v(" "),t("li",[t("p",[e._v("1：在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。")])]),e._v(" "),t("li",[t("p",[e._v("2：做二级缓存，A1为原始缓存，A2为拷贝缓存，A1失效时，可以访问A2，A1缓存失效时间设置为短期，A2设置为长期")])]),e._v(" "),t("li",[t("p",[e._v("3：不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。")])])]),e._v(" "),t("h4",{attrs:{id:"redis-利用list实现队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-利用list实现队列","aria-hidden":"true"}},[e._v("#")]),e._v(" redis 利用list实现队列")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/redis_q.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("lpush")])]),e._v(" "),t("blockquote",[t("p",[e._v('在指定Key所关联的List Value的头部插入参数中给出的所有Values,如果该Key不存在，该命令将在插入之前创建一个与该Key关联的空链表\n之后再将数据从链表的头部插入。如果该键的Value不是链表类型，该命令将返回相关的错误信息。\n例如： jedis.lpush("list", 1);')])]),e._v(" "),t("ul",[t("li",[e._v("rpop")])]),e._v(" "),t("blockquote",[t("p",[e._v("相当于将指定key关联的list中的元素弹出来，即：返回并弹出指定Key关联的链表中的最后一个元素，即尾部元素，。如果该Key不存，返回nil。")])]),e._v(" "),t("ul",[t("li",[e._v("rpoplpush")])]),e._v(" "),t("blockquote",[t("p",[e._v("弹出来再发送到目的地list，即：原子性的从与source键关联的链表尾部弹出一个元素，同时再将弹出的元素插入到与destination键关联的链表的头部。\n如果source键不存在，该命令将返回nil，同时不再做任何其它的操作了。如果source和destination是同一个键，则相当于原子性的将其关联链表中的尾部元素移到该链表的头部。")])]),e._v(" "),t("ul",[t("li",[e._v("SETNX key value")])]),e._v(" "),t("blockquote",[t("p",[e._v("如果指定的Key不存在，则设定该Key持有指定字符串Value，此时其效果等价于SET命令。相反，如果该Key已经存在，\n该命令将不做任何操作并返回。\n例如： setnx key1 1 -> 1代表true，再次setnx key1 1后将返回0，什么都不做")])]),e._v(" "),t("ul",[t("li",[e._v("HSET key field value")])]),e._v(" "),t("blockquote",[t("p",[e._v("为指定的Key设定Field/Value对，如果Key不存在，该命令将创建新Key以参数中的Field/Value对，如果参数中的Field在该Key中已经存在，则用新值覆盖其原有值。")])]),e._v(" "),t("ul",[t("li",[e._v("HGET key field")])]),e._v(" "),t("blockquote",[t("p",[e._v("返回指定Key中指定Field的关联值。")])]),e._v(" "),t("ul",[t("li",[e._v("lrange")])]),e._v(" "),t("blockquote",[t("p",[e._v("时间复杂度中的S为start参数表示的偏移量，N表示元素的数量。该命令的参数start和end都是0-based。即0表示链表头部(leftmost)的第一个元素。其中start的值也可以为负值，-1将表示链表中的最后一个元素，即尾部元素，-2表示倒数第二个并以此类推。该命令在获取元素时，start和end位置上的元素也会被取出。如果start的值大于链表中元素的数量，空链表将会被返回。如果end的值大于元素的数量，该命令则获取从start(包括start)开始，链表中剩余的所有元素。\t\n如：lrange(key, start, end)")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package com.dtree.redis;\n\nimport redis.clients.jedis.Jedis;\n\nimport java.util.Random;\nimport java.util.UUID;\n\npublic class RedisQ {\n\n    public static void main(String[] args) throws Exception {\n\n        Thread tserver = new Thread() {\n            Jedis jedis = new Jedis("127.0.0.1", 6379);\n\n            @Override\n            public void run() {\n                Random random = new Random();\n                while (true) {\n                    try {\n                        Thread.sleep(random.nextInt(600) + 600);\n                        // 模拟生成一个任务\n                        UUID uuid = UUID.randomUUID();\n                        //将任务插入任务队列：taskqueue\n                        // 在指定Key所关联的List Value的头部插入参数中给出的所有Values。\n                        // 如果该Key不存在，该命令将在插入之前创建一个与该Key关联的空链表，\n                        // 之后再将数据从链表的头部插入。如果该键的Value不是链表类型，该命令将返回相关的错误信息。\n                        jedis.lpush("originQueue", uuid.toString());\n                        System.out.println("插入了一个新的任务： " + uuid);\n                    } catch (Exception e) {\n                        e.printStackTrace();\n                    }\n                }\n            }\n        };\n\n        Thread tclient = new Thread() {\n            Jedis jedis = new Jedis("127.0.0.1", 6379);\n\n            @Override\n            public void run() {\n                Random random = new Random();\n                while (true) {\n                    //从任务队列"originQueue"中获取一个任务，并将该任务放入暂存队列"tmpQueue"\n                    String taskid = jedis.rpoplpush("originQueue", "tmpQueue");\n                    // 处理任务----纯属业务逻辑，模拟一下：睡觉\n                    try {\n                        Thread.sleep(1000);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    //模拟成功和失败的偶然现象\n                    if (random.nextInt(13) % 7 == 0) {// 模拟失败的情况,概率为2/13\n                        // 原子性的从与source键关联的链表尾部弹出一个元素，\n                        // 同时再将弹出的元素插入到与destination键关联的链表的头部。\n                        // 如果source键不存在，该命令将返回nil，同时不再做任何其它的操作了。\n                        // 如果source和destination是同一个键，则相当于原子性的将其关联链表中的尾部元素移到该链表的头部。\n                        jedis.rpoplpush("tmpQueue", "destinationQueue"); //将本次处理失败的任务从暂存队列"tmp-queue"中，弹回任务队列"task-queue"\n                        System.out.println(taskid + "处理失败，被弹回任务队列");\n                    } else {// 模拟成功的情况\n                        // 返回并弹出指定Key关联的链表中的最后一个元素，即尾部元素，。如果该Key不存，返回nil\n                        jedis.rpop("tmpQueue"); // 将本次任务从暂存队列"tmpQueue"中清除\n                        System.out.println(taskid + "处理成功，被清除");\n                    }\n                }\n            }\n        };\n\n\n        // 启动一个生产者线程，模拟任务的产生\n        tserver.start();\n        Thread.sleep(15000);\n        //启动一个线程者线程，模拟任务的处理\n        tclient.start();\n        //主线程休眠\n        Thread.sleep(Long.MAX_VALUE);\n    }\n\n}\n\n\n// 线程池-生产者\nprivate static void coolProduce() {\n       final Jedis jedis = new Jedis("127.0.0.1", 6379);\n        ThreadPoolDemo.executor.execute(new Runnable() {\n            @Override\n            public void run() {\n                Random random = new Random();\n                while (true) {\n                    try {\n                        Thread.sleep(random.nextInt(600) + 600);\n                        // 模拟生成一个任务\n                        UUID uuid = UUID.randomUUID();\n                        Map map = new HashMap<>();\n                        map.put(uuid,uuid);\n                        //将任务插入任务队列：taskqueue\n                        // 在指定Key所关联的List Value的头部插入参数中给出的所有Values。\n                        // 如果该Key不存在，该命令将在插入之前创建一个与该Key关联的空链表，\n                        // 之后再将数据从链表的头部插入。如果该键的Value不是链表类型，该命令将返回相关的错误信息。\n                        jedis.lpush("originQueue", JSON.toJSONString(map));\n                        System.out.println("插入了一个新的任务： " + uuid);\n                    } catch (Exception e) {\n                        e.printStackTrace();\n                    }\n                }\n\n\n            }\n        });\n    }\n    \n// 线程池-消费者\n   private static void coolConsume() {\n       final Jedis jedis = new Jedis("127.0.0.1", 6379);\n        ThreadPoolDemo.executor.execute(new Runnable() {\n            @Override\n            public void run() {\n                Random random = new Random();\n                while (true) {\n                    //从任务队列"originQueue"中获取一个任务，并将该任务放入暂存队列"tmpQueue"\n                    String taskid = jedis.rpoplpush("originQueue", "tmpQueue");\n                    // 处理任务----纯属业务逻辑，模拟一下：睡觉\n                    try {\n                        Thread.sleep(1000);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                    //模拟成功和失败的偶然现象\n                    if (random.nextInt(13) % 7 == 0) {// 模拟失败的情况,概率为2/13\n                        // 原子性的从与source键关联的链表尾部弹出一个元素，\n                        // 同时再将弹出的元素插入到与destination键关联的链表的头部。\n                        // 如果source键不存在，该命令将返回nil，同时不再做任何其它的操作了。\n                        // 如果source和destination是同一个键，则相当于原子性的将其关联链表中的尾部元素移到该链表的头部。\n                        jedis.rpoplpush("tmpQueue", "destinationQueue"); //将本次处理失败的任务从暂存队列"tmp-queue"中，弹回任务队列"task-queue"\n                        System.out.println(taskid + "处理失败，被弹回任务队列");\n                    } else {// 模拟成功的情况\n                        // 返回并弹出指定Key关联的链表中的最后一个元素，即尾部元素，。如果该Key不存，返回nil\n                        jedis.rpop("tmpQueue"); // 将本次任务从暂存队列"tmpQueue"中清除\n                        System.out.println(taskid + "处理成功，被清除");\n                    }\n                }\n            }\n        });\n    }\n\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);