cp C:\Users\markv\AppData\Local\nvim\* .\AppData\Local\nvim -Recurse -Force
cp C:\Users\markv\.glzr\glazewm\config.yaml .\.glzr\glazewm\ -Force

git add .
git commit -m "Update"
git push origin main
