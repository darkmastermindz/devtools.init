#!/usr/bin/env python

# Import the datetime module and the os module
from datetime import datetime, timedelta
import os

# Get the birthday day of the year from environment variable 'birthday_yday'
birthday_yday = int(os.getenv('birthday_yday'))

# Get the birthday year from environment variable 'birthday_year'
birthday_year = int(os.getenv('birthday_year'))

# Get the current date
current_date = datetime.now()

# Create a datetime object for the user's birthday
birthday = datetime(year=birthday_year, month=1, day=1) + timedelta(days=birthday_yday-1)

# Check if the current date is before the user's birthday this year
if current_date < birthday:
    birthday = birthday.replace(year=current_date.year-1)

# Calculate the number of years since the birthday
is_leap = (birthday.year % 4 == 0) and (birthday.year % 100 != 0) or (birthday.year % 400 == 0)
level_since_birthday = current_date.year - birthday.year + (current_date.timetuple().tm_yday - birthday.timetuple().tm_yday)/(365+is_leap)

print(level_since_birthday)
