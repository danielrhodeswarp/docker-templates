FROM node:6.9
# replace this with your application's default port
EXPOSE 4200
VOLUME ["mounted_in_container"]
#RUN npm -g update
RUN npm install -g ember-cli
RUN cd mounted_in_container
RUN ember new ember-quickstart
RUN cd ember-quickstart
RUN npm install
CMD ember server
