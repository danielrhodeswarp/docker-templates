#!/bin/bash
docker run -p 7357:7357 -p 4200:4200 -p 49152:49152 -v /home/daniel/non_distro/projects/development/ember_js_via_docker/mounted_in_container:/mounted_in_container -it my-emberjs-app bash
