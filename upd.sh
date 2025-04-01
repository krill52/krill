#!/bin/bash
while :
do
  echo "Start updating bot"
  git fetch krill https://github.com/krill52/krill
  echo "Stop updating bot"
  echo "Start bot"
  node index.js
  echo "Stop bot"
done