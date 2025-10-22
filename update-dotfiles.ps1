cp C:\Users\markv\AppData\Local\nvim\* .\AppData\Local\nvim -Recurse -Force
cp C:\Users\markv\.glzr\glazewm\config.yaml .\.glzr\glazewm\ -Force
cp C:\Users\markv\.glzr\zebar\settings.json .\.glzr\zebar\settings.json -Force
cp C:\Users\markv\.glzr\zebar\dunebar .\.glzr\zebar\dunebar -Recurse -Force
rm -rf .\.glzr\zebar\dunebar\.git
cp $PROFILE .

git add .
git commit -m "Update"
git push origin main
