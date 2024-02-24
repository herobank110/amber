rm -Recurse -Force $PSScriptRoot/../dist
yarn dist
git add .\dist
git commit -m 'dist'
git push
