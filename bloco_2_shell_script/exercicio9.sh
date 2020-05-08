#!/bin/bash

argumt=$1

if [ -d $argumt ]
    then
	var1=`ls -l $argumt | wc -l`
	echo "O argumento $argumt tem $var1 arquivos. "

else
	echo "O argumento $argument não é um diretório!"

fi
