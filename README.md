<img src="https://miro.medium.com/max/1400/1*BCZkmZR1_YzDZy22Vn4uUw.png" width="500">

<!-- video stop at 2.15.03 -->

## Learning GIT ( Git Refresher )
  git is a version control that makes your life easier to work with any software developers around the world

## Git Config
 - `git config --global user.name "john doe"` - a config for username on global
 - `git config --global user.email "johndoe@gmail.com"` - a config for user mail on global
 - checking ur configuration use this command `cat .gitconfig`
  
## Git Log
 logging all the commit that has been made
 - `git log filename`
 - `git log --oneline` - will show all the logs in oneline
 - `git log .` - will show all the logs

## Git Restore
 to restore/unstage the changes that have been staged
 - `git restore --staged` - restore the changes from staging area
 - `git restore filename` - restore the changes from the file

## Git Flow
 - `git init` - initialize a git on a folder
 - `git add` - add a file into a stagin area ( once file added into staging area it will be tracked by git )
 - `git commit` - commit a changes and add the file into a repo stage

## Commit
 - committing a changes using `git commit -m "message here"`
 - or adding and commiting at the same time using `git commit -am "message goes here"`
 - first `commit` does not dependes on any other `commit hash`
 - the next `commit` will be dependends on the first `commit hash`

## How to write a better commit
 - make a commit on a single component, or single bug fixes, or on a single file changes

## Ignoring a files or folder
 - create file called a `.gitignore`.
 - For generating a `.gitignore` file tailored to your project's needs, you can use the following link: [gitignore.io](https://www.toptal.com/developers/gitignore)

## checking a hidden files/folder
- run this command `ls -la` to see all hidden files/folder

## Git Branch
- `git branch` - for checking all available branches
- `git checkout branchname` or `git switch branchname` to switch/move to another branches
- shortcuts commands for switching branches, `
  ` git switch -c branhname` (this will create a new branch and move to that branch) and `
  `git checkout -b branchname` (also does the same)
 - `git branch -d branchname` for deleting branch ( use this command with coutious)
  
## Git Head
  - git `HEAD` is points to where the `branch` is currently at on a `latest commit` ( ex: points on a latest commit on a navbar branch )

## Git Diff 
 - `git diff` is for reading the diffrences that has been made inside the same files
 - `git diff --staged` - checking the diff on staging area
 - `git diff branchname` - to check the diff on a branch
 - `git diff filename` - to check the diff on the file

## Git Stash
  git stash is use when u still working on some branch and not done yet, and u didnt stage and commit it yet but u want to switch to another branch that is not main/master branch. 
  always be careful when working with stash command, make sure to check the stash list first.

  u can bring the changes from another branch that has been stashed ( not add to stage and commit yet ) to another branches
  - `git stash` - to stash the changes
  - `git stash pop` - to bring back the changes that've been saved on shell after stashing (bcoz the changes is saves on the temporary place called shell )
  - `git stash list` - to see stash list 
  - `git stash apply stashNumber` - it will apply the changes and dump the stash
  
 ## Moving to certain commit
 we can move to a certain commit using `git checkout`
 - `git checkout commitId`- move THE HEAD to the commit on the specified commitId
 - `git checkout branchname` - moving back to the last commit 
 - `git checkout HEAD~2` - move the HEAD to the prev 2 commit from the current commit

## Git Rebase 
 - alternative way to merge branch
 - clean up the commit ( history commits )
 - its not meant to be run on `main/master` branch
 - `git rebase branchname` will rewrite/remove the commit history from the branch that run the `rebase` command
 - never rebase when pushing to github
