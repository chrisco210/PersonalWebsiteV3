#!/bin/bash
# Script for deploying to the server
ssh_target=server

rm -r public/
npm run-script build || exit 0
ssh -t $ssh_target 'sudo rm -rf /var/www/rachlinski.net'
ssh -t $ssh_target 'sudo mkdir /var/www/rachlinski.net'
ssh -t $ssh_target 'sudo chown chris:chris /var/www/rachlinski.net'
scp -r public/* $ssh_target:/var/www/rachlinski.net/
