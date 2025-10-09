cp C:\Users\markv\AppData\Local\nvim\* .\AppData\Local\nvim -Recurse
cp C:\Users\markv\.glzr\glazewm\config.yaml .\.glzr\glazewm\

git add .
git commit -m "Update"
git push origin main
