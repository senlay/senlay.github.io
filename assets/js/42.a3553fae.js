(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{287:function(v,_,l){"use strict";l.r(_);var i=l(0),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("ul",[l("li",[v._v("查看进程 ps -ef")]),v._v(" "),l("li",[v._v("查看java进程 ps -ef | grep java")]),v._v(" "),l("li",[v._v("杀死java进程 kill -9 进程号")]),v._v(" "),l("li",[v._v("查看当前路径  pwd")]),v._v(" "),l("li",[v._v("检索日志并复制一份  cat server.log >mmm")]),v._v(" "),l("li",[v._v('检索日志匹配""并复制一份  cat server.log | grep "" >mmm')]),v._v(" "),l("li",[v._v("查看内存信息")])]),v._v(" "),l("blockquote",[l("p",[v._v("cat /proc/meminfo")])]),v._v(" "),l("ul",[l("li",[v._v("top命令查看实时使用率，类似Windows下的任务管理器")]),v._v(" "),l("li",[v._v("vmstat命令是最常见的Linux/Unix监控工具，可以展现给定时间间隔的服务器的状态值")])]),v._v(" "),l("blockquote",[l("p",[v._v("包括服务器的CPU使用率，\n内存使用，\n虚拟内存 交换情况,\nIO读写情况,如：vmstat 1 5")])]),v._v(" "),l("p",[l("img",{attrs:{src:"/img/vmstat2.png",alt:"vmstat命令"}}),v._v(" "),l("img",{attrs:{src:"/img/vmstat.png",alt:"vmstat实例："}})]),v._v(" "),l("ul",[l("li",[v._v("查看当前端口")])]),v._v(" "),l("blockquote",[l("p",[v._v("netstat -tunlp用于显示 tcp，udp 的端口和进程等相关情况,如：netstat -tunlp | grep 8000")])]),v._v(" "),l("ul",[l("li",[v._v("杀死进程")])]),v._v(" "),l("blockquote",[l("p",[v._v("kill 8080")])]),v._v(" "),l("ul",[l("li",[v._v("查看/etc/profile的前10行内容，应该是：")])]),v._v(" "),l("blockquote",[l("p",[v._v("head -n 10 /etc/profile")])]),v._v(" "),l("ul",[l("li",[v._v("查看/etc/profile的最后5行内容，应该是：")])]),v._v(" "),l("blockquote",[l("p",[v._v("tail  -n 5 /etc/profile\n"),l("img",{attrs:{src:"/img/tail.png",alt:"tail查看尾部日志"}})])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("jstat  可以查看新对象的增速,Young GC触发频率,耗时,对象进入老年代的增速,Full GC的触发频率以及耗时.")])]),v._v(" "),l("li",[l("p",[v._v("jmap和jhat  了解JVM的对象分布,哪些对象占据主角,占用了多少空间.")])]),v._v(" "),l("li",[l("p",[v._v("1.打印堆内存相关的一些参数")]),v._v(" "),l("ul",[l("li",[v._v("jmap -heap PID")])])]),v._v(" "),l("li",[l("p",[v._v("2.了解系统运行时的对象分布")]),v._v(" "),l("ul",[l("li",[v._v("jmap -histo PID")])])]),v._v(" "),l("li",[l("p",[v._v("3.使用jmap生成堆内存转存快照")]),v._v(" "),l("ul",[l("li",[v._v("jmap -dump:live,format=b,file=dump.hprof PID")])])]),v._v(" "),l("li",[l("p",[v._v("4.使用jhat在浏览器中分析堆转存快照")]),v._v(" "),l("ul",[l("li",[v._v("jhat dump.hprof -port 7000")])])]),v._v(" "),l("li",[l("p",[v._v("5.查看指定进程的PID 情况")]),v._v(" "),l("ul",[l("li",[v._v("jstat -gc PID")])])]),v._v(" "),l("li",[l("p",[v._v("6.可以查看某个进程的线程信息")]),v._v(" "),l("ul",[l("li",[v._v("top -Hp pid")])])]),v._v(" "),l("li",[l("p",[v._v("jstat -gc pid")])])]),v._v(" "),l("blockquote",[l("p",[v._v("如 jstat -gc 8080, 可以显示gc的信息，查看gc的次数，及时间")])]),v._v(" "),l("ul",[l("li",[v._v("jstat -gccapacity pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("可以显示，VM内存中三代（young,old,perm）对象的使用和占用大小，\n如：PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量")])]),v._v(" "),l("ul",[l("li",[v._v("jstat -gcutil pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("统计gc信息统计。")])]),v._v(" "),l("ul",[l("li",[v._v("4.jstat -gcnew pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("年轻代对象的信息。")])]),v._v(" "),l("ul",[l("li",[v._v("5.jstat -gcnewcapacity pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("年轻代对象的信息及其占用量。")])]),v._v(" "),l("ul",[l("li",[v._v("6.jstat -gcold pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("old代对象的信息。")])]),v._v(" "),l("ul",[l("li",[v._v("7.stat -gcoldcapacity pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("old代对象的信息及其占用量。")])]),v._v(" "),l("ul",[l("li",[v._v("8.jstat -gcpermcapacity pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("perm对象的信息及其占用量。")])]),v._v(" "),l("ul",[l("li",[v._v("9.jstat -class pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("显示加载class的数量，及所占空间等信息。")])]),v._v(" "),l("ul",[l("li",[v._v("10.jstat -compiler pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("显示VM实时编译的数量等信息。")])]),v._v(" "),l("ul",[l("li",[v._v("11.stat -printcompilation pid")])]),v._v(" "),l("blockquote",[l("p",[v._v("当前VM执行的信息。\n一些术语的中文解释：")])]),v._v(" "),l("ul",[l("li",[v._v("S0C：年轻代中第一个survivor（幸存区）的容量 (字节)")]),v._v(" "),l("li",[v._v("S1C：年轻代中第二个survivor（幸存区）的容量 (字节)")]),v._v(" "),l("li",[v._v("S0U：年轻代中第一个survivor（幸存区）目前已使用空间 (字节)")]),v._v(" "),l("li",[v._v("S1U：年轻代中第二个survivor（幸存区）目前已使用空间 (字节)")]),v._v(" "),l("li",[v._v("EC：年轻代中Eden（伊甸园）的容量 (字节)")]),v._v(" "),l("li",[v._v("EU：年轻代中Eden（伊甸园）目前已使用空间 (字节)")]),v._v(" "),l("li",[v._v("OC：Old代的容量 (字节)")]),v._v(" "),l("li",[v._v("OU：Old代目前已使用空间 (字节)")]),v._v(" "),l("li",[v._v("PC：Perm(持久代)的容量 (字节)")]),v._v(" "),l("li",[v._v("PU：Perm(持久代)目前已使用空间 (字节)")]),v._v(" "),l("li",[v._v("YGC：从应用程序启动到采样时年轻代中gc次数")]),v._v(" "),l("li",[v._v("YGCT：从应用程序启动到采样时年轻代中gc所用时间(s)")]),v._v(" "),l("li",[v._v("FGC：从应用程序启动到采样时old代(全gc)gc次数")]),v._v(" "),l("li",[v._v("FGCT：从应用程序启动到采样时old代(全gc)gc所用时间(s)")]),v._v(" "),l("li",[v._v("GCT：从应用程序启动到采样时gc用的总时间(s)")]),v._v(" "),l("li",[v._v("NGCMN：年轻代(young)中初始化(最小)的大小 (字节)")]),v._v(" "),l("li",[v._v("NGCMX：年轻代(young)的最大容量 (字节)")]),v._v(" "),l("li",[v._v("NGC：年轻代(young)中当前的容量 (字节)")]),v._v(" "),l("li",[v._v("OGCMN：old代中初始化(最小)的大小 (字节)")]),v._v(" "),l("li",[v._v("OGCMX：old代的最大容量 (字节)")]),v._v(" "),l("li",[v._v("OGC：old代当前新生成的容量 (字节)")]),v._v(" "),l("li",[v._v("PGCMN：perm代中初始化(最小)的大小 (字节)")]),v._v(" "),l("li",[v._v("PGCMX：perm代的最大容量 (字节)")]),v._v(" "),l("li",[v._v("PGC：perm代当前新生成的容量 (字节)")]),v._v(" "),l("li",[v._v("S0：年轻代中第一个survivor（幸存区）已使用的占当前容量百分比")]),v._v(" "),l("li",[v._v("S1：年轻代中第二个survivor（幸存区）已使用的占当前容量百分比")]),v._v(" "),l("li",[v._v("E：年轻代中Eden（伊甸园）已使用的占当前容量百分比")]),v._v(" "),l("li",[v._v("O：old代已使用的占当前容量百分比")]),v._v(" "),l("li",[v._v("P：perm代已使用的占当前容量百分比")]),v._v(" "),l("li",[v._v("S0CMX：年轻代中第一个survivor（幸存区）的最大容量 (字节)")]),v._v(" "),l("li",[v._v("S1CMX ：年轻代中第二个survivor（幸存区）的最大容量 (字节)")]),v._v(" "),l("li",[v._v("ECMX：年轻代中Eden（伊甸园）的最大容量 (字节)")]),v._v(" "),l("li",[v._v("DSS：当前需要survivor（幸存区）的容量 (字节)（Eden区已满）")]),v._v(" "),l("li",[v._v("TT： 持有次数限制")]),v._v(" "),l("li",[v._v("MTT ： 最大持有次数限制")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("显示java进程内存使用的相关信息")]),v._v(" "),l("ul",[l("li",[v._v("jmap pid #打印内存使用的摘要信息")]),v._v(" "),l("li",[v._v("jmap –heap pid #java heap信息")]),v._v(" "),l("li",[v._v("jmap -histo:live pid #统计对象count ，live表示在使用")]),v._v(" "),l("li",[v._v("jmap -histo pid >mem.txt #打印比较简单的各个有多少个对象占了多少内存的信息，一般重定向的文件")]),v._v(" "),l("li",[v._v("jmap -dump:format=b,file=mem.dat pid #将内存使用的详细情况输出到mem.dat 文件")])])]),v._v(" "),l("li",[l("p",[v._v("设置环境变量")])])]),v._v(" "),l("blockquote",[l("p",[v._v("export tessdata=/home/java/app_server/tessdata:$tessdata")])]),v._v(" "),l("ul",[l("li",[v._v("查看环境变量")])]),v._v(" "),l("blockquote",[l("p",[v._v("env")])])])}),[],!1,null,null,null);_.default=t.exports}}]);