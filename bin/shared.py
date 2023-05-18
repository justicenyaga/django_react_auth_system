#!/usr/bin/env python3
import os


REQUIRED_ENV_VARS = (
    'AZ_GROUP',
    'AZ_LOCATION',
    'APP_SERVICE_APP_NAME',
    'POSTGRES_SERVER_NAME',
    'POSTGRES_ADMIN_USER',
    'POSTGRES_ADMIN_PASSWORD',
    'APP_DB_NAME',

    'DOMAIN',  # url where your authentication emails will be redirected to
    'SITE_NAME',  # Name of your site

    'EMAIL_HOST_USER',  # Email address that will be used to send emails
    'EMAIL_HOST_PASSWORD',  # Password for the email address

    'SOCIAL_AUTH_GOOGLE_OAUTH2_KEY',
    'SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET',

    'SOCIAL_AUTH_FACEBOOK_KEY',
    'SOCIAL_AUTH_FACEBOOK_SECRET',
)


def verify_environment():
    missing = []
    for v in REQUIRED_ENV_VARS:
        if v not in os.environ:
            missing.append(v)
    if missing:
        print("Required Environment Variables Unset:")
        print("\t" + "\n\t".join(missing))
        print("Exiting.")
        exit()


if __name__ == '__main__':
    verify_environment()
