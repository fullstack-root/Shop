# Generated by Django 4.0.1 on 2022-02-24 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_remove_utilities_electrict'),
    ]

    operations = [
        migrations.AddField(
            model_name='utilities',
            name='electrictyBill',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='utilities',
            name='trashBill',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
        migrations.AddField(
            model_name='utilities',
            name='waterBill',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True),
        ),
    ]
