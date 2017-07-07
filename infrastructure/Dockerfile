FROM ubuntu:16.04
MAINTAINER Ken Lalobo

RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y \
      apache2 \
      php7.0 \
      php7.0-cli \
      libapache2-mod-php7.0 \
      php7.0-gd \
      php7.0-json \
      php7.0-ldap \
      php7.0-mbstring \
      php7.0-mysql \
      php7.0-pgsql \
      php7.0-sqlite3 \
      php7.0-xml \
      php7.0-xsl \
      php7.0-zip \
      php7.0-soap \
      php7.0-curl \
      curl \
      php7.0-gmp \
      git \
      wget \
      mysql-client

RUN curl -sS https://getcomposer.org/installer | php -- --filename=composer --install-dir=/usr/local/bin

RUN wget https://phar.phpunit.de/phpunit-6.1.phar
RUN chmod +x phpunit-6.1.phar
RUN mv phpunit-6.1.phar /usr/local/bin/phpunit

RUN useradd -ms /bin/bash ubuntu

VOLUME ["/home/ubuntu/fe.homepage/"]
VOLUME ["/opt/beautystack/"]

ADD ./home-ubuntu-ssh/id_rsa /home/ubuntu/.ssh/id_rsa
ADD ./home-ubuntu-ssh/id_rsa.pub /home/ubuntu/.ssh/id_rsa.pub
ADD ./home-ubuntu-ssh/config /home/ubuntu/.ssh/config
RUN chmod 600 /home/ubuntu/.ssh/id_rsa
RUN chmod 600 /home/ubuntu/.ssh/id_rsa.pub
RUN chmod 600 /home/ubuntu/.ssh/config

RUN chown -R ubuntu:ubuntu /home/ubuntu/

RUN a2enmod rewrite
RUN a2enmod headers
RUN a2dissite 000-default

ADD etc-apache2-sites-available/fe.homepage.conf /etc/apache2/sites-available/fe.homepage.conf
RUN a2ensite fe.homepage

EXPOSE 80

# Default command	
CMD ["/opt/beautystack/beautystack-startup"]