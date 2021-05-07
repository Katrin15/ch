#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "master" ] || [ "$branch" = "staging" ]; then
  echo -e "\\033[31mYou are trying to push directly to '$branch' branch, which is protected. This is prohibited and can cause some serious issues. Consider using you own branch and submit pull-requests instead.\\033[0m"
  exit 1
fi