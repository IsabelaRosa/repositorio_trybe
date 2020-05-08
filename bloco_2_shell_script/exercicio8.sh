caminho=$@

for repeticao in $caminho
    do
	if [ -f "$repeticao" ]
	  then
            echo "$repeticao é um arquivo comum."

        elif [ -d "$repeticao" ]
          then
            echo "$repeticao é um diretório."

	else
            echo "$repeticao é alguma outra coisa."

	fi
    done
