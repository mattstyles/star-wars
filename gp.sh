#!/bin/bash

DEST=./components/star-wars

mkdir -p $DEST
mv *.{html,js,css} $DEST
cp $DEST/index.html ./
