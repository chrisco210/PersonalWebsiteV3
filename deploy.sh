# Script for deploying to the server
rm -r public/
gatsby build 
ssh chris@192.168.1.150 'rm -r /var/www/rachlinski.net'
scp -r public/* chris@192.168.1.150:/var/www/rachlinski.net
