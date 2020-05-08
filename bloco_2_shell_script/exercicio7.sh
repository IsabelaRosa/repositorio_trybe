#!/bin/bash


caminho=$1

if [ -f  `$caminho` ]
    then
        echo "$caminho é um arquivo comum."

elif [ -d `$caminho` ]
    then
        echo "$caminho é um diretório."

else
        echo "$caminho é alguma outra coisa."

fi

ls -la $caminho
