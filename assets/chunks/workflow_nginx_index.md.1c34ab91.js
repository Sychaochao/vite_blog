import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a5035e6c.js";const A=JSON.parse('{"title":"nginx 配置","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/nginx/index.md","lastUpdated":1690868705000}'),p={name:"workflow/nginx/index.md"},e=l(`<h1 id="nginx-配置" tabindex="-1"><code>nginx</code> 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;\`nginx\` 配置&quot;">​</a></h1><p>作用：按顺序检查文件是否存在 解决：404问题</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">//index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>config：配置多个项目</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody; </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#1、定义Nginx运行的用户和用户组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#user qs js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nginx进程数,建议设置为等于CPU总核心数.</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局错误日志定义类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进程文件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx.config配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#   #设置工作模式为epoll,除此之外还有select,poll,kqueue,rtsig和/dev/poll模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># use epoll;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#单个进程最大连接数（最大连接数=连接数*进程数）65535;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 主模块指令，实现对配置文件所包含的文件的设定，可以减少主配置文件的复杂度</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">#默认文件类型  #核心模块指令，默认设置为二进制流，也就是当文件类型未定义时使用这种方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#charset utf-8; #默认编码</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># server_names_hash_bucket_size 128; #服务器名字的hash表大小</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># client_header_buffer_size 32k; #上传文件大小限制</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># large_client_header_buffers 4 64k; #设定请求缓</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># client_max_body_size 8m; #设定请求缓</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#下面代码为日志格式的设定，main为日志格式的名称，可自行设置，后面引用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#引用日志main格式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#开启高效文件传输模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#开启防止网络阻塞</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># tcp_nopush     on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#开启防止网络阻塞</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># tcp_nodelay    on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;  120; # (单位s)   设置客户端连接保持活动的超时时间,在超过这个时间后服务器会关闭该链接</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#单连接请求上限次数</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">keepalive_requests</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">8001</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">             </span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 监听端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 域名可以有多个,用空格隔开 （监听地址，可以是ip，最好是域名）</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#解决404</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 设置虚拟主机访问日志的存放路径及日志的格式为main</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># access_log  /www/wwwlogs/111.222.333.123.log main; #响应日志</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># error_log  /www/wwwlogs/111.222.333.123.log main; #错误日志  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#设置主机基本信息</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;"># 前端访问的路径 ip:8001/front</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#  location  ~*^.+$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/devApi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            	</span><span style="color:#676E95;font-style:italic;">#根目录</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">D:</span><span style="color:#A6ACCD;">\\x</span><span style="color:#C3E88D;">xx</span><span style="color:#A6ACCD;">\\x</span><span style="color:#C3E88D;">x</span><span style="color:#A6ACCD;">\\x</span><span style="color:#C3E88D;">xx</span><span style="color:#A6ACCD;">\\x</span><span style="color:#C3E88D;">xx</span><span style="color:#A6ACCD;">\\d</span><span style="color:#C3E88D;">ist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#676E95;font-style:italic;">#设置默认页</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/front/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">			</span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">405</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://</span><span style="color:#A6ACCD;">$host$request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># deny 127.0.0.1;  拒绝的ip 黑名单</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;">#allow 172.18.5.54; 允许的ip，白名单</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            	</span><span style="color:#676E95;font-style:italic;"># 允许跨域的请求，可以自定义变量$http_origin，*表示所有</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 允许携带cookie请求</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Credentials</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 允许跨域请求的方法：GET,POST,OPTIONS,PUT</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Methods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET,POST,OPTIONS,PUT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 允许请求时携带的头部信息，*表示所有</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Allow-Headers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 允许发送按段获取资源的请求</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Expose-Headers</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Length,Content-Range</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 一定要有！！！否则Post请求无法进行跨域！</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 在发送Post跨域请求前，会以Options方式发送预检请求，服务器接受时才会正式请求</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$request_method = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Max-Age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1728000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain; charset=utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Length</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 对于Options方式的请求返回204，表示接受跨域请求</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">204</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">		    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">#  访问前端的路径设置</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/xxx-prod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#676E95;font-style:italic;">#根目录</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">目录;</span></span>
<span class="line"><span style="color:#C3E88D;">			#设置默认页</span></span>
<span class="line"><span style="color:#C3E88D;">			index index.html index.htm;</span></span>
<span class="line"><span style="color:#C3E88D;">		    try_files $uri $uri/ /H-prod/index.html;</span></span>
<span class="line"><span style="color:#C3E88D;">		    error_page 405 =200 http://$host$request_uri;</span></span>
<span class="line"><span style="color:#C3E88D;">	    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">		# 访问后端代理的路径 ip:8001/prod-api </span></span>
<span class="line"><span style="color:#C3E88D;">		location ^~ /prod-api {</span></span>
<span class="line"><span style="color:#C3E88D;">			rewrite  ^/prod-api/?(.*)$ /$1 break;</span></span>
<span class="line"><span style="color:#C3E88D;">			proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#C3E88D;">			proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#C3E88D;">			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#C3E88D;">			proxy_pass http://192.168.1.200:8080;</span></span>
<span class="line"><span style="color:#C3E88D;">			</span></span>
<span class="line"><span style="color:#C3E88D;">		}	</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">         #访问异常页面配置</span></span>
<span class="line"><span style="color:#C3E88D;">        #error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#C3E88D;">        #</span></span>
<span class="line"><span style="color:#C3E88D;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#C3E88D;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#C3E88D;">            root   html;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">     </span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br></div></div>`,5),o=[e];function r(c,t,i,y,C,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};
