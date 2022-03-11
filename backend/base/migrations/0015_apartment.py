# Generated by Django 4.0.1 on 2022-02-25 03:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_renter_renter_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Apartment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isOccupied', models.BooleanField(default=False)),
                ('room_number', models.IntegerField(blank=True, default=0, null=True)),
                ('room_address', models.CharField(blank=True, max_length=200, null=True)),
                ('max_capacity', models.IntegerField(blank=True, default=0, null=True)),
                ('renter_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.renter')),
            ],
        ),
    ]
