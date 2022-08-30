#! /bin/bash

echo What is the package to add?
read ADD

echo What is the package to receive?
read RECEIVE

lerna add @wavesrcool/$ADD --scope=@wavesrcool/$RECEIVE