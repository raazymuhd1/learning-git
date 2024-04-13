<img src="https://miro.medium.com/max/1400/1*BCZkmZR1_YzDZy22Vn4uUw.png" width="500">



## Learning GIT ( Git Refresher )
  git is a version control that makes your life easier to work with any software developers around the world

## Git Config
 - `git config --global user.name "john doe"` - a config for username on global
 - `git config --global user.email "johndoe@gmail.com"` - a config for user mail on global
 - checking ur configuration use this command `cat .gitconfig`

## Git Flow
 - `git init` - initialize a git on a folder
 - `git add` - add a file into a stagin area ( once file added into staging area it will be tracked by git )
 - `git commit` - commit a changes and add the file into a repo stage

## Commit
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
  
## Git Head
  - git `HEAD` is points to where the `branch` is currently at on a `latest commit` ( ex: points on a latest commit on a navbar branch )

## Git Diff 
 - `git diff` is for reading the diffrences that has been made inside the same files
 - `git diff --staged` - checking the diff on staging area
 - `git diff branchname` - to check the diff on a branch

## Git Stash
  git stash is use when u still working on some branch, and u didnt stage and commit it yet but u want to switch to another branch that is not main/master branch. 
  - `git stash` - to stash the changes
  - `git stash pop` - to bring back the changes that've been saved on shell after stashing (bcoz the changes is saves on the temporary place called shell )
