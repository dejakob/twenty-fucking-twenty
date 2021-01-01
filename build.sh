git reset --hard
git clean -fd
git checkout master
NODE_ENV=production npm run build
mkdir docs
cp -R build/* docs/*
git checkout -b docs
git add .
git commit -am 'Build docs'
git push origin docs
git checkout master
git branch -d docs
echo "✅ Build successful"