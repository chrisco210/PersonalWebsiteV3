# Script for deploying to the server
rm -r public/
gatsby build 
ssh chris@192.168.1.150 'rm -r /var/www/Main'
scp -r public/* chris@192.168.1.150:/var/www/Main/
