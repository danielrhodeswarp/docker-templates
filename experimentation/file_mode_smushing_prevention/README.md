[docker-compose up] gives error "containername exited with code 0"

but [docker-compose run file-mode-smushing-prevention] works as we would like (apart from we aint mounted any storage)...???!!!???

this also works as we would expect:
[docker run -v "$PWD"/shared_into_container:/shared_into_container -it filemodesmushingprevention_file-mode-smushing-prevention]

basically we add a 'nonroot' user (in 'users' group) via the Dockerfile for the OS

works for me (but possibly only by a coincidence of group and user ids).
files created as 'nonroot' in the container are owned by 'daniel' on host :-)

start the container then 'su nonroot'

todo:
- container starts up already as 'nonroot' user (??)
- [docker-compose up] starts the container ready to accept input
    (need to fiddle with CMD and ENTRYPOINT in the Dockerfile
    and / or tty, stdin_open settings in the compose file)