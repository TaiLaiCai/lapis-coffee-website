# 蓝珀咖啡·旺咖工厂店网站

这是从蓝珀咖啡小程序提炼出的静态官网，主打乡村咖啡体验：

- 工厂参观
- 手冲培训
- 意式拉花
- 乡村咖啡打卡
- 公路车 / 摩托 / 自驾中转补给

## 本地预览

```bash
python3 -m http.server 4173 --directory website
```

打开：

```text
http://127.0.0.1:4173/
```

## 部署到腾讯云服务器

推荐部署目录：

```text
/var/www/ougai.com
```

Nginx 站点配置示例：

```nginx
server {
  listen 80;
  server_name ougai.com www.ougai.com;

  root /var/www/ougai.com;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

DNS 需要把 `ougai.com` 和 `www.ougai.com` 的 A 记录指向：

```text
129.226.158.181
```
