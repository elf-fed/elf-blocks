# elf-blocks
封装一些 可复用的区块 (模块)

[![languages](https://img.shields.io/github/languages/top/didilinkin/elf-blocks.svg)](https://img.shields.io/github/languages/top/didilinkin/elf-blocks.svg)

## Tips:

### **1. 关于 命名空间的说明**
blocks: 区块名称 请遵循 `xxx-xxx`(也就是 `横隔符断词命名`), e.g. 'elf-demo'

model: 模块 `namespace` 将使用 `宏替换`方式, 并且自动转换 `横隔符断词命名` 成 `驼峰式命名`

```bash
# e.g. => Add block
# /elf-demo 是需要使用者自己定义的, 避免 命名空间冲突
umi block add https://github.com/didilinkin/elf-blocks/tree/master/elf-demo --path=/elf-demo

model namespace => 'elfDemo'
```

在 redux 调试工具那里 查找 `elfDemo` 即可


## TODO:
- [x] 区块库架子 搭建
- [ ] 添加 lint 检查功能
- [ ] 配置 prettier 功能
- [ ] 添加 `umi-test`
