#!/bin/bash
cd /home/raspberry/Krill
while :
do
  echo "Start updating bot"
  git pull krill main
  echo "Stop updating bot"
  echo "Start bot"
  node index.js
  echo "Stop bot"
done
