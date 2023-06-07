FROM alpine:latest
LABEL MAINTAINER="https://github.com/htr-tech/yphisher"
WORKDIR /yphisher/
ADD . /yphisher
RUN apk add --no-cache bash ncurses curl unzip wget php 
CMD "./yphisher.sh"
