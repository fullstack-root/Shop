# Generated by Django 4.0.1 on 2022-03-02 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0020_renterpayments'),
    ]

    operations = [
        migrations.AddField(
            model_name='renterpayments',
            name='electric',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
    ]
