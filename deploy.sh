#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run docs:build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'iscxp.tk' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xpnobug/vueblog.git
  git config --global user.name "xpnobug"
  git config --global user.email "669307582@qq.com"
else
  msg='来自github action的自动部署'
  githubUrl=https://xpnobug:${GITHUB_TOKEN}@github.com/xpnobug/vueblog.git
  git config --global user.name "xpnobug"
  git config --global user.email "669307582@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
