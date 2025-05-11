# Instructions to setup

### Press `CTRL+K V` for preview

1. Fork project
2. Clone project
```
git clone https://github.com/<Your Github Username>/DevDash.git .
```
3. Check if your upstream is setup
```
git remote -v
```
It should come something like this:
```
origin  https://github.com/<Your username>/DevDash.git (fetch)
origin  https://github.com/<Your username>/DevDash.git (push)
upstream  https://github.com/Abhigyan103/DevDash.git (fetch)
upstream  https://github.com/Abhigyan103/DevDash.git (push)
```
If not, type
```
git remote add upstream https://github.com/Abhigyan103/DevDash.git
```
3. As soon as the event starts
```
git pull upstream main
```
4. After completed a task, commit the change
```
git add .
git commit -m "message"
```
5. At the end of the event, 
```
git push origin main
```
6. Create a PR: Click on sync fork in your repository