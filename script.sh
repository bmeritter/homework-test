#!/usr/bin/env bash

rm -rf homework-test

git clone git@github.com:bmeritter/homework-test.git

rm -rf  spec

mv homework-test/spec ./

npm i

npm test