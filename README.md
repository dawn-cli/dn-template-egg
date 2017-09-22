# dn-template-egg

这是一个 Egg.js 项目模板。

## 使用

使用这个模板需要先安装好 Dawn [https://github.com/alibaba/dawn](https://github.com/alibaba/dawn)

### 初始化
```sh
mkdir demo
cd demo
dn init -t egg
```

通过如上命令便可以完成项目的初始化

### 测试
```sh
dn test
```

### 开发
```sh
dn dev
```

### 运行
```sh
dn start
```

### 发布
```
dn publish
```

默认的发布配置是「发布到 npm」，请根据需要更改 `.dawn/pipe.yml` 进行 `publish` 配置