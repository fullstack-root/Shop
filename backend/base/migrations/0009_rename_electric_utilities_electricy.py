# Generated by Django 4.0.1 on 2022-02-24 04:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_renter_utilities'),
    ]

    operations = [
        migrations.RenameField(
            model_name='utilities',
            old_name='electric',
            new_name='electricy',
        ),
    ]