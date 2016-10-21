# prototype
Homepage prototype and other ideas for the UX team

Usage

Run $ gulp deploy to push to production.

Gulp Deploy does the following tasks
______________________________ // File Stuff
1. Runs a clean
2. Minify all files styles, html, and scripts
3. Strips out unnecessary CSS
3. Runs code linters
4. Copy to src directory
5. Generate service workers
______________________________ // Deploy Stuff
6. Temporarily committ to dist
7. Cleaning origin/gh-pages
8. Push dist to origin/gh-pages
9. Reset dist temporary commit
