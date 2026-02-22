#!/bin/bash

cd "$(dirname "$0")"
npx shadow-cljs release pages
cp resources/public/css/style.css docs/css/style.css
