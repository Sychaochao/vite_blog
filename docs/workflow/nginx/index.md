# `nginx` 配置

作用：按顺序检查文件是否存在
解决：404问题
```sh
location / {
    try_files $uri $uri//index.html
}

```

**config：配置多个项目**
```sh

#user  nobody; 
#1、定义Nginx运行的用户和用户组
#user qs js

# nginx进程数,建议设置为等于CPU总核心数.
worker_processes  1;

# 全局错误日志定义类型
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

# 进程文件
#pid        logs/nginx.pid;


# Nginx.config配置

events {
    #   #设置工作模式为epoll,除此之外还有select,poll,kqueue,rtsig和/dev/poll模式
    # use epoll;
    #单个进程最大连接数（最大连接数=连接数*进程数）65535;
    worker_connections  1024;
}

http {
    # 主模块指令，实现对配置文件所包含的文件的设定，可以减少主配置文件的复杂度
    include       mime.types;  
    default_type  application/octet-stream; 
	#默认文件类型  #核心模块指令，默认设置为二进制流，也就是当文件类型未定义时使用这种方式

    #charset utf-8; #默认编码
    # server_names_hash_bucket_size 128; #服务器名字的hash表大小
    # client_header_buffer_size 32k; #上传文件大小限制
    # large_client_header_buffers 4 64k; #设定请求缓
    # client_max_body_size 8m; #设定请求缓


     #下面代码为日志格式的设定，main为日志格式的名称，可自行设置，后面引用
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #引用日志main格式
    #access_log  logs/access.log  main;
    #开启高效文件传输模式
    sendfile        on;
     #开启防止网络阻塞
    # tcp_nopush     on;
    #开启防止网络阻塞
    # tcp_nodelay    on;

    #keepalive_timeout  0;  120; # (单位s)   设置客户端连接保持活动的超时时间,在超过这个时间后服务器会关闭该链接
    keepalive_timeout  65;

    server {
         #单连接请求上限次数
        keepalive_requests 120; 
        listen       8001;             
		# 监听端口
        # 域名可以有多个,用空格隔开 （监听地址，可以是ip，最好是域名）
        server_name  localhost;
        #charset koi8-r;
	
        #解决404
         #try_files $uri $uri/ /index.html;
        #access_log  logs/host.access.log  main;
        # 设置虚拟主机访问日志的存放路径及日志的格式为main
        # access_log  /www/wwwlogs/111.222.333.123.log main; #响应日志
        # error_log  /www/wwwlogs/111.222.333.123.log main; #错误日志  



        #设置主机基本信息
        #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
		# 前端访问的路径 ip:8001/front
        #  location  ~*^.+$ {
        location ^~ /devApi {
            	#根目录
            alias  D:\xxx\xx\xxx\xxx\dist;
		    #设置默认页
			index index.html index.htm;
			try_files $uri $uri/ /front/index.html;

			
		    error_page 405 =200 http://$host$request_uri;
            # deny 127.0.0.1;  拒绝的ip 黑名单
            #allow 172.18.5.54; 允许的ip，白名单

            	# 允许跨域的请求，可以自定义变量$http_origin，*表示所有
                add_header 'Access-Control-Allow-Origin' *;
                # 允许携带cookie请求
                add_header 'Access-Control-Allow-Credentials' 'true';
                # 允许跨域请求的方法：GET,POST,OPTIONS,PUT
                add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT';
                # 允许请求时携带的头部信息，*表示所有
                add_header 'Access-Control-Allow-Headers' *;
                # 允许发送按段获取资源的请求
                add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
                # 一定要有！！！否则Post请求无法进行跨域！
                # 在发送Post跨域请求前，会以Options方式发送预检请求，服务器接受时才会正式请求
                if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Max-Age' 1728000;
                add_header 'Content-Type' 'text/plain; charset=utf-8';
                add_header 'Content-Length' 0;
                # 对于Options方式的请求返回204，表示接受跨域请求
                return 204;
    
		    }
			
        }
		#  访问前端的路径设置
		location ^~ /xxx-prod {
			#根目录
			alias '目录;
			#设置默认页
			index index.html index.htm;
		    try_files $uri $uri/ /H-prod/index.html;
		    error_page 405 =200 http://$host$request_uri;
	    }

		# 访问后端代理的路径 ip:8001/prod-api 
		location ^~ /prod-api {
			rewrite  ^/prod-api/?(.*)$ /$1 break;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://192.168.1.200:8080;
			
		}	

         #访问异常页面配置
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
     
    }

}

```

