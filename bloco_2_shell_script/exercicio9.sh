#!/bin/bash

argumt=$1

if [ -d $argumt ]
    then
	alo=`ls -l $argumt | wc -l`
	echo "O argumento $argumt tem $alo arquivos. "

else
	echo "Modificando a frase!!!!"

fi

echo "IMPRIMA ESTA FRASE"

#essa aqui, não
