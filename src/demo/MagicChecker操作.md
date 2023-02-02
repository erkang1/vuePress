#  MagicChecker配置

0. 说明：新注册账号并验证可免费试用 **7天**
1. 地址：[MagicChecker](https://clients.magicchecker.com/)

## 0. 准备工作
### 0-0. 账号相关
1. 准备正常接码的邮箱，用于注册平台账号

2. 准备 **余额超过5美金** 的PayPal账号或信用卡，用于绑定 serverpilot 服务

### 0-1. 准备需要的源文件
1. 准备A站（**safe 伪装页**），B站（**promo 落地页**）的 **源文件**
::: tip 文件说明
文件为**纯静态Html**类型
::: danger 官方警告
不推荐使用跳转链接配置，可能会导致域名触发风控

:::

![]()
<img class="personalPic" :src="('/vuePress/assets/img/源文件.png')">

### 0-2. 购买域名
1. 地址：[namesilo](https://www.namesilo.com/) (根据自己习惯选择购买域名地址)
![]()
<img class="personalPic" :src="('/vuePress/assets/img/namesilo.png')">

### 0-3. 购买服务器 
1. 地址：[vultr](https://www.vultr.com/?ref=8934457) (根据自己习惯选择购买服务器地址)
::: tip 系统说明
服务器的系统需要选择 **Ubuntu 18.04 LTS x64**
:::

![]()
<img class="personalPic" :src="('/vuePress/assets/img/ubuntu1804.png')">


## 1. 安装serverpilot服务
### 1-1. 注册账号
1. 地址：[serverpilot](https://serverpilot.io/)
2. 新注册账号可免费试用 **14天**
### 1-2. 绑定Paypal或者信用卡
1. 绑定paypal或者信用卡 <Badge type="danger" text="必须绑定" vertical="middle" />
::: tip 为什么需要绑定paypal ?
自定义 **app名称** 和使用 **Auto SSL**
:::

![]()
<img class="personalPic" :src="('/vuePress/assets/img/bdpaypal.png')">

### 1-3. 绑定服务器并安装服务
1. 输入服务器**账号密码**，点击 **Connect to ServerPilot** ,等待进度条完成即可

![]()
<img class="personalPic" :src="('/vuePress/assets/img/conse.png')">

## 2. 解析DNS
### 2-1. 注册账号
1. 地址：[dnsmadeeasy](https://dnsmadeeasy.com/)
2. 完成账号验证和实名验证
3. 新注册账号可免费试用 **30天**

### 2-2. 解析域名
1. 点击添加域名      

![]()
<img class="personalPic" :src="('/vuePress/assets/img/jxdns.png')">

2. 输入你的域名

![]()
<img class="personalPic" :src="('/vuePress/assets/img/shuru.png')">

3. 将上一步骤得到的System NS Records值填写到 **购买域名的网站处** 解析出来

![]()
<img class="personalPic" :src="('/vuePress/assets/img/jx1.png')">

![]()
<img class="personalPic" :src="('/vuePress/assets/img/jx2.png')">

![]()
<img class="personalPic" :src="('/vuePress/assets/img/jx3.png')">

4. 回到 DNS Made Easy ,点击 **+** 添加服务器

![]()
<img class="personalPic" :src="('/vuePress/assets/img/bangdi.png')">

## 3. 检查服务器
### 3-1. 检查服务器是否生效
1. 地址：[whatsmydns](https://www.whatsmydns.net)

![]()
<img class="personalPic" :src="('/vuePress/assets/img/check.png')">

## 4. 配置serverpilot - APP
1. 地址：[serverpilot](https://serverpilot.io/)
2. 新建 APP

![]()
<img class="personalPic" :src="('/vuePress/assets/img/capp.png')">

3. 配置自动SSL

![]()
<img class="personalPic" :src="('/vuePress/assets/img/dk.png')">

## 5. 上传文件到服务器
### 5-1. 上传工具下载
1. 我这里使用的 [ Xftp 7](https://www.netsarang.com/zh/Xftp/)

### 5-2. 服务器配置
1. 配置服务器并连接

![]()
<img class="personalPic" :src="('/vuePress/assets/img/pz.png')">

### 5-3. 文件上传
1. 找到远程目录 **`/srv/users/你的APP名称/apps/你的域名地址/public`**
2. 将准备的A，B站文件拖放上传到远程服务器

![]()
<img class="personalPic" :src="('/vuePress/assets/img/sj.png')">

## 6. 配置MagicChecker
### 6-1. 注册账号
1. 地址：[MagicChecker](https://magicchecker.com/)
### 6-2. 创建跳转配置和拦截配置
1. 点击 ADD CAMPAIGN

![]()
<img class="personalPic" :src="('/vuePress/assets/img/ac.png')">

2. 进入 常规设置 ，将显示的页面类型选择为 文件（Show content）,设置文件路径，例如我的路径：**`http://www.你的域名地址/srv/users/你的APP名称/apps/你的域名地址/public`**

3. 将文件按照地址栏的提示进行填写 **safe.html | promo.html**
::: tip 示例
 
 我的Safe Page 配置：
 
 `http://www.0121212.xyz/srv/users/gm1212/apps/0121212/public/safe.html`

 我的Promo Page 配置：
 
 `http://www.0121212.xyz/srv/users/gm1212/apps/0121212/public/Promo.html`
:::

![]()
<img class="personalPic" :src="('/vuePress/assets/img/dzpz.png')">

### 6-3. 安装MFS (新开一个浏览器页面安装)
1. 地址：[MFS](https://clients.magicchecker.com/user/mfs)
2. 按照要求输入服务器和域名信息

![]()
<img class="personalPic" :src="('/vuePress/assets/img/mfs.png')">

3. 继续配置MagicCheker，点击 Global Filters 按照下图的操作进行保存 

![]()
<img class="personalPic" :src="('/vuePress/assets/img/msf2.png')">

### 6-4. 配置 index.php 文件
1. 点击下载按钮  得到index.php文件

![]()
<img class="personalPic" :src="('/vuePress/assets/img/sk.png')">

2. 使用 Xftp 7 将文件上传并替换到远程服务器文件夹

![]()
<img class="personalPic" :src="('/vuePress/assets/img/th.png')">

**至此，配置完毕**

## 7. 访问你的域名即可

## 8. FAQ
### 1. 为什么vultr购买服务器之后，我的服务器无法连接？
 > 答：服务器安装需要时间，时间为10分钟到30分钟不等，请耐心等待！
### 2. 为什么配置完DNS之后，whatsmydns检测显示不是我的IP？
 > 答：DNS刷新时间为30分钟左右，请耐心等待！
### 3. 为什么我重新上传了内容，但是网站内容没有同步？
 > 答：每次修改MagicChecker内容之后，都需要重新上传并替换 **index.php** 文件