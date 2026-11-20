# Tianyu Zhang — Personal Academic Website

Source of [zty0304.github.io](https://zty0304.github.io/). Plain [Hugo](https://gohugo.io/) (extended, ≥ 0.156), no theme framework, no Node.

## 目录：按页面分，一页一个文件夹

```
pages/                      ← 平时要改的东西全在这里
├── home/                   主页
│   ├── home.yaml           主页全部文字：简介、链接、新闻、经历、教育、获奖、合作者、板块顺序
│   ├── portrait.jpg        头像
│   ├── favicon.png         浏览器标签图标
│   └── people/             合作者头像
├── publications/           论文页
│   ├── publications.yaml   全部论文（selected: true 即上主页）、年份按钮设置
│   └── figures/            论文配图（主页精选用）
├── gallery/                相册页
│   ├── gallery.yaml        相册标题 / 封面 / 主页精选照片
│   ├── hokuriku/           ← 每个文件夹就是一个相册，放照片即可
│   └── kamikochi/
└── blog/                   博客页
    ├── blog.yaml           博客页标题、主页显示几篇
    └── posts/              每篇文章一个文件夹（index.md + 图片）

hugo.yaml                   网站设置：风格（paper / graphite）、导航
static/                     原样发布到网站根目录的文件（Google 验证文件、CV PDF 等）
theme/                      外观代码（模板、样式、脚本），平时不用动
```

## 本地预览

```powershell
hugo server
```

打开 <http://localhost:1313/>。草稿博客用 `hugo server -D` 可见。推送到 `main` 分支后由 GitHub Actions 自动部署。

## 常见操作

| 想做的事 | 怎么做 |
| --- | --- |
| 改简介、链接、新闻、经历、教育、获奖 | 编辑 `pages/home/home.yaml` |
| 调整主页板块顺序 / 隐藏板块 | `home.yaml` 顶部的 `sections` |
| 加一篇论文 | 在 `publications.yaml` 的 `papers:` 下复制一条修改；`group` 决定分类，`date` 决定排序和年份 |
| 论文上主页 | 加 `selected: true`，配图放进 `pages/publications/figures/`，写 `image: figures/xxx.jpg` |
| 年份按钮 | `publications.yaml` 的 `years_from`：该年及以后每年一个按钮，之前的合并为 “Before …” |
| 加相册 | 在 `pages/gallery/` 下新建文件夹放照片，自动生成 `/gallery/<文件夹名>/` |
| 挑主页照片 | `gallery.yaml` 的 `home:`，写成 `相册文件夹/文件名` |
| 写博客 | 复制 `pages/blog/posts/template-post/`，改名改内容，去掉 `draft: true`；加 `featured: true` 上主页 |
| 切换风格 | `hugo.yaml` 的 `style: paper` / `graphite` |

## 外观代码

- 模板：`theme/layouts/`（主页每个板块一个文件，在 `theme/layouts/_partials/home/`）
- 样式：`theme/css/main.css`（顶部是颜色、字体、宽度变量）
- 脚本：`theme/js/main.js`（主题切换、滚动动效、年份筛选、灯箱、首屏流线）

`hugo.yaml` 底部的 `module.mounts` 把上面的目录映射到 Hugo 需要的标准结构。
