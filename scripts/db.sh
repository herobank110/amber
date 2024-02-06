#!/bin/bash
echo -n "Set Database Admin User Password: "
read -s password
echo

sed "s/AMBER_ADMIN_PW/$password/" ./db.sql | sudo mysql -u root
