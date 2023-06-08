# git-experiments

Log the git logs 


### Do not do this with the public repo
I would request not to do this with the public repos. You must implement these with your private repo. 


### Maintining a clean git history using the `squash` & `rebase`

I know maintaining the git history is a difficult talk if a lot of team members are working on. 

Here i came up with the idea if everyone follows this this will maintain a clean git history for you. 

Create you own feature branch and then start working on the branch. Once you finish the working on the branch, You would move towards deploying the branch to test environment and then creating a pull request post testing all the features. 

There could be a chances that during the pull request the peers have requested some changes and you would be making those changes. 

One step to follow before hand is just do squash all commits related to the fature and then merge the changes to the main branch. 

You can use the `git rebase -i HEAD~7` to rebase your feature branch or you can use the git hash from where you would like to rebase that. 

Or you can use `git rebase -i <git-hash>^` to do the rebase from this git hash. 

this will open a editor of your choice so type `s` in front of all the commits which you would like to squash. 

One you are done close the file and then continue the rebase. Then a new window will ask for the commit message. Give a proper commit message and then your changes are squashed into your current branch. 

make sure you do the force push in your branch
`git push --force origin feature/name-of-feature`

Prefer this before doing any merge to main branch. This will help in maintaining a clean history of the source code. 


### here are some most frequent used git alias. 
```
alias: a
command: add

alias: st
command: status

alias: co
command: checkout

alias: ci
command: commit

alias: br
command: branch

alias: cm
command: checkout master

alias: cb
command: checkout -b

alias: df
command: diff

alias: lg
command: log --oneline --decorate --all --graph

alias: lga
command: log --oneline --decorate --all --graph --author

alias: lol
command: log --graph --decorate --pretty=oneline --abbrev-commit --all

alias: amend
command: commit --amend

alias: reword
command: commit --amend --no-edit

alias: unstage
command: reset HEAD --

alias: last
command: log -1 HEAD

alias: prune
command: remote prune origin

alias: pullall
command: !git pull --all

alias: pushall
command: !git push --all

alias: delete-merged-branches
command: !git branch --merged | grep -v '*' | xargs -r git branch -d

alias: amend-author
command: !git commit --amend --no-edit --reset-author

alias: count
command: "!git shortlog -s --grep"
```

## setting up VS code to do the git rebasing & squashing 

Install plugin [`GitLens`](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
in your VS code. This plugin is developed and maintain by GitKraken

configure VS code to use as visual editor. As a lot of people are not confirtable using the `vim`


```
git config --global core.editor "code --wait"
```
