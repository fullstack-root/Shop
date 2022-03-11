# Generated by Django 4.0.1 on 2022-02-24 03:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_remove_rooms_renter_id_remove_water_renter_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Renter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('renter_name', models.CharField(blank=True, max_length=200, null=True)),
                ('renter_id', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Utilities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('water', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('electrict', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('waterIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('trash', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('trashIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('electric', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('electricIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('paymentMethod', models.CharField(blank=True, max_length=200, null=True)),
                ('renter_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.renter')),
            ],
        ),
    ]
