# Generated by Django 4.0.1 on 2022-03-03 05:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0023_alter_renterpayments_renter_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='renterpayments',
            name='renter_name',
        ),
    ]
