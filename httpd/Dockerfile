FROM rhel7

COPY rhel_dvd.repo /etc/yum.repos.d

RUN yum install -y httpd php && yum clean all 

RUN echo "This is the index page.\n" > /var/www/html/index.html

RUN sed -i 's/Listen.*/Listen 8080/' /etc/httpd/conf/httpd.conf && \
    chgrp -R 0 /run/httpd /var/log/httpd && \
    chmod -R g=u /run/httpd /var/log/httpd

EXPOSE 8080

CMD ["httpd","-D","FOREGROUND"]
