#!/bin/bash

echo "Digite o caminho de um arquivo ou diretório para ser analisado:"

read caminho

if [ -f "$caminho" ]
    then
	echo "Este é um arquivo comum."

elif [ -d "$caminho" ]
    then
	echo "Este é um diretório."

else
	echo "Este é um outro tipo de arquivo."

fi

ls -la "$caminho"
