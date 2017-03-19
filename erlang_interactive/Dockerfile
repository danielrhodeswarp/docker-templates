#no erlang package in default repos :-(
#FROM centos:latest

FROM fedora:latest

RUN yum -y update

RUN yum -y install erlang

VOLUME /erlang_source

WORKDIR /erlang_source

CMD ["/bin/bash"]
