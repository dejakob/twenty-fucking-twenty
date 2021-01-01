git reset --hard
git clean -fd
git checkout master
npm i
NODE_ENV=production npm run build
mkdir docs
cp -R build/* docs
git checkout -b docs
git add .
git commit -am 'Build docs'
git push origin docs -f
git checkout master
git branch -D docs
echo "✅ Build successful"