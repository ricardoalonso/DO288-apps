FROM rhel7

COPY rhel_dvd.repo /etc/yum.repos.d

RUN yum install -y httpd php && yum clean all 

RUN echo "This is the index page.\n" > /var/www/html/index.html

EXPOSE 80

CMD ["httpd","-D","FOREGROUND"]
