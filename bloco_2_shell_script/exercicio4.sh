#!/bin/bash

#coloque o endereço do arquivo desejado:

arq="/home/isabela/TRYBE/exercicios_shell_script/exec2.sh"

if [ -e "$arq" ]
    then
        echo "O caminho $arq está habilitado!"
fi

if [ -w "$arq" ]
    then
        echo "Você tem permissão para editar $arq"
    else
        echo "Você NÃO foi autorizado a editar $arq"

fi
