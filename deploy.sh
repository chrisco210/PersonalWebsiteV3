# Script for deploying to the server
rm -r public/
gatsby build 
ssh chris@ssh.rachlinski.net 'rm -r /var/www/rachlinski.net'
scp -r public/* chris@ssh.rachlinski.net:/var/www/rachlinski.net
